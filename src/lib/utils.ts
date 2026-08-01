import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CompressionSettings, OutputFormat } from "./types";
import { PRESET_QUALITY } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes: number, locale = "en"): string {
  if (!bytes) return "0 B";
  const units = locale === "ar" ? ["ب", "كب", "مب", "جب"] : ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const v = bytes / Math.pow(1024, i);
  return `${v.toFixed(v >= 100 || i === 0 ? 0 : 1)} ${units[i]}`;
}

export function savingsPercent(before: number, after: number): number {
  if (!before) return 0;
  return Math.max(0, Math.round(((before - after) / before) * 100));
}

/**
 * الضغط التلقائي: نختار الجودة حسب الصيغة وحجم الملف.
 * الصور الكبيرة تتحمّل ضغطاً أقوى دون فرق ملحوظ للعين.
 */
export function autoQuality(file: File): number {
  const mb = file.size / (1024 * 1024);
  const base = file.type === "image/png" ? 85 : 82;
  if (mb > 8) return base - 12;
  if (mb > 3) return base - 7;
  if (mb < 0.3) return base + 8;
  return base;
}

export function resolveQuality(file: File, s: CompressionSettings): number {
  if (s.preset === "auto") return autoQuality(file);
  if (s.preset === "custom") return clamp(s.customQuality, 1, 100);
  return PRESET_QUALITY[s.preset] ?? 80;
}

/** GIF لا يمكن ترميزه عبر canvas، فنحوّله إلى PNG للحفاظ على الشفافية */
export function resolveMime(file: File, format: OutputFormat, keepAlpha: boolean): string {
  if (format !== "original") return `image/${format}`;
  if (file.type === "image/gif") return keepAlpha ? "image/png" : "image/jpeg";
  return file.type;
}

export function extFor(mime: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/avif": "avif",
  };
  return map[mime] ?? "img";
}

export function renameWithExt(name: string, mime: string): string {
  return `${name.replace(/\.[^.]+$/, "")}-min.${extFor(mime)}`;
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}
