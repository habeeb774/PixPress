import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/constants";

const paths = ["", "/about", "/privacy", "/terms", "/contact", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${SITE_URL}/${locale}${p}`,
      lastModified: new Date(),
      changeFrequency: p === "" ? ("weekly" as const) : ("monthly" as const),
      priority: p === "" ? 1 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${p}`])),
      },
    }))
  );
}
