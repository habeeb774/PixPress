import type { CompressionSettings } from "./types";

/**
 * يجب أن يطابق النطاق الذي يُخدَم منه الموقع فعلاً — تبني عليه وسوم canonical
 * وخريطة الموقع وrobots وOpen Graph. الافتراضي هو نطاق الإنتاج الحالي؛
 * اضبط NEXT_PUBLIC_SITE_URL فور ربط نطاق مخصّص.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leanpix.site";
export const SITE_NAME = "LeanPix";

/** 25MB لكل ملف — يمنع استنزاف ذاكرة المتصفح */
export const MAX_FILE_SIZE = 25 * 1024 * 1024;
export const MAX_FILES = 30;

export const ACCEPTED_MIME = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
] as const;

export const ACCEPT_MAP: Record<string, string[]> = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
  "image/avif": [".avif"],
  "image/gif": [".gif"],
};

export const DEFAULT_SETTINGS: CompressionSettings = {
  preset: "auto",
  customQuality: 80,
  format: "original",
  maxDimension: 0,
  targetKB: 0,
  stripExif: true,
  keepTransparency: true,
};

export const PRESET_QUALITY: Record<string, number> = {
  light: 90,
  medium: 78,
  strong: 60,
};
