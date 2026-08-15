import type { Locale } from "./config";
import ar from "./locales/ar";
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";

/**
 * كل لغة في ملفها. القاموس العربي هو المرجع، وبقيّة اللغات مقيّدة بشكله
 * عبر `typeof ar` فلا تمرّ ترجمة ناقصة أو مفتاح زائد دون خطأ ترجمة.
 */
export const dictionaries = { ar, en, es, fr };

export type Dictionary = typeof ar;
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
