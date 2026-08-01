import { NextResponse } from "next/server";
import sharp from "sharp";
import { MAX_FILE_SIZE } from "@/lib/constants";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * مسار خادمي احتياطي لمتصفحات لا تدعم ترميز AVIF/WebP محلياً.
 * الواجهة لا تستدعيه إلا عند فشل المسار داخل المتصفح.
 * الملفات تُعالَج في الذاكرة ولا تُكتب على القرص ولا تُخزَّن.
 */

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

// حد بسيط لمعدّل الطلبات لكل IP داخل نفس النسخة
const hits = new Map<string, { n: number; reset: number }>();
const WINDOW = 60_000;
const LIMIT = 20;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.reset) {
    hits.set(ip, { n: 1, reset: now + WINDOW });
    return false;
  }
  rec.n += 1;
  return rec.n > LIMIT;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const form = await req.formData();
  const file = form.get("file");
  const quality = Math.min(100, Math.max(1, Number(form.get("quality") ?? 80)));
  const format = String(form.get("format") ?? "image/webp");
  const maxDimension = Number(form.get("maxDimension") ?? 0);

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "missing_file" }, { status: 400 });
  }
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }
  if (!ALLOWED.has(format)) {
    return NextResponse.json({ error: "unsupported_format" }, { status: 400 });
  }

  const input = Buffer.from(await file.arrayBuffer());

  try {
    let pipeline = sharp(input, { failOn: "error" }).rotate(); // rotate() يطبّق اتجاه EXIF ثم يُسقطه
    const meta = await sharp(input).metadata();
    if (!meta.width || !meta.height) throw new Error("not_an_image");

    if (maxDimension > 0) {
      pipeline = pipeline.resize({ width: maxDimension, height: maxDimension, fit: "inside", withoutEnlargement: true });
    }

    if (format === "image/jpeg") pipeline = pipeline.jpeg({ quality, mozjpeg: true, progressive: true });
    else if (format === "image/png") pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality });
    else if (format === "image/webp") pipeline = pipeline.webp({ quality, effort: 5 });
    else pipeline = pipeline.avif({ quality, effort: 4 });

    const output = await pipeline.toBuffer();

    return new NextResponse(new Uint8Array(output), {
      headers: {
        "Content-Type": format,
        "Content-Length": String(output.byteLength),
        "Cache-Control": "no-store",
        "X-Original-Size": String(file.size),
      },
    });
  } catch {
    return NextResponse.json({ error: "invalid_image" }, { status: 422 });
  }
}
