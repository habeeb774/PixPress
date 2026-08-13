/**
 * المتصفحات لا تُرمّز ICO، فنبنيه بأنفسنا.
 * الصيغة تقبل حمولات PNG مباشرةً منذ Windows Vista، فنتفادى ترميز BMP/DIB يدوياً
 * ونكتفي بتجميع ترويسة الفهرس فوق صور PNG جاهزة.
 */
export async function buildIco(pngs: { size: number; blob: Blob }[]): Promise<Blob> {
  const buffers = await Promise.all(pngs.map((p) => p.blob.arrayBuffer()));
  const count = pngs.length;
  const headerSize = 6 + count * 16;
  const header = new DataView(new ArrayBuffer(headerSize));

  header.setUint16(0, 0, true); // محجوز
  header.setUint16(2, 1, true); // النوع: أيقونة
  header.setUint16(4, count, true);

  let offset = headerSize;
  pngs.forEach((p, i) => {
    const at = 6 + i * 16;
    // البايت الواحد لا يسع 256، والصفر يعني 256 في هذه الصيغة
    const dim = p.size >= 256 ? 0 : p.size;
    header.setUint8(at, dim);
    header.setUint8(at + 1, dim);
    header.setUint8(at + 2, 0); // لا لوحة ألوان
    header.setUint8(at + 3, 0); // محجوز
    header.setUint16(at + 4, 1, true); // planes
    header.setUint16(at + 6, 32, true); // بت لكل بكسل
    header.setUint32(at + 8, buffers[i].byteLength, true);
    header.setUint32(at + 12, offset, true);
    offset += buffers[i].byteLength;
  });

  return new Blob([header.buffer, ...buffers], { type: "image/x-icon" });
}

/**
 * الأيقونات مربّعة والمصدر غالباً ليس كذلك.
 * cover يقتطع الزائد ليملأ المربّع، وcontain يُبقي الصورة كاملة بهوامش شفافة.
 */
export function renderSquare(
  src: CanvasImageSource & { width: number; height: number },
  size: number,
  mode: "cover" | "contain"
): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return Promise.reject(new Error("canvas-unavailable"));

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const ratio =
    mode === "cover"
      ? Math.max(size / src.width, size / src.height)
      : Math.min(size / src.width, size / src.height);
  const w = src.width * ratio;
  const h = src.height * ratio;
  ctx.drawImage(src, (size - w) / 2, (size - h) / 2, w, h);

  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("encode-failed"))), "image/png");
  });
}

/** المقاسات التي يطلبها المتصفح ونظام التشغيل فعلياً */
export const ICON_SIZES = [16, 32, 48, 64, 128, 180, 192, 256, 512] as const;

/** ما يُدرَج داخل ملف .ico — المقاسات الكبيرة تُترك لملفات PNG منفصلة */
export const ICO_SIZES = [16, 32, 48, 64, 128, 256] as const;
