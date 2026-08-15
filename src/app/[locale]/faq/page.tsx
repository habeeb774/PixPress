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
    ["هل أحتاج تسجيلاً أو حساباً؟", "لا. لا تسجيل ولا بريد ولا بطاقة. افتح الصفحة واستخدم أي أداة مباشرةً. لا نحتفظ بشيء عنك لأننا لا نستقبل شيئاً أصلاً."],
    ["هل الخدمة مجانية بالكامل؟", "نعم، وبلا علامة مائية وبلا حد يومي. المعالجة تجري على جهازك أنت فلا تكلّفنا خوادم حتى نطلب مقابلها. تكاليف الموقع تغطّيها الإعلانات."],
    ["كيف أضبط جودة مخصصة؟", "من لوحة الإعدادات اختر «جودة مخصصة» وحرّك المؤشّر بين ١ و١٠٠. أو اختر «بلا ضغط» إن أردت تغيير الأبعاد أو الصيغة دون المساس بالجودة."],
    ["ما الفرق بينكم وبين TinyPNG أو iLoveIMG؟", "تلك الأدوات ترفع صورك إلى خوادمها ثم تعيدها. نحن لا نرفع شيئاً — ولهذا لا يوجد طابور انتظار ولا حد يومي ولا سؤال عمّا يحدث لصورك بعد المعالجة. كما ندعم AVIF وتوليد الأيقونات وتحويل PDF."],
    ["هل تدعمون HEIC من آيفون؟", "ليس بعد. متصفحات سطح المكتب لا تفكّ ترميز HEIC، وإضافة فاكّ ترميز إلى الصفحة تُثقلها على الجميع لأجل قلّة. صوّر بصيغة «الأكثر توافقاً» من إعدادات الكاميرا في آيفون وستحصل على JPG."],
    ["هل يعمل الموقع بدون إنترنت؟", "بعد تحميل الصفحة، المعالجة نفسها لا تحتاج اتصالاً لأنها تجري محلياً بالكامل."],
    ["أين تُحفظ إحصائياتي؟", "في التخزين المحلي لمتصفحك وحده، ولا تغادر جهازك. تستطيع تصفيرها من زر «تصفير الإحصائيات» في لوحة الاستخدام."],
    ["هل يمكن استخدامه على الجوال؟", "نعم، على iPhone وAndroid من المتصفح مباشرة دون تثبيت تطبيق. الدفعات الكبيرة جداً قد تكون أبطأ على هاتف قديم لأن المعالجة تستهلك ذاكرة الجهاز."],
  ],
  en: [
    ["Are my images uploaded?", "No. Compression runs in your browser via Web Workers; files never leave your device."],
    ["How much do I save?", "Typically 40–80%, depending on format and content. Photographs compress far better than flat graphics."],
    ["Does quality suffer?", "Auto mode targets a quality where the difference isn't visible. Use the compare slider to check before downloading."],
    ["What about animated GIFs?", "We handle the first frame of static GIFs and convert to PNG or JPEG. Animation isn't supported yet."],
    ["Is transparency kept?", "Yes for PNG, WebP, and AVIF. JPEG has no alpha channel, so the background is filled white."],
    ["What are the limits?", "25 MB per image and 30 images per batch, to protect browser memory."],
    ["Do I need an account?", "No. No sign-up, no email, no card. Open the page and use any tool. We keep nothing about you because we receive nothing in the first place."],
    ["Is it completely free?", "Yes, with no watermark and no daily cap. Processing happens on your own device, so it costs us no servers to charge for. Ads cover the running costs."],
    ["How do I set a custom quality?", "In the settings panel choose Custom quality and move the slider between 1 and 100. Or pick No compression if you want to change dimensions or format without touching quality."],
    ["How is this different from TinyPNG or iLoveIMG?", "Those upload your images to their servers and send them back. We upload nothing — hence no queue, no daily cap, and no question about what happens to your files afterwards. We also support AVIF, icon generation and PDF conversion."],
    ["Do you support HEIC from iPhone?", "Not yet. Desktop browsers cannot decode HEIC, and bundling a decoder would slow the page for everyone to serve a few. Set your iPhone camera to Most Compatible and you will get JPG."],
    ["Does it work offline?", "Once the page has loaded, processing needs no connection because it all happens locally."],
    ["Where are my statistics stored?", "In your browser's local storage alone; they never leave your device. Reset them from the usage dashboard whenever you like."],
    ["Can I use it on mobile?", "Yes, on iPhone and Android straight from the browser with nothing to install. Very large batches can be slower on an older phone, since processing uses device memory."],
  ],
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  const ar = l === "ar";
  // عناوين الصفحة بلغة الزائر حتى لو بقي المتن إنجليزياً
  const t = getDictionary(l);
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
