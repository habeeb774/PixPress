import type { Metadata } from "next";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Privacy / سياسة الخصوصية" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  const ar = l === "ar";
  // عناوين الصفحة بلغة الزائر حتى لو بقي المتن إنجليزياً
  const t = getDictionary(l);

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
          <h2>الإعلانات</h2>
          <p>
            نعرض إعلانات عبر Google AdSense لتغطية تكاليف تشغيل الموقع. تستخدم Google وشركاؤها
            ملفات تعريف ارتباط لعرض إعلانات مبنيّة على زياراتك السابقة لهذا الموقع أو لمواقع أخرى،
            وقد تجمع بيانات مثل عنوان IP ونوع الجهاز والمتصفح.
          </p>
          <p>
            هذه الإعلانات لا تصل إلى صورك بأي شكل — الصور تُعالَج داخل متصفحك ولا تُرسل إلى أي جهة،
            بما فيها Google.
          </p>
          <p>
            يمكنك تعطيل الإعلانات المخصّصة من{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              إعدادات إعلانات Google
            </a>
            ، أو الاطّلاع على{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              كيفية استخدام Google للبيانات في مواقع شركائها
            </a>
            .
          </p>
          <h2>ملفات تعريف الارتباط الأخرى</h2>
          <p>
            لا نستخدم نحن أي كوكيز تتبّع أو أدوات تحليل من طرف ثالث. ما نحفظه محصور في التخزين
            المحلي الموضّح أعلاه.
          </p>
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
          <h2>Advertising</h2>
          <p>
            We show ads through Google AdSense to cover the cost of running the site. Google and its
            partners use cookies to serve ads based on your prior visits to this or other websites,
            and may collect data such as IP address, device type and browser.
          </p>
          <p>
            None of this reaches your images — they are processed inside your browser and are never
            sent to anyone, Google included.
          </p>
          <p>
            You can turn off personalised advertising in{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ad Settings
            </a>
            , or read{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses data on partner sites
            </a>
            .
          </p>
          <h2>Other cookies</h2>
          <p>
            We set no tracking cookies of our own and use no third-party analytics. What we keep is
            limited to the local storage described above.
          </p>
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
