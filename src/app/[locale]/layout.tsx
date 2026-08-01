import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Alexandria } from "next/font/google";
import { dir, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { GOOGLE_SITE_VERIFICATION, SITE_NAME, SITE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";
import "../globals.css";

/**
 * خط الإسكندرية يغطّي العربية واللاتينية بعائلة واحدة متغيّرة،
 * فنربطه بمتغيّري العرض والنص معاً: وزن ثقيل للعناوين وخفيف للمتن.
 */
const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-alexandria",
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
    alternates: {
      canonical: `${SITE_URL}/${l}`,
      languages: { ar: `${SITE_URL}/ar`, en: `${SITE_URL}/en`, "x-default": `${SITE_URL}/ar` },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${l}`,
      siteName: SITE_NAME,
      title: t.hero.title,
      description: t.hero.subtitle,
      locale: l === "ar" ? "ar_SA" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.hero.title,
      description: t.hero.subtitle,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
    verification: { google: GOOGLE_SITE_VERIFICATION },
    icons: { icon: "/favicon.svg" },
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
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${alexandria.variable} min-h-screen flex flex-col`}>
        <Header locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
