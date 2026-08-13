import type { CompressionSettings } from "./types";

export const toolSlugs = ["compress", "resize", "convert", "icon", "exif"] as const;
export type ToolSlug = (typeof toolSlugs)[number];

export function isToolSlug(v: string): v is ToolSlug {
  return (toolSlugs as readonly string[]).includes(v);
}

/**
 * كل أداة ليست محرّكاً جديداً — هي المحرّك نفسه بإعدادات مهيّأة مسبقاً.
 * تُطبَّق عند فتح الصفحة فيجد المستخدم الأداة جاهزة لغرضها دون ضبط يدوي.
 */
export const toolPresets: Record<ToolSlug, Partial<CompressionSettings>> = {
  compress: { preset: "auto", format: "original", maxDimension: 0, targetKB: 0 },
  resize: { preset: "light", format: "original", maxDimension: 1920, targetKB: 0 },
  convert: { preset: "auto", format: "webp", maxDimension: 0, targetKB: 0 },
  // صانع الأيقونات لا يمرّ بمحرّك الضغط، فلا إعدادات له
  icon: {},
  exif: { preset: "light", format: "original", maxDimension: 0, targetKB: 0, stripExif: true },
};
