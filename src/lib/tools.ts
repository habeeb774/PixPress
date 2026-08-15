import type { CompressionSettings } from "./types";

export const toolSlugs = ["compress", "resize", "convert", "pdf", "icon", "exif"] as const;
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
  // تغيير الأبعاد وإزالة EXIF ليسا أداتَي ضغط: نبدأ بأعلى جودة
  // فلا يفقد المستخدم شيئاً لم يطلب فقده
  resize: { preset: "max", format: "original", maxDimension: 1920, targetKB: 0 },
  convert: { preset: "auto", format: "webp", maxDimension: 0, targetKB: 0 },
  // هاتان لا تمرّان بمحرّك الضغط، فلا إعدادات لهما
  pdf: {},
  icon: {},
  exif: { preset: "max", format: "original", maxDimension: 0, targetKB: 0, stripExif: true },
};
