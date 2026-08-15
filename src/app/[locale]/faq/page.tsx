import type { Metadata } from "next";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = { title: "FAQ / الأسئلة الشائعة" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  const t = getDictionary(l);
  const items = getPages(l).faq;

  // Schema.org FAQPage يجعل الأسئلة مؤهّلة للظهور كمقتطف مُنسَّق
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Prose title={t.nav.faq}>
        <dl className="space-y-5">
          {items.map(([q, a]) => (
            <div key={q} className="rounded-[var(--radius-card)] border border-[var(--color-line)] p-5">
              <dt className="mb-1.5 font-semibold text-[var(--color-ink)]">{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>
      </Prose>
    </>
  );
}
