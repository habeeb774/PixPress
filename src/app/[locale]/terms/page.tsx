import type { Metadata } from "next";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Terms / الشروط" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = !isLocale(locale) || locale === "ar";
  const t = getDictionary(ar ? "ar" : "en");

  return (
    <Prose title={t.nav.terms}>
      {ar ? (
        <>
          <h2>الاستخدام</h2>
          <p>
            الخدمة مجانية وتُقدَّم كما هي. استخدمها في صور تملك حق التصرف فيها فقط، ولا تستخدمها في
            أي محتوى مخالف للقانون.
          </p>
          <h2>الحدود</h2>
          <p>الحد الأقصى ٢٥ ميجابايت للصورة و٣٠ صورة في الدفعة الواحدة، حمايةً لذاكرة متصفحك.</p>
          <h2>المسؤولية</h2>
          <p>
            الضغط عملية غير عكسية. احتفظ دائماً بنسخة من الأصل. لا نتحمّل مسؤولية أي فقد للبيانات
            الناتج عن استخدام الأداة.
          </p>
        </>
      ) : (
        <>
          <h2>Use</h2>
          <p>
            The service is free and provided as is. Use it only on images you have the right to
            modify, and never for unlawful content.
          </p>
          <h2>Limits</h2>
          <p>25 MB per image and 30 images per batch, to protect your browser’s memory.</p>
          <h2>Liability</h2>
          <p>
            Compression is irreversible. Always keep a copy of the original. We accept no liability
            for data loss arising from use of the tool.
          </p>
        </>
      )}
    </Prose>
  );
}
