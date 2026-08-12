import type { Metadata } from "next";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "About / من نحن" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = !isLocale(locale) || locale === "ar";
  const t = getDictionary(ar ? "ar" : "en");

  return (
    <Prose title={t.nav.about}>
      {ar ? (
        <>
          <p>
            LeanPix أداة ضغط صور تعمل بالكامل داخل متصفحك. لا نرفع ملفاتك ولا نخزّنها ولا نراها. تفتح
            الصفحة، تسحب صورك، وتنتهي.
          </p>
          <h2>لماذا في المتصفح؟</h2>
          <p>
            رفع الصور إلى خادم يعني انتظاراً، وحدوداً على الحجم، وثقة مطلوبة في طرف ثالث. المتصفحات
            الحديثة تُرمّز JPEG وWebP وAVIF محلياً بجودة ممتازة، فاستخدمنا ذلك عبر Web Workers حتى
            تبقى الواجهة سلسة أثناء معالجة عشرات الصور.
          </p>
          <h2>كيف نختار الجودة</h2>
          <p>
            الوضع التلقائي يوازن بين الحجم والجودة حسب صيغة الصورة وحجمها: الصور الكبيرة تتحمّل ضغطاً
            أقوى دون فرق تراه العين، والصغيرة تُعامل بحذر أكبر. وإن أردت التحكم الكامل، اضبط الجودة
            يدوياً من ١ إلى ١٠٠.
          </p>
        </>
      ) : (
        <>
          <p>
            LeanPix compresses images entirely inside your browser. Your files are never uploaded,
            stored, or seen by us.
          </p>
          <h2>Why in-browser?</h2>
          <p>
            Uploading means waiting, size caps, and trusting a third party. Modern browsers encode
            JPEG, WebP, and AVIF locally at excellent quality, so we run that work in Web Workers and
            keep the interface responsive across large batches.
          </p>
          <h2>How quality is chosen</h2>
          <p>
            Auto mode balances size against quality based on format and file size. Large photos take
            stronger compression without visible loss; small ones are treated conservatively. Set
            quality manually from 1 to 100 whenever you want full control.
          </p>
        </>
      )}
    </Prose>
  );
}
