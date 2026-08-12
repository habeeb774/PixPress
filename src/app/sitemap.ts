import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/constants";
import { toolSlugs } from "@/lib/tools";

const paths = [
  "",
  ...toolSlugs.map((s) => `/${s}`),
  "/about",
  "/privacy",
  "/terms",
  "/contact",
  "/faq",
];

/** صفحات الأدوات هي نقاط الدخول من البحث، فتأتي بعد الرئيسية مباشرة في الأولوية */
const priorityFor = (p: string) =>
  p === "" ? 1 : toolSlugs.some((s) => p === `/${s}`) ? 0.9 : 0.6;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${SITE_URL}/${locale}${p}`,
      lastModified: new Date(),
      changeFrequency: p === "" ? ("weekly" as const) : ("monthly" as const),
      priority: priorityFor(p),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${p}`])),
      },
    }))
  );
}
