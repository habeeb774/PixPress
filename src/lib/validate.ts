import { ACCEPTED_MIME, MAX_FILE_SIZE } from "./constants";

/** توقيعات الملفات (magic bytes) — لا نثق بالامتداد ولا بالـ MIME المُصرّح به */
const SIGNATURES: { mime: string; test: (b: Uint8Array) => boolean }[] = [
  { mime: "image/jpeg", test: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  { mime: "image/png", test: (b) => b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47 },
  { mime: "image/gif", test: (b) => b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 },
  {
    mime: "image/webp",
    test: (b) =>
      b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45,
  },
  {
    mime: "image/avif",
    test: (b) => {
      const s = String.fromCharCode(...Array.from(b.slice(4, 12)));
      return s.startsWith("ftyp") && (s.includes("avif") || s.includes("avis"));
    },
  },
];

export interface ValidationResult {
  ok: boolean;
  reason?: "size" | "type" | "empty";
  detectedMime?: string;
}

/** تحقّق فعلي من محتوى الملف قبل معالجته */
export async function validateImage(file: File): Promise<ValidationResult> {
  if (file.size === 0) return { ok: false, reason: "empty" };
  if (file.size > MAX_FILE_SIZE) return { ok: false, reason: "size" };

  const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  const match = SIGNATURES.find((s) => s.test(head));
  if (!match) return { ok: false, reason: "type" };
  if (!(ACCEPTED_MIME as readonly string[]).includes(match.mime)) return { ok: false, reason: "type" };
  return { ok: true, detectedMime: match.mime };
}
