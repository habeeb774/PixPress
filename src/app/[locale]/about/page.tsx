import type { Metadata } from "next";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "About / من نحن" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  const ar = l === "ar";
  // عناوين الصفحة بلغة الزائر حتى لو بقي المتن إنجليزياً
  const t = getDictionary(l);

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

          <h2>لماذا بنينا LeanPix</h2>
          <p>
            أغلب أدوات ضغط الصور تطلب منك أمراً واحداً قبل أن تخدمك: ارفع ملفاتك إلى خادمها. وهذا
            سؤال بسيط في ظاهره وثقيل في حقيقته — صور المنتجات قبل إطلاقها، ومستندات شخصية، وصور عائلية
            تحمل إحداثيات المكان الذي التُقطت فيه. تذهب كلها إلى جهاز لا تعرف من يديره ولا كم تبقى عليه.
          </p>
          <p>
            بنينا LeanPix على قناعة أن هذا السؤال لم يعد ضرورياً. المتصفح الذي بين يديك يملك اليوم
            ما يكفي لأداء العمل كاملاً، فلا داعي لأن تغادر صورك جهازك حتى تُضغط.
          </p>

          <h2>ما نلتزم به</h2>
          <p>
            <b>لا نستقبل صورك.</b> ليست سياسةً نَعِد بها بل بنيةٌ لا تسمح بغيرها — لا يوجد خادم يستقبل
            الصور أصلاً. تستطيع فصل الإنترنت بعد تحميل الصفحة ومتابعة العمل.
          </p>
          <p>
            <b>بلا حسابات ولا حدود يومية.</b> لا تسجيل ولا بريد ولا بطاقة، ولا عدّاد يوقفك عند الصورة
            العاشرة. الحدّ الوحيد ٢٥ ميجابايت للصورة و٣٠ صورة في الدفعة، وهو حدّ ذاكرة متصفحك لا حدّ خدمة.
          </p>
          <p>
            <b>بلا علامة مائية.</b> ما ينزل إلى جهازك هو صورتك، لا صورتك موقّعة باسمنا.
          </p>

          <h2>لمن هذه الأداة</h2>
          <p>
            لأصحاب المتاجر الذين يجهّزون عشرات صور المنتجات قبل رفعها، ولأصحاب المواقع الذين تُبطئهم
            الصور في مؤشرات السرعة، وللمطوّرين الذين يحتاجون WebP أو AVIF أو حزمة أيقونات في دقيقة،
            ولكل من يريد حذف بيانات موقعه من صورة قبل نشرها.
          </p>

          <h2>ابدأ من هنا</h2>
          <p>
            <a href={`/${locale}/compress`}>ضغط الصور</a> ·{" "}
            <a href={`/${locale}/resize`}>تغيير الأبعاد</a> ·{" "}
            <a href={`/${locale}/convert`}>تحويل الصيغ</a> ·{" "}
            <a href={`/${locale}/pdf`}>تحويل إلى PDF</a> ·{" "}
            <a href={`/${locale}/icon`}>توليد الأيقونات</a> ·{" "}
            <a href={`/${locale}/exif`}>إزالة بيانات EXIF</a>
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

          <h2>Why we built LeanPix</h2>
          <p>
            Most image compressors ask one thing of you before they will help: upload your files to
            their server. It sounds trivial and is not — product shots before launch, personal
            documents, family photos carrying the coordinates of where they were taken. All of it
            goes to a machine you do not run, for a length of time nobody tells you.
          </p>
          <p>
            We built LeanPix on the view that the request is no longer necessary. The browser in
            front of you can do the whole job, so your images have no reason to leave your device in
            order to be compressed.
          </p>

          <h2>What we commit to</h2>
          <p>
            <b>We do not receive your images.</b> That is architecture rather than a promise — there
            is no server on our side that accepts them. Disconnect after the page loads and carry on
            working.
          </p>
          <p>
            <b>No accounts, no daily caps.</b> No sign-up, no email, no card, and no counter that
            stops you at the tenth image. The only limits are 25 MB per image and 30 per batch, and
            those belong to your browser's memory rather than to our service.
          </p>
          <p>
            <b>No watermark.</b> What lands on your device is your image, not your image signed by
            us.
          </p>

          <h2>Who it is for</h2>
          <p>
            Shop owners preparing dozens of product photos before upload, site owners whose images
            drag down their speed scores, developers who need WebP, AVIF or an icon pack in a
            minute, and anyone who wants their location stripped from a photo before publishing it.
          </p>

          <h2>Start here</h2>
          <p>
            <a href={`/${locale}/compress`}>Compress</a> ·{" "}
            <a href={`/${locale}/resize`}>Resize</a> · <a href={`/${locale}/convert`}>Convert</a> ·{" "}
            <a href={`/${locale}/pdf`}>Images to PDF</a> ·{" "}
            <a href={`/${locale}/icon`}>Icon generator</a> ·{" "}
            <a href={`/${locale}/exif`}>Remove EXIF</a>
          </p>
        </>
      )}
    </Prose>
  );
}
