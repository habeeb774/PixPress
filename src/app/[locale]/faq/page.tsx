import type { Metadata } from "next";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "FAQ / الأسئلة الشائعة" };

const QA = {
  ar: [
    ["هل تُرفع صوري إلى خادم؟", "لا. الضغط يجري داخل متصفحك عبر Web Workers، وملفاتك لا تغادر جهازك."],
    ["كم تبلغ نسبة التوفير؟", "عادة بين ٤٠٪ و٨٠٪ حسب الصيغة والمحتوى. الصور الفوتوغرافية توفّر أكثر من الرسوم المسطّحة."],
    ["هل تتأثر جودة الصورة؟", "الوضع التلقائي يختار جودة لا يظهر عندها فرق للعين. استخدم منزلق المقارنة للتأكد بنفسك قبل التنزيل."],
    ["ماذا عن الصور المتحركة GIF؟", "ندعم الإطار الأول للصور الثابتة ونحوّله إلى PNG أو JPEG. الرسوم المتحركة غير مدعومة حالياً."],
    ["هل تُحفظ الشفافية؟", "نعم مع PNG وWebP وAVIF. أما JPEG فلا يدعم الشفافية فتُملأ الخلفية بالأبيض."],
    ["ما الحد الأقصى للحجم؟", "٢٥ ميجابايت للصورة الواحدة و٣٠ صورة في الدفعة، حمايةً لذاكرة المتصفح."],
  ],
  en: [
    ["Are my images uploaded?", "No. Compression runs in your browser via Web Workers; files never leave your device."],
    ["How much do I save?", "Typically 40–80%, depending on format and content. Photographs compress far better than flat graphics."],
    ["Does quality suffer?", "Auto mode targets a quality where the difference isn't visible. Use the compare slider to check before downloading."],
    ["What about animated GIFs?", "We handle the first frame of static GIFs and convert to PNG or JPEG. Animation isn't supported yet."],
    ["Is transparency kept?", "Yes for PNG, WebP, and AVIF. JPEG has no alpha channel, so the background is filled white."],
    ["What are the limits?", "25 MB per image and 30 images per batch, to protect browser memory."],
  ],
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = !isLocale(locale) || locale === "ar";
  const t = getDictionary(ar ? "ar" : "en");
  const items = ar ? QA.ar : QA.en;

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
