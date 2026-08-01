import type { Metadata } from "next";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Privacy / سياسة الخصوصية" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = !isLocale(locale) || locale === "ar";
  const t = getDictionary(ar ? "ar" : "en");

  return (
    <Prose title={t.nav.privacy}>
      {ar ? (
        <>
          <h2>الصور</h2>
          <p>
            تُعالَج صورك محلياً داخل متصفحك ولا تُرسل إلى خوادمنا. تختفي من الذاكرة بمجرد إغلاق
            التبويب أو ضغط «مسح الكل».
          </p>
          <h2>ما نحفظه</h2>
          <p>
            نحفظ في التخزين المحلي لمتصفحك إعدادات الضغط وعدّاد الصور والمساحة الموفَّرة. هذه البيانات
            لا تغادر جهازك ويمكنك تصفيرها من لوحة الاستخدام.
          </p>
          <h2>ملفات تعريف الارتباط</h2>
          <p>لا نستخدم كوكيز تتبّع ولا إعلانات ولا أدوات تحليل من طرف ثالث.</p>
          <h2>بيانات EXIF</h2>
          <p>
            عند تفعيل «إزالة بيانات EXIF» تُحذف بيانات الكاميرا والموقع من الصورة الناتجة. وهو
            الوضع الافتراضي.
          </p>
        </>
      ) : (
        <>
          <h2>Your images</h2>
          <p>
            Images are processed locally in your browser and never sent to our servers. They leave
            memory the moment you close the tab or select “Clear all”.
          </p>
          <h2>What we store</h2>
          <p>
            Your compression settings and usage counters are kept in your browser’s local storage.
            They never leave your device, and you can reset them from the dashboard.
          </p>
          <h2>Cookies</h2>
          <p>No tracking cookies, no ads, no third-party analytics.</p>
          <h2>EXIF data</h2>
          <p>
            With “Remove EXIF data” enabled — the default — camera and location metadata is stripped
            from the output.
          </p>
        </>
      )}
    </Prose>
  );
}
