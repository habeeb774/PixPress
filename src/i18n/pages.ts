import type { Locale } from "./config";
import { pages as arPages } from "./locales/ar";
import { pages as enPages } from "./locales/en";
import { pages as esPages } from "./locales/es";
import { pages as frPages } from "./locales/fr";

/** متن الصفحات الثابتة، منفصل عن قاموس الواجهة لأنه نثر طويل لا مفاتيح واجهة */
export const pagesByLocale = { ar: arPages, en: enPages, es: esPages, fr: frPages };
export const getPages = (locale: Locale) => pagesByLocale[locale];
