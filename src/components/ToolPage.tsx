import Link from "next/link";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { toolPresets, toolSlugs, type ToolSlug } from "@/lib/tools";
import { SITE_URL } from "@/lib/constants";
import Workspace from "./Workspace";
import IconMaker from "./IconMaker";
import PdfMaker from "./PdfMaker";

/**
 * كل أدوات الموقع تشترك في هذا القالب: عنوان الأداة، ثم الأداة نفسها فوراً،
 * ثم شرح وأسئلة شائعة تُغذّي الفهرسة. الأداة تسبق النص دائماً — الزائر جاء ليستخدمها.
 */
export default function ToolPage({ locale, slug }: { locale: Locale; slug: ToolSlug }) {
  const t = getDictionary(locale);
  const tool = t.tools[slug];
  const others = toolSlugs.filter((s) => s !== slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  /** يمنح الصفحة مسار تنقّل ظاهراً في نتائج البحث بدل عنوان عارٍ */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.nav.home,
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.nav,
        item: `${SITE_URL}/${locale}/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="mx-auto max-w-3xl px-5 pb-8 pt-14 text-center md:pt-20">
        <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{tool.h1}</h1>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-ink-soft)]">{tool.intro}</p>
      </section>

      {slug === "icon" ? (
        <IconMaker t={t} />
      ) : slug === "pdf" ? (
        <PdfMaker t={t} />
      ) : (
        <Workspace t={t} locale={locale} preset={toolPresets[slug]} />
      )}

      <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-14">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="mb-6 text-2xl font-bold">{t.howto.title}</h2>
          <ol className="space-y-4">
            {tool.steps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-[var(--color-ink-soft)]">{s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 space-y-8">
            {tool.body.map((s) => (
              <div key={s.h}>
                <h2 className="mb-2 text-xl font-semibold">{s.h}</h2>
                <p className="leading-relaxed text-[var(--color-ink-soft)]">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="mb-6 text-2xl font-bold">{t.nav.faq}</h2>
          <dl className="space-y-5">
            {tool.faq.map((f) => (
              <div
                key={f.q}
                className="rounded-[var(--radius-card)] border border-[var(--color-line)] p-5"
              >
                <dt className="mb-1.5 font-semibold">{f.q}</dt>
                <dd className="leading-relaxed text-[var(--color-ink-soft)]">{f.a}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mb-4 mt-12 text-2xl font-bold">{t.toolsNav.others}</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s}
                href={`/${locale}/${s}`}
                className="rounded-[var(--radius-card)] border border-[var(--color-line)] p-4 font-medium transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                {t.tools[s].nav}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/** البيانات الوصفية مشتركة أيضاً، فتبقى العناوين والروابط الأساسية متّسقة */
export function toolMetadata(locale: Locale, slug: ToolSlug) {
  const t = getDictionary(locale);
  const tool = t.tools[slug];
  return {
    title: tool.h1,
    description: tool.meta,
    alternates: {
      canonical: `${SITE_URL}/${locale}/${slug}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/${slug}`])),
        "x-default": `${SITE_URL}/${defaultLocale}/${slug}`,
      },
    },
    openGraph: { title: tool.h1, description: tool.meta, url: `${SITE_URL}/${locale}/${slug}` },
  };
}
