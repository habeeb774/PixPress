import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo } from "next/font/google";
import { defaultLocale, dir, isLocale, locales, ogLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";
import "../globals.css";

/**
 * خط القاهرة يغطّي العربية واللاتينية بعائلة واحدة متغيّرة،
 * فنربطه بمتغيّري العرض والنص معاً: وزن ثقيل للعناوين وخفيف للمتن.
 * الأوزان هنا يجب أن تشمل كل وزن تطلبه globals.css وإلا استعاض المتصفح بأقرب وزن.
 */
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const t = getDictionary(l);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${t.hero.title} · ${SITE_NAME}`, template: `%s · ${SITE_NAME}` },
    description: t.hero.subtitle,
    applicationName: SITE_NAME,
    keywords:
      l === "ar"
        ? [
            "ضغط الصور",
            "ضغط الصور مجانا",
            "ضغط الصورة",
            "ضغط حجم الصور",
            "ضغط حجم الصورة",
            "ضغط ملف jpg",
            "ضغط الصور jpg",
            "ضغط الصور gif",
            "تصغير حجم الصور",
            "تحويل الصور إلى webp",
          ]
        : ["compress images", "image compressor", "compress jpg", "compress png", "resize images"],
    alternates: {
      canonical: `${SITE_URL}/${l}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`])),
        "x-default": `${SITE_URL}/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${l}`,
      siteName: SITE_NAME,
      title: t.hero.title,
      description: t.hero.subtitle,
      locale: ogLocale[l],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.hero.title,
      description: t.hero.subtitle,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [{ url: "/icon-180x180.png", sizes: "180x180" }],
    },
  };
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080d19" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    description: t.hero.subtitle,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: ["JPG", "PNG", "WebP", "AVIF", "GIF"],
  };

  return (
    <html lang={locale} dir={dir(locale)} className={cairo.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
