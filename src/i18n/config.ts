// تُضاف اللغة هنا فقط بعد اكتمال ترجمتها — لا نشحن لغة نصفها إنجليزي
export const locales = ["ar", "en", "es", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

/** العربية وحدها من اليمين إلى اليسار بين اللغات المدعومة حالياً */
export const dir = (l: Locale) => (l === "ar" ? "rtl" : "ltr");

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

/** ما يُعرض في مبدّل اللغة، بلغته الأصلية لا مترجَماً */
export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
  es: "Español",
  fr: "Français",
};

/** وسوم OpenGraph تحتاج صيغة اللغة والبلد معاً */
export const ogLocale: Record<Locale, string> = {
  ar: "ar_SA",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
};
