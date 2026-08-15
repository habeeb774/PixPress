import type { Locale } from "./config";

const ar = {
  nav: { home: "الرئيسية", about: "من نحن", privacy: "الخصوصية", terms: "الشروط", contact: "اتصل بنا", faq: "الأسئلة الشائعة" },
  brand: { name: "LeanPix", tagline: "ضغط الصور في المتصفح" },
  hero: {
    title: "ضغط الصور مجاناً بدون رفعها إلى أي خادم",
    subtitle:
      "قلّل حجم الصورة حتى ٨٠٪ دون فرق تراه العين — ضغطاً وتحويلاً وتغيير أبعاد لصيغ JPG وPNG وGIF وWebP وAVIF. كل شيء يجري داخل متصفحك، فلا تغادر صورك جهازك ولا تنتظر رفعاً.",
    cta: "اختر الصور",
    drop: "أو اسحب الصور وأفلتها هنا",
    formats: "JPG · PNG · WebP · AVIF · GIF · حتى ٢٥ ميجابايت للصورة",
  },
  dropzone: { active: "أفلت الصور الآن", hint: "حتى {n} صورة في المرة الواحدة" },
  settings: {
    title: "إعدادات الضغط",
    preset: "مستوى الضغط",
    max: "بلا ضغط",
    auto: "تلقائي (موصى به)",
    light: "خفيف",
    medium: "متوسط",
    strong: "قوي",
    custom: "جودة مخصصة",
    quality: "الجودة",
    format: "صيغة الإخراج",
    original: "نفس الأصل",
    resize: "أقصى بُعد (بكسل)",
    noResize: "بدون تغيير",
    stripExif: "إزالة بيانات EXIF",
    keepAlpha: "الحفاظ على الشفافية",
    apply: "إعادة الضغط بالإعدادات الجديدة",
    social: "مقاسات جاهزة",
    target: "حجم الملف المستهدف",
    noTarget: "بلا هدف",
    targetHint: "عند تحديد هدف نضبط الجودة تلقائياً للوصول إليه، ويتقدّم على مستوى الضغط المختار.",
  },
  social: {
    post: "منشور",
    story: "ستوري",
    cover: "غلاف",
    thumb: "مصغّرة",
    product: "منتج",
  },
  howto: { title: "كيف تستخدمها" },
  pdf: {
    pick: "اختر الصور لتحويلها إلى PDF",
    pickHint: "يمكنك اختيار عدة صور معاً — كل صورة تصبح صفحة",
    pageSize: "مقاس الصفحة",
    a4: "A4",
    letter: "Letter",
    fit: "بمقاس الصورة",
    margin: "الهامش (نقطة)",
    order: "ترتيب الصفحات",
    orderHint: "اسحب الصور لإعادة ترتيبها — ترتيبها هنا هو ترتيب صفحات الملف",
    download: "تنزيل ملف PDF",
    building: "جارٍ الإنشاء…",
    addMore: "إضافة صور",
    failed: "تعذّر إنشاء الملف",
  },
  icon: {
    pick: "اختر صورة لتحويلها إلى أيقونة",
    pickHint: "‏PNG أو SVG بخلفية شفافة يعطي أفضل نتيجة — ويُفضّل أن تكون مربّعة",
    fit: "ملاءمة المربّع",
    contain: "احتواء كامل",
    cover: "ملء واقتطاع",
    sizes: "المقاسات المطلوبة",
    downloadIco: "تنزيل favicon.ico",
    downloadPack: "تنزيل الحزمة كاملة",
  },
  job: {
    original: "الأصلية",
    compressed: "المضغوطة",
    before: "الحجم قبل",
    after: "الحجم بعد",
    saved: "التوفير",
    dimensions: "الأبعاد",
    quality: "الجودة المستخدمة",
    compare: "مقارنة",
    download: "تنزيل",
    remove: "حذف",
    copyImage: "نسخ الصورة",
    copied: "تم النسخ",
    copyFailed: "تعذّر النسخ",
    share: "مشاركة",
    working: "جارٍ الضغط…",
    queued: "في الانتظار",
    failed: "تعذّر ضغط هذه الصورة",
    dragHandle: "اسحب لمقارنة الصورتين",
  },
  actions: {
    downloadAll: "تنزيل الكل (ZIP)",
    downloadAllJpeg: "تنزيل الكل JPG",
    converting: "جارٍ التحويل…",
    recompress: "إعادة الضغط",
    clear: "مسح الكل",
    totalSaved: "وفّرت {size} من أصل {total}",
  },
  errors: {
    size: "الملف أكبر من الحد المسموح (٢٥ ميجابايت)",
    type: "هذا الملف ليس صورة مدعومة",
    empty: "الملف فارغ",
    limit: "الحد الأقصى {n} صورة في المرة الواحدة",
  },
  stats: {
    title: "لوحة الاستخدام",
    images: "صورة مضغوطة",
    saved: "مساحة موفَّرة",
    processed: "حجم معالَج",
    ratio: "متوسط التوفير",
    reset: "تصفير الإحصائيات",
    note: "الأرقام محفوظة في متصفحك وحدك.",
  },
  features: {
    title: "لماذا LeanPix",
    privacy: { t: "صورك لا تغادر جهازك", d: "المعالجة كلها داخل المتصفح عبر Web Workers." },
    speed: { t: "نتيجة فورية", d: "لا رفع ولا انتظار طابور على الخادم." },
    batch: { t: "دفعات كبيرة", d: "اضغط حتى ٣٠ صورة معاً ونزّلها في ملف ZIP." },
    convert: { t: "تحويل وتغيير أبعاد", d: "بين JPG وPNG وWebP وAVIF مع تصغير الأبعاد." },
  },
  footer: { rights: "جميع الحقوق محفوظة", made: "يعمل بالكامل داخل متصفحك" },
  toolsNav: { title: "الأدوات", others: "أدوات أخرى" },
  tools: {
    compress: {
      nav: "ضغط الصور",
      short: "ضغط",
      h1: "ضغط الصور أونلاين مجاناً بدون رفعها",
      meta: "أداة ضغط الصور مجاناً: قلّل حجم الصورة من JPG وPNG وGIF وWebP وAVIF داخل متصفحك، بلا رفع إلى أي خادم وبلا حد يومي.",
      intro:
        "اسحب صورك وسيبدأ ضغط الصور فوراً داخل متصفحك. لا رفع، ولا طابور انتظار، ولا حدّ يومي — ولا تغادر أي صورة جهازك في أي لحظة.",
      body: [
        {
          h: "لماذا يهمّ حجم الصورة؟",
          p: "الصور تُشكّل الجزء الأكبر من وزن أي صفحة. صفحة بطيئة تعني زائراً يغادر قبل أن يرى منتجك، وترتيباً أدنى في نتائج البحث لأن Google يقيس سرعة التحميل ضمن مؤشرات تجربة الصفحة. تقليل صورة من ٤ ميجابايت إلى ٤٠٠ كيلوبايت يقصّر زمن التحميل إلى العُشر تقريباً دون أن يلاحظ الزائر فرقاً.",
        },
        {
          h: "كيف نختار مستوى الضغط؟",
          p: "الوضع التلقائي يفحص حجم كل صورة وصيغتها ثم يختار جودة مناسبة لها وحدها: الصور الكبيرة تتحمّل ضغطاً أقوى دون أثر مرئي، والصغيرة تحتاج لطفاً أكبر. وإن أردت التحكم الكامل فاختر «جودة مخصصة» وحرّك المؤشّر بين ١ و١٠٠ وقارن النتيجة بنفسك.",
        },
        {
          h: "ضغط ملف JPG",
          p: "‏JPG أشيع صيغ الصور الفوتوغرافية وأكثرها استجابةً للضغط. صورة كاميرا بحجم ٥ ميجابايت تنزل عادةً إلى أقل من ميجابايت واحد دون فرق تلحظه العين، لأن ترميز JPG يتخلّص أولاً من التفاصيل التي لا يميّزها البصر. اسحب ملفاتك واتركها على الوضع التلقائي، أو حدّد حجماً مستهدفاً بالكيلوبايت إن كنت مقيّداً بحدّ رفع في منصة ما.",
        },
        {
          h: "ضغط الصور GIF",
          p: "‏GIF ثقيل لأنه يخزّن إطارات متعدّدة بترميز قديم. نحوّله إلى صورة ثابتة — PNG للحفاظ على الشفافية أو JPG بدونها — فينخفض الحجم انخفاضاً حاداً. إن كنت تحتاج الحركة نفسها فالبديل الصحيح فيديو قصير بصيغة MP4 أو WebM، لا GIF مضغوط.",
        },
        {
          h: "الصيغ المدعومة وحدود الاستخدام",
          p: "JPG وPNG وWebP وAVIF وGIF، حتى ٢٥ ميجابايت للصورة و٣٠ صورة في الدفعة الواحدة. تستطيع إبقاء الصيغة كما هي أو التحويل إلى صيغة أحدث أثناء ضغط حجم الصورة.",
        },
      ],
      steps: [
        "اسحب صورك إلى الصفحة أو اضغط «اختر الصور» — حتى ٣٠ صورة معاً.",
        "اضبط مستوى الضغط، أو حدّد حجماً مستهدفاً بالكيلوبايت وسنصل إليه تلقائياً.",
        "افتح «مقارنة» لتفحص الفرق بين الأصل والناتج قبل أن تعتمده.",
        "نزّل صورة واحدة، أو الكل دفعةً في ملف ZIP.",
      ],
      faq: [
        {
          q: "هل تُرفع صوري إلى خادم؟",
          a: "لا. المعالجة كلها تجري داخل متصفحك عبر Web Workers، ولا يُرسل أي بايت من صورك إلى أي خادم — لا خادمنا ولا غيره.",
        },
        {
          q: "كم أوفّر من الحجم؟",
          a: "يعتمد على الصورة والصيغة. صور JPG الفوتوغرافية توفّر عادةً بين ٦٠٪ و٨٥٪. صور PNG ذات الألوان القليلة قد توفّر أكثر، خصوصاً عند تحويلها إلى WebP.",
        },
        {
          q: "هل تتأثر جودة الصورة؟",
          a: "الضغط بفقدان يزيل تفاصيل لا تلتقطها العين عند العرض الطبيعي. استخدم زر «مقارنة» لرؤية الفرق بنفسك قبل التنزيل، وارفع الجودة إن لم يعجبك الناتج.",
        },
        {
          q: "هل هناك حد يومي؟",
          a: "لا. لا حسابات ولا اشتراك ولا عدّاد. الحد الوحيد هو ٢٥ ميجابايت للصورة و٣٠ صورة في الدفعة، وهو حدّ ذاكرة المتصفح لا حدّ خدمة.",
        },
        {
          q: "كيف أضغط صورة إلى حجم محدّد بالضبط؟",
          a: "اختر الحجم المستهدف من أزرار «حجم الملف المستهدف» — ١٠٠ أو ٢٠٠ أو ٥٠٠ كيلوبايت — وسنجرّب مستويات جودة متتالية حتى نصل إلى أقرب ناتج لا يتجاوز هدفك.",
        },
        {
          q: "هل يعمل على الجوال؟",
          a: "نعم، على iPhone وAndroid بالمتصفح مباشرة دون تثبيت تطبيق. المعالجة تستهلك ذاكرة الجهاز، فالدفعات الكبيرة جداً قد تكون أبطأ على هاتف قديم.",
        },
        {
          q: "هل يعمل بدون إنترنت؟",
          a: "بعد تحميل الصفحة، الضغط نفسه لا يحتاج اتصالاً لأنه يجري محلياً بالكامل.",
        },
        {
          q: "هل أحتاج حساباً أو تسجيلاً؟",
          a: "لا. لا تسجيل ولا بريد ولا بطاقة. افتح الصفحة واستخدمها.",
        },
        {
          q: "ما أقصى حجم للصورة الواحدة؟",
          a: "‏٢٥ ميجابايت. الحد موضوع لحماية ذاكرة المتصفح من الاستنزاف، لا لتقييد الاستخدام.",
        },
        {
          q: "هل تُحذف بيانات EXIF أثناء الضغط؟",
          a: "نعم افتراضياً، لأن إعادة الترميز تُسقطها. تستطيع تعطيل الخيار من لوحة الإعدادات إن أردت الاحتفاظ بها.",
        },
        {
          q: "ما الفرق بينكم وبين أدوات الضغط الأخرى؟",
          a: "معظمها يرفع صورك إلى خادمه ثم يعيدها. نحن لا نرفع شيئاً — ولهذا لا يوجد طابور انتظار ولا حد يومي ولا سؤال عمّا يحدث لصورك بعد المعالجة.",
        },
        {
          q: "هل يدعم AVIF؟",
          a: "نعم، ضغطاً وتحويلاً. وهي صيغة توفّر أكثر من WebP لكن ترميزها أبطأ.",
        },
        {
          q: "هل ضغط الصور مجاناً فعلاً؟",
          a: "نعم، بلا مقابل وبلا تسجيل وبلا علامة مائية. المعالجة تجري على جهازك أنت، فلا تكلّفنا خوادم حتى نطلب مقابلها.",
        },
        {
          q: "كيف أضغط ملف jpg؟",
          a: "اسحب ملف JPG إلى الصفحة ويُضغط فوراً. الوضع التلقائي يختار الجودة المناسبة لحجم الصورة، ولك ضبطها يدوياً أو تحديد حجم مستهدف بالكيلوبايت.",
        },
        {
          q: "هل يمكن ضغط الصور gif؟",
          a: "نعم، لكن الناتج صورة ثابتة لأن ترميز GIF المتحرك غير ممكن عبر canvas. إن كنت تريد الإبقاء على الحركة فحوّلها إلى MP4 أو WebM بدل ضغط GIF.",
        },
        {
          q: "كيف أقلّل حجم الصورة إلى حدّ معيّن؟",
          a: "استخدم أزرار «حجم الملف المستهدف» واختر ١٠٠ أو ٢٠٠ أو ٥٠٠ كيلوبايت، فنجرّب مستويات جودة متتالية حتى نصل إلى أقرب ناتج لا يتجاوز الحد الذي طلبته.",
        },
      ],
    },
    resize: {
      nav: "تغيير أبعاد الصور",
      short: "الأبعاد",
      h1: "تغيير أبعاد الصور دفعة واحدة",
      meta: "صغّر أبعاد صورك إلى ١٩٢٠ أو ١٢٨٠ بكسل أو أي مقاس، مع الحفاظ على النسبة، داخل متصفحك وبلا رفع.",
      intro:
        "اختر أقصى بُعد وستُصغَّر كل الصور إليه مع الحفاظ على نسبة العرض إلى الارتفاع. الوضع الافتراضي هنا «بلا ضغط» — تغيير أبعاد فقط دون المساس بالجودة. والصور الأصغر من الحد تبقى كما هي دون تكبير.",
      body: [
        {
          h: "لماذا تغيير الأبعاد قبل الضغط؟",
          p: "أكبر هدر في صور المواقع هو عرض صورة بعرض ٦٠٠٠ بكسل في مساحة عرضها ٨٠٠ بكسل. المتصفح يُنزّل الصورة كاملة ثم يصغّرها للعرض، فتدفع ثمن البكسلات الزائدة كلها. تصغير الأبعاد أولاً يوفّر أكثر بكثير من رفع نسبة الضغط.",
        },
        {
          h: "ما المقاس المناسب؟",
          p: "‏١٩٢٠ بكسل يكفي لصورة تملأ عرض الشاشة، و١٢٨٠ لصور المقالات، و٨٠٠ لصور المنتجات في شبكة عرض. للشاشات عالية الكثافة ضاعف المقاس المطلوب مرة واحدة فقط.",
        },
        {
          h: "النسبة محفوظة دائماً",
          p: "نطبّق أقصى بُعد على الضلع الأطول ونحسب الآخر تلقائياً، فلا تتشوّه الصورة ولا تحتاج حساب المقاسات يدوياً لكل صورة.",
        },
      ],
      steps: [
        "اسحب صورك إلى الصفحة — حتى ٣٠ صورة في الدفعة.",
        "اختر أقصى بُعد من القائمة، أو اضغط أحد المقاسات الجاهزة مثل «منشور» أو «منتج».",
        "راجع الأبعاد الناتجة على بطاقة كل صورة.",
        "نزّل صورة واحدة أو الكل دفعةً واحدة.",
      ],
      faq: [
        {
          q: "هل تُقصّ الصورة؟",
          a: "لا. نصغّر الصورة كاملة مع الحفاظ على نسبتها، ولا نقتطع أي جزء منها.",
        },
        {
          q: "هل تُكبَّر الصور الصغيرة؟",
          a: "لا. الصورة الأصغر من الحد المختار تبقى بأبعادها الأصلية — التكبير يفقد الحدّة ولا يضيف تفاصيل.",
        },
        {
          q: "هل أستطيع تغيير الأبعاد دون ضغط؟",
          a: "نعم، وهو الوضع الافتراضي في هذه الصفحة: مستوى «بلا ضغط». صور PNG تُعاد كتابتها بترميز بلا فقدان فلا تخسر شيئاً إطلاقاً، وصور JPG تُرمَّز بأعلى جودة ممكنة — إذ لا مفرّ من إعادة الترميز عند تغيير عدد البكسلات.",
        },
        {
          q: "ما مقاس صور إنستغرام؟",
          a: "المنشور المربّع ١٠٨٠ بكسل، والستوري ١٠٨٠×١٩٢٠. اضغط زر «منشور» أو «ستوري» في الإعدادات وسيُضبط الحد تلقائياً.",
        },
        {
          q: "ما المقاس المناسب لصور المنتجات؟",
          a: "‏١٢٠٠ بكسل يغطّي معظم المتاجر ويكفي للتكبير عند التصفّح. زر «منتج» يضبطه لك مباشرة.",
        },
        {
          q: "كيف أصغّر عدة صور بمقاس واحد؟",
          a: "اسحبها كلها دفعةً واحدة واختر أقصى بُعد مرة واحدة — يُطبَّق على كل صور الدفعة.",
        },
        {
          q: "هل تتشوّه الصورة؟",
          a: "لا. نطبّق الحد على الضلع الأطول ونحسب الآخر من النسبة، فلا يحدث تمدّد ولا انضغاط.",
        },
        {
          q: "هل يمكن تحديد عرض وارتفاع مختلفين؟",
          a: "حالياً نعمل بأقصى بُعد واحد يحفظ النسبة تلقائياً. هذا يغطّي أغلب الحالات ويمنع التشوّه الناتج عن مقاسات لا تطابق نسبة الصورة.",
        },
      ],
    },
    convert: {
      nav: "تحويل صيغ الصور",
      short: "الصيغ",
      h1: "تحويل الصور إلى WebP وAVIF وJPG وPNG",
      meta: "حوّل صورك بين WebP وAVIF وJPG وPNG داخل متصفحك، دفعة واحدة وبلا رفع إلى أي خادم.",
      intro:
        "اختر صيغة الإخراج وستُحوَّل كل الصور إليها مع ضغطها في الوقت نفسه. الصيغة الافتراضية هنا WebP لأنها الأنسب للويب اليوم.",
      body: [
        {
          h: "WebP أم AVIF؟",
          p: "‏WebP أصغر من JPG بنحو ٢٥–٣٥٪ بنفس الجودة، ويدعمه كل متصفح مستخدَم اليوم — فهو الخيار الآمن. أما AVIF فيوفّر أكثر منه بفارق ملموس، لكن ترميزه أبطأ ودعمه أحدث. للمتاجر والمواقع العامة ابدأ بـ WebP.",
        },
        {
          h: "متى تبقى على JPG أو PNG؟",
          p: "أبقِ على JPG إن كنت ترفع الصور إلى منصة لا تقبل غيره. وأبقِ على PNG إن كانت الصورة تحتاج شفافية حقيقية ولا تريد تحويلها إلى WebP — مع أن WebP يدعم الشفافية أيضاً وبحجم أقل.",
        },
        {
          h: "الشفافية والصيغ",
          p: "‏JPG لا يدعم الشفافية إطلاقاً، فعند التحويل إليه نملأ المناطق الشفافة بالأبيض بدل أن تظهر سوداء. أما WebP وAVIF وPNG فتحافظ على الشفافية كما هي.",
        },
      ],
      steps: [
        "اسحب صورك إلى الصفحة بأي صيغة مدعومة.",
        "اختر صيغة الإخراج من «صيغة الإخراج» — الافتراضي WebP.",
        "اضبط الجودة إن احتجت، أو حدّد حجماً مستهدفاً بالكيلوبايت.",
        "نزّل الناتج فرادى أو دفعةً واحدة.",
      ],
      faq: [
        {
          q: "هل يدعم متصفحي WebP؟",
          a: "نعم. كل المتصفحات المستخدمة اليوم تدعم WebP — Chrome وFirefox وSafari وEdge.",
        },
        {
          q: "ماذا يحدث لصور GIF؟",
          a: "تُحوَّل إلى صورة ثابتة لأن ترميز GIF المتحرك غير ممكن عبر canvas. نختار PNG للحفاظ على الشفافية، أو JPG إن عطّلت خيار الشفافية.",
        },
        {
          q: "هل يمكن التحويل دون فقدان جودة؟",
          a: "التحويل إلى PNG بلا فقدان. أما WebP وAVIF وJPG فبفقدان افتراضاً — ارفع الجودة إلى ٩٥ أو أكثر إن أردت أقرب نتيجة للأصل.",
        },
        {
          q: "كيف أحوّل JPG إلى WebP؟",
          a: "اسحب صور JPG واختر WebP من صيغة الإخراج — وهي الصيغة الافتراضية في هذه الصفحة، فغالباً لن تحتاج تغيير شيء.",
        },
        {
          q: "كيف أحوّل PNG إلى JPG؟",
          a: "اختر JPEG من صيغة الإخراج. انتبه أن الشفافية ستُملأ بالأبيض لأن JPG لا يدعمها.",
        },
        {
          q: "كيف أحوّل WebP إلى JPG؟",
          a: "اسحب ملفات WebP واختر JPEG — مفيد عند الرفع إلى منصة قديمة لا تقبل WebP.",
        },
        {
          q: "أيّهما أصغر: WebP أم AVIF؟",
          a: "‏AVIF أصغر عادةً بفارق ملموس عند الجودة نفسها، لكن ترميزه أبطأ محسوسياً في الدفعات الكبيرة.",
        },
        {
          q: "هل يمكن تحويل عدة صيغ مختلطة معاً؟",
          a: "نعم. اسحب JPG وPNG وWebP معاً واختر صيغة إخراج واحدة — تُوحَّد كلها إليها.",
        },
      ],
    },
    pdf: {
      nav: "تحويل الصور إلى PDF",
      short: "PDF",
      h1: "تحويل الصور إلى PDF مجاناً",
      meta: "حوّل صورة أو عدة صور إلى ملف بي دي اف واحد داخل متصفحك — بترتيب تختاره ومقاس صفحة تحدّده، وبلا رفع إلى أي خادم.",
      intro:
        "اختر صورك ورتّبها كما تشاء، وسنجمعها في ملف PDF واحد. كل صورة تصبح صفحة، والتحويل يجري داخل متصفحك فلا تغادر صورك جهازك.",
      body: [
        {
          h: "لماذا تحويل الصورة إلى بي دي اف؟",
          p: "الملف الواحد أسهل في الإرسال والطباعة والأرشفة من عشر صور متفرّقة. الجهات الرسمية والبنوك وأنظمة التوظيف تطلب PDF غالباً لأنه يحفظ الترتيب والتنسيق ويُفتح بالشكل نفسه على أي جهاز — بخلاف مجلد صور قد يُعاد ترتيبه أو تُفقد منه صورة.",
        },
        {
          h: "مقاس الصفحة: A4 أم بمقاس الصورة؟",
          p: "اختر A4 أو Letter إن كنت تنوي الطباعة أو الرفع إلى نظام يتوقّع مقاساً قياسياً — تُوضَع الصورة في وسط الصفحة بهامش تتحكّم به. واختر «بمقاس الصورة» إن كان الملف للعرض على الشاشة فقط، فتأتي الصفحة على مقاس الصورة تماماً بلا أشرطة بيضاء.",
        },
        {
          h: "الترتيب بيدك",
          p: "اسحب الصور لإعادة ترتيبها قبل التحويل. الترتيب الذي تراه على الشاشة هو ترتيب الصفحات داخل الملف، ويمكنك حذف أي صورة أو إضافة المزيد قبل التنزيل.",
        },
      ],
      steps: [
        "اختر الصور التي تريد تحويلها — حتى ٣٠ صورة معاً.",
        "اسحبها لترتيبها كما تريدها أن تظهر في الملف.",
        "حدّد مقاس الصفحة والهامش.",
        "اضغط «تنزيل ملف PDF».",
      ],
      faq: [
        {
          q: "كيف أحوّل صورة إلى PDF؟",
          a: "اختر الصورة من الأداة أعلاه، حدّد مقاس الصفحة، ثم اضغط «تنزيل ملف PDF». لا تسجيل ولا انتظار ولا علامة مائية.",
        },
        {
          q: "هل يمكن تحويل عدة صور إلى ملف واحد؟",
          a: "نعم، وهذا هو الوضع الافتراضي. اختر كل الصور معاً وسيصبح كل منها صفحة مستقلة داخل ملف واحد، بالترتيب الذي تضبطه بالسحب.",
        },
        {
          q: "هل تُرفع صوري إلى خادم؟",
          a: "لا. الملف يُبنى داخل متصفحك بالكامل، ولا يُرسل أي بايت من صورك إلى أي جهة.",
        },
        {
          q: "ما الصيغ المقبولة؟",
          a: "‏JPG وPNG وWebP وGIF — أي صورة يفتحها متصفحك. صور PNG تحتفظ بشفافيتها داخل الملف.",
        },
        {
          q: "هل يمكن تحويل صورك إلى بي دي اف بمقاس A4؟",
          a: "نعم، اختر A4 من «مقاس الصفحة». تُوضَع كل صورة في وسط صفحة A4 مع هامش تضبطه بنفسك، والصفحة تدور تلقائياً إن كانت الصورة عرضية.",
        },
        {
          q: "كم صورة أستطيع تحويلها؟",
          a: "حتى ٣٠ صورة في الملف الواحد. الحد لحماية ذاكرة المتصفح لا لتقييد الاستخدام.",
        },
        {
          q: "هل يكبر حجم الملف كثيراً؟",
          a: "نُفعّل ضغط PDF تلقائياً. وإن أردت ملفاً أخفّ بكثير فاضغط صورك أولاً من أداة ضغط الصور ثم حوّلها هنا.",
        },
        {
          q: "هل أستطيع ترتيب الصفحات؟",
          a: "نعم، اسحب أي صورة إلى موضعها الجديد قبل التحويل. الرقم على كل صورة يبيّن رقم صفحتها.",
        },
      ],
    },
    icon: {
      nav: "تحويل صورة إلى أيقونة",
      short: "أيقونة",
      h1: "تحويل الصور إلى أيقونات وfavicon",
      meta: "حوّل أي صورة إلى ملف favicon.ico متعدّد المقاسات وأيقونات PNG جاهزة لموقعك وتطبيقك — داخل متصفحك وبلا رفع.",
      intro:
        "اختر صورة واحدة وسنولّد منها ملف أيقونة كامل: favicon.ico يحمل ست مقاسات داخله، وأيقونات PNG لكل المقاسات التي يطلبها المتصفح ونظام التشغيل.",
      body: [
        {
          h: "لماذا لا تكفي صورة واحدة؟",
          p: "المتصفح يطلب ١٦ و٣٢ بكسل لتبويب الصفحة، وiOS يطلب ١٨٠ لأيقونة الشاشة الرئيسية، وAndroid يطلب ١٩٢ و٥١٢ لملف البيان. إعطاء صورة كبيرة واحدة يجعل كل جهاز يصغّرها بنفسه بنتيجة باهتة عند المقاسات الصغيرة، لذا نولّد كل مقاس على حدة بتنعيم عالي الجودة.",
        },
        {
          h: "ما هو ملف ICO؟",
          p: "ملف واحد يحوي عدة صور بمقاسات مختلفة، ويختار النظام المقاس المناسب لكل موضع. نضع فيه ١٦ و٣٢ و٤٨ و٦٤ و١٢٨ و٢٥٦ بكسل، وهي التغطية التي تحتاجها المتصفحات وويندوز معاً.",
        },
        {
          h: "احتواء أم اقتطاع؟",
          p: "الأيقونات مربّعة وصورتك غالباً ليست كذلك. «احتواء كامل» يُبقي الصورة كلها ويضيف هوامش شفافة، وهو الأنسب للشعارات. «ملء واقتطاع» يملأ المربّع ويقتطع الأطراف، وهو الأنسب للصور الفوتوغرافية.",
        },
      ],
      steps: [
        "اختر صورة — يُفضّل PNG مربّعة بخلفية شفافة.",
        "اختر طريقة الملاءمة والمقاسات التي تريدها.",
        "عاين النتيجة بكل مقاس قبل التنزيل.",
        "نزّل ملف favicon.ico وحده، أو الحزمة كاملة مع أيقونات PNG وملف البيان.",
      ],
      faq: [
        {
          q: "ما الفرق بين favicon.ico وأيقونات PNG؟",
          a: "ملف ICO يحوي عدة مقاسات معاً ويفهمه كل متصفح حتى القديم منها. وأيقونات PNG المنفصلة تلزم لـ iOS وAndroid وملف البيان. الحزمة الكاملة تعطيك الاثنين.",
        },
        {
          q: "أين أضع الملفات؟",
          a: "في جذر موقعك، ثم أضف وسوم الربط المعروضة أسفل الأداة داخل قسم head في صفحاتك.",
        },
        {
          q: "ما أفضل صورة مصدر؟",
          a: "صورة مربّعة بخلفية شفافة وأبعاد ٥١٢ بكسل أو أكثر. الشعارات البسيطة تظهر أوضح عند ١٦ بكسل من الصور المزدحمة بالتفاصيل.",
        },
        {
          q: "هل تُحفظ الشفافية؟",
          a: "نعم. كل المقاسات تُولَّد بصيغة PNG داخل ملف ICO وخارجه، وهي تدعم الشفافية بالكامل.",
        },
        {
          q: "هل يدعم SVG؟",
          a: "نعم، يُرسم على مقاس كل أيقونة مباشرةً فتخرج حادّة تماماً — وهو أفضل مصدر ممكن.",
        },
        {
          q: "ما مقاس أيقونة iOS؟",
          a: "‏١٨٠ بكسل لوسم apple-touch-icon. وهو مُحدَّد افتراضياً في قائمة المقاسات.",
        },
        {
          q: "هل تُرفع صورتي إلى خادم؟",
          a: "لا. التوليد كله يجري داخل متصفحك، وملف ICO نفسه يُبنى في الصفحة بايتاً بايتاً.",
        },
        {
          q: "ما ملف site.webmanifest؟",
          a: "ملف يخبر Android بأيقونات تطبيقك عند إضافة الموقع إلى الشاشة الرئيسية. نولّده جاهزاً داخل الحزمة.",
        },
      ],
    },
    exif: {
      nav: "إزالة بيانات EXIF",
      short: "EXIF",
      h1: "إزالة بيانات EXIF من الصور",
      meta: "احذف بيانات الكاميرا والموقع الجغرافي من صورك قبل نشرها — داخل متصفحك وبلا رفع إلى أي خادم.",
      intro:
        "كل صورة تلتقطها بهاتفك تحمل بيانات مخفيّة: طراز الجهاز، وتاريخ الالتقاط، وغالباً إحداثيات المكان بدقة. هذه الأداة تحذفها.",
      body: [
        {
          h: "ما الذي تكشفه صورك عنك؟",
          p: "بيانات EXIF قد تتضمّن خط الطول والعرض بدقة أمتار، ووقت الالتقاط بالثانية، وطراز الهاتف ورقمه التسلسلي أحياناً. نشر صورة من منزلك على موقع أو سوق إلكتروني قد يكشف عنوانك حرفياً دون أن تدري.",
        },
        {
          h: "كيف نحذفها؟",
          p: "نعيد رسم الصورة على لوحة جديدة ثم نرمّزها من الصفر. الناتج يحمل بيانات الصورة وحدها بلا أي بيانات وصفية موروثة — وهي طريقة أوثق من محاولة تعديل الحقول واحداً واحداً.",
        },
        {
          h: "الاتجاه محفوظ",
          p: "بعض أدوات حذف EXIF تُفقد الصورة اتجاهها فتظهر مقلوبة. نطبّق دوران EXIF على الصورة أولاً ثم نحذف البيانات، فتبقى الصورة معتدلة كما تراها.",
        },
      ],
      steps: [
        "اسحب الصور التي تنوي نشرها إلى الصفحة.",
        "تأكّد أن خيار «إزالة بيانات EXIF» مفعّل — وهو مفعّل افتراضياً هنا.",
        "اختر مستوى ضغط «خفيف» إن أردت أقل تغيير ممكن في الجودة.",
        "نزّل الصور النظيفة وانشرها بأمان.",
      ],
      faq: [
        {
          q: "هل الحذف نهائي؟",
          a: "نعم. الملف الناتج يُرمَّز من جديد ولا يحمل أي بيانات وصفية من الأصل. ملفك الأصلي على جهازك يبقى كما هو دون تعديل.",
        },
        {
          q: "هل تتأثر جودة الصورة؟",
          a: "إعادة الترميز ضرورية للحذف الموثوق. اختر مستوى ضغط «خفيف» لتبقى الجودة قريبة جداً من الأصل.",
        },
        {
          q: "هل يُحذف الموقع الجغرافي؟",
          a: "نعم، إحداثيات GPS جزء من بيانات EXIF وتُحذف معها بالكامل.",
        },
        {
          q: "كيف أعرف أن صورتي تحمل بيانات EXIF؟",
          a: "أغلب ما يُلتقط بكاميرا هاتف أو كاميرا احترافية يحملها. لقطات الشاشة والصور المصمّمة غالباً لا تحملها.",
        },
        {
          q: "هل تحذف المنصّات هذه البيانات تلقائياً؟",
          a: "بعضها يفعل عند النشر، وبعضها لا — خصوصاً عند الإرسال كملف أصلي في محادثة أو بريد. لا تعتمد على ذلك.",
        },
        {
          q: "هل تظهر الصورة مقلوبة بعد الحذف؟",
          a: "لا. نطبّق دوران EXIF على البكسلات قبل حذف البيانات، وهي مشكلة شائعة في أدوات أخرى.",
        },
        {
          q: "هل يمكن حذف البيانات من عدة صور معاً؟",
          a: "نعم، حتى ٣٠ صورة في الدفعة الواحدة.",
        },
        {
          q: "هل تحتفظون بنسخة من صوري؟",
          a: "لا. لا تصل صورك إلينا أساساً — كل شيء يجري داخل متصفحك.",
        },
      ],
    },
  },
};

const en: typeof ar = {
  nav: { home: "Home", about: "About", privacy: "Privacy", terms: "Terms", contact: "Contact", faq: "FAQ" },
  brand: { name: "LeanPix", tagline: "In-browser image compression" },
  hero: {
    title: "Compress images without uploading them",
    subtitle:
      "Cut image size by up to 80% with no visible difference — compress, convert and resize. Everything runs in your browser, so your files never leave your device and there is no upload to wait for.",
    cta: "Choose images",
    drop: "or drop them anywhere here",
    formats: "JPG · PNG · WebP · AVIF · GIF · up to 25 MB per image",
  },
  dropzone: { active: "Drop to start", hint: "Up to {n} images at a time" },
  settings: {
    title: "Compression settings",
    preset: "Compression level",
    max: "No compression",
    auto: "Auto (recommended)",
    light: "Light",
    medium: "Medium",
    strong: "Strong",
    custom: "Custom quality",
    quality: "Quality",
    format: "Output format",
    original: "Same as source",
    resize: "Max dimension (px)",
    noResize: "Unchanged",
    stripExif: "Remove EXIF data",
    keepAlpha: "Keep transparency",
    apply: "Recompress with new settings",
    social: "Common sizes",
    target: "Target file size",
    noTarget: "No target",
    targetHint:
      "With a target set, quality is tuned automatically to reach it, overriding the compression level above.",
  },
  social: {
    post: "Post",
    story: "Story",
    cover: "Cover",
    thumb: "Thumb",
    product: "Product",
  },
  howto: { title: "How to use it" },
  pdf: {
    pick: "Choose images to turn into a PDF",
    pickHint: "Pick several at once — each image becomes a page",
    pageSize: "Page size",
    a4: "A4",
    letter: "Letter",
    fit: "Fit to image",
    margin: "Margin (pt)",
    order: "Page order",
    orderHint: "Drag to reorder — this is the order pages appear in the file",
    download: "Download PDF",
    building: "Building…",
    addMore: "Add images",
    failed: "Could not build the file",
  },
  icon: {
    pick: "Choose an image to turn into an icon",
    pickHint: "A square PNG or SVG on a transparent background gives the best result",
    fit: "Fit to square",
    contain: "Fit whole",
    cover: "Fill and crop",
    sizes: "Sizes to generate",
    downloadIco: "Download favicon.ico",
    downloadPack: "Download full pack",
  },
  job: {
    original: "Original",
    compressed: "Compressed",
    before: "Size before",
    after: "Size after",
    saved: "Saved",
    dimensions: "Dimensions",
    quality: "Quality used",
    compare: "Compare",
    download: "Download",
    remove: "Remove",
    copyImage: "Copy image",
    copied: "Copied",
    copyFailed: "Copy failed",
    share: "Share",
    working: "Compressing…",
    queued: "Queued",
    failed: "This image could not be compressed",
    dragHandle: "Drag to compare",
  },
  actions: {
    downloadAll: "Download all (ZIP)",
    downloadAllJpeg: "Download all as JPG",
    converting: "Converting…",
    recompress: "Recompress",
    clear: "Clear all",
    totalSaved: "Saved {size} of {total}",
  },
  errors: {
    size: "File is larger than the 25 MB limit",
    type: "That file is not a supported image",
    empty: "File is empty",
    limit: "Up to {n} images at a time",
  },
  stats: {
    title: "Usage dashboard",
    images: "Images compressed",
    saved: "Space saved",
    processed: "Data processed",
    ratio: "Average saving",
    reset: "Reset stats",
    note: "These numbers stay in your browser.",
  },
  features: {
    title: "Why LeanPix",
    privacy: { t: "Files stay on your device", d: "All processing happens in-browser via Web Workers." },
    speed: { t: "Instant results", d: "No upload, no server queue." },
    batch: { t: "Big batches", d: "Compress up to 30 images and download one ZIP." },
    convert: { t: "Convert and resize", d: "Between JPG, PNG, WebP and AVIF, with resizing." },
  },
  footer: { rights: "All rights reserved", made: "Runs entirely in your browser" },
  toolsNav: { title: "Tools", others: "Other tools" },
  tools: {
    compress: {
      nav: "Compress images",
      short: "Compress",
      h1: "Compress images online without uploading",
      meta: "Compress JPG, PNG, WebP and AVIF right inside your browser. Up to 80% smaller with no visible difference, and nothing is ever uploaded.",
      intro:
        "Drop your images and they are compressed immediately, inside your browser. No upload, no queue, no daily cap — and no image ever leaves your device.",
      steps: [
        "Drop your images onto the page or press Choose images — up to 30 at once.",
        "Set the compression level, or name a target size in KB and we will reach it for you.",
        "Open Compare to inspect the difference against the original before you commit.",
        "Download one image, or the whole batch as a ZIP.",
      ],
      body: [
        {
          h: "Why image size matters",
          p: "Images are the bulk of what a page weighs. A slow page means a visitor who leaves before your product renders, and a weaker position in search, because Google measures load speed as part of page experience. Taking an image from 4 MB to 400 KB cuts its load time roughly tenfold with nothing a visitor would notice.",
        },
        {
          h: "How the quality level is chosen",
          p: "Auto mode looks at each image's size and format and picks a quality for that image alone: large photos absorb harder compression invisibly, small ones need a gentler touch. For full control pick Custom quality, move the slider between 1 and 100, and judge the result yourself.",
        },
        {
          h: "Supported formats",
          p: "JPG, PNG, WebP, AVIF and GIF, up to 25 MB per image and 30 images per batch. Keep the original format or convert to a newer one while compressing.",
        },
      ],
      faq: [
        {
          q: "Are my images uploaded to a server?",
          a: "No. Everything runs in your browser through Web Workers, and not one byte of your images is sent to any server — ours or anyone else's.",
        },
        {
          q: "How much will I save?",
          a: "It depends on the image and format. Photographic JPGs typically save 60–85%. Flat-colour PNGs often save more, especially when converted to WebP.",
        },
        {
          q: "Does quality suffer?",
          a: "Lossy compression discards detail your eye does not resolve at normal viewing size. Use the Compare control to judge it yourself before downloading, and raise the quality if you are not satisfied.",
        },
        {
          q: "Is there a daily limit?",
          a: "No. No accounts, no subscription, no counter. The only limits are 25 MB per image and 30 images per batch, and those are browser memory limits rather than service limits.",
        },
        {
          q: "How do I compress an image to an exact size?",
          a: "Pick a value under Target file size — 100, 200 or 500 KB — and we try successive quality levels until we land as close as possible without exceeding your target.",
        },
        {
          q: "Does it work on mobile?",
          a: "Yes, on iPhone and Android straight from the browser with nothing to install. Processing uses device memory, so very large batches can be slower on an older phone.",
        },
        {
          q: "Does it work offline?",
          a: "Once the page has loaded, compression itself needs no connection because it all happens locally.",
        },
        {
          q: "Do I need an account?",
          a: "No. No sign-up, no email, no card. Open the page and use it.",
        },
        {
          q: "What is the maximum file size?",
          a: "25 MB per image. The limit protects browser memory from being exhausted rather than restricting use.",
        },
        {
          q: "Is EXIF data removed while compressing?",
          a: "Yes by default, because re-encoding drops it. You can turn the option off in the settings panel if you want to keep it.",
        },
        {
          q: "How is this different from other compressors?",
          a: "Most of them upload your images to their server and send them back. We upload nothing — which is why there is no queue, no daily cap, and no question about what happens to your files afterwards.",
        },
        {
          q: "Is AVIF supported?",
          a: "Yes, for both compression and conversion. It saves more than WebP but encodes more slowly.",
        },
      ],
    },
    resize: {
      nav: "Resize images",
      short: "Resize",
      h1: "Resize images in bulk",
      meta: "Scale your images down to 1920px, 1280px or any size, aspect ratio preserved, inside your browser with no upload.",
      intro:
        "Pick a maximum dimension and every image is scaled down to it with its aspect ratio intact. Images already smaller than the limit are left untouched.",
      steps: [
        "Drop your images onto the page — up to 30 per batch.",
        "Pick a maximum dimension, or press a ready size such as Post or Product.",
        "Check the resulting dimensions on each image card.",
        "Download one image or the whole batch.",
      ],
      body: [
        {
          h: "Why resize before compressing",
          p: "The biggest waste in web imagery is serving a 6000px-wide photo into an 800px-wide slot. The browser downloads the whole thing and then shrinks it for display, so you pay for every surplus pixel. Cutting dimensions first saves far more than turning compression up ever will.",
        },
        {
          h: "Which size to pick",
          p: "1920px covers a full-width hero, 1280px suits article images, and 800px is plenty for product thumbnails in a grid. For high-density screens, double your target once — no more than that.",
        },
        {
          h: "Aspect ratio is always kept",
          p: "The maximum applies to the longer side and the other is derived from it, so nothing is stretched and you never have to work out per-image dimensions by hand.",
        },
      ],
      faq: [
        {
          q: "Does it crop the image?",
          a: "No. The whole image is scaled down with its proportions intact — nothing is cut off.",
        },
        {
          q: "Are small images enlarged?",
          a: "No. An image already smaller than your chosen limit keeps its original dimensions. Upscaling costs sharpness and invents no detail.",
        },
        {
          q: "Can I resize without compressing?",
          a: "Yes, and it is the default on this page: the No compression level. PNG files are re-encoded losslessly and lose nothing at all; JPGs are encoded at maximum quality, since changing the pixel count always means re-encoding.",
        },
        {
          q: "What size are Instagram images?",
          a: "A square post is 1080px and a story is 1080×1920. Press the Post or Story button in the settings and the limit is set for you.",
        },
        {
          q: "What size should product photos be?",
          a: "1200px covers most storefronts and leaves room for zoom on hover. The Product button sets it directly.",
        },
        {
          q: "How do I resize many images to one size?",
          a: "Drop them all in at once and pick the maximum dimension a single time — it applies across the whole batch.",
        },
        {
          q: "Will the image be distorted?",
          a: "No. The limit applies to the longer side and the other is derived from the ratio, so nothing is stretched or squashed.",
        },
        {
          q: "Can I set a separate width and height?",
          a: "We currently work from a single maximum dimension that preserves the ratio automatically. That covers most cases and avoids the distortion that comes from forcing dimensions which do not match the image.",
        },
      ],
    },
    convert: {
      nav: "Convert image format",
      short: "Convert",
      h1: "Convert images to WebP, AVIF, JPG and PNG",
      meta: "Convert between WebP, AVIF, JPG and PNG inside your browser, in bulk, with nothing uploaded to a server.",
      intro:
        "Pick an output format and every image is converted to it and compressed in the same pass. The default here is WebP, the best general choice for the web today.",
      steps: [
        "Drop your images onto the page in any supported format.",
        "Pick the output format — WebP is the default here.",
        "Adjust quality if you need to, or name a target size in KB.",
        "Download the results individually or as a batch.",
      ],
      body: [
        {
          h: "WebP or AVIF?",
          p: "WebP is roughly 25–35% smaller than JPG at matching quality and is supported by every browser in current use, which makes it the safe pick. AVIF goes meaningfully smaller still, but encodes more slowly and is newer. For shops and general websites, start with WebP.",
        },
        {
          h: "When to stay on JPG or PNG",
          p: "Stay on JPG if you are uploading to a platform that accepts nothing else. Stay on PNG if an image needs genuine transparency and you would rather not move it to WebP — though WebP supports transparency too, at a smaller size.",
        },
        {
          h: "Transparency across formats",
          p: "JPG has no transparency at all, so when converting to it we fill transparent areas with white rather than letting them turn black. WebP, AVIF and PNG all preserve transparency as-is.",
        },
      ],
      faq: [
        {
          q: "Does my browser support WebP?",
          a: "Yes. Every browser in current use supports WebP — Chrome, Firefox, Safari and Edge.",
        },
        {
          q: "What happens to GIFs?",
          a: "They become a still image, because animated GIF cannot be encoded through canvas. We pick PNG to keep transparency, or JPG if you have turned transparency off.",
        },
        {
          q: "Can I convert without losing quality?",
          a: "Converting to PNG is lossless. WebP, AVIF and JPG are lossy by default — push quality to 95 or above for the closest result to the original.",
        },
        {
          q: "How do I convert JPG to WebP?",
          a: "Drop your JPGs and pick WebP as the output format — it is already the default on this page, so usually you change nothing.",
        },
        {
          q: "How do I convert PNG to JPG?",
          a: "Pick JPEG as the output format. Note that transparency is filled with white, because JPG cannot store it.",
        },
        {
          q: "How do I convert WebP to JPG?",
          a: "Drop your WebP files and pick JPEG — useful when uploading to an older platform that will not accept WebP.",
        },
        {
          q: "Which is smaller, WebP or AVIF?",
          a: "AVIF is usually meaningfully smaller at matching quality, but it encodes noticeably more slowly across a large batch.",
        },
        {
          q: "Can I convert mixed formats at once?",
          a: "Yes. Drop JPG, PNG and WebP together and pick a single output format — everything is unified to it.",
        },
      ],
    },
    pdf: {
      nav: "Images to PDF",
      short: "PDF",
      h1: "Convert images to PDF",
      meta: "Combine one or many images into a single PDF inside your browser — your order, your page size, and nothing uploaded to a server.",
      intro:
        "Pick your images, arrange them however you like, and we assemble them into one PDF. Each image becomes a page, and the conversion happens in your browser so nothing leaves your device.",
      body: [
        {
          h: "Why turn images into a PDF?",
          p: "One file is easier to send, print and archive than ten loose images. Institutions, banks and application systems usually ask for PDF because it preserves order and formatting and opens the same way on any device — unlike a folder of images that can be resorted or arrive incomplete.",
        },
        {
          h: "A4 or fit to image?",
          p: "Choose A4 or Letter if you intend to print or upload to a system that expects a standard size; the image is centred on the page with a margin you control. Choose fit to image when the file is only for viewing on screen, and each page comes out exactly the size of its image with no white bands.",
        },
        {
          h: "The order is yours",
          p: "Drag the images to reorder them before converting. What you see on screen is the page order inside the file, and you can remove any image or add more before downloading.",
        },
      ],
      steps: [
        "Choose the images you want to convert — up to 30 at once.",
        "Drag them into the order you want them to appear.",
        "Set the page size and margin.",
        "Press Download PDF.",
      ],
      faq: [
        {
          q: "How do I convert an image to PDF?",
          a: "Pick the image in the tool above, choose a page size, then press Download PDF. No sign-up, no wait, no watermark.",
        },
        {
          q: "Can I put several images in one file?",
          a: "Yes, and that is the default. Select them all and each becomes its own page in a single file, in the order you set by dragging.",
        },
        {
          q: "Are my images uploaded to a server?",
          a: "No. The file is assembled entirely in your browser and not one byte of your images is sent anywhere.",
        },
        {
          q: "Which formats are accepted?",
          a: "JPG, PNG, WebP and GIF — anything your browser can open. PNG images keep their transparency inside the file.",
        },
        {
          q: "How many images can I convert?",
          a: "Up to 30 per file. The limit protects browser memory rather than restricting use.",
        },
        {
          q: "Will the file be very large?",
          a: "PDF compression is on by default. For a much lighter file, compress your images first with the compression tool and then convert them here.",
        },
      ],
    },
    icon: {
      nav: "Image to icon",
      short: "Icon",
      h1: "Convert images to icons and favicons",
      meta: "Turn any image into a multi-size favicon.ico plus ready PNG icons for your site and app — in your browser, with no upload.",
      intro:
        "Pick one image and we generate a complete icon set from it: a favicon.ico carrying six sizes inside, plus PNG icons for every size browsers and operating systems ask for.",
      body: [
        {
          h: "Why one image is not enough",
          p: "Browsers want 16 and 32 pixels for the tab, iOS wants 180 for the home screen, and Android wants 192 and 512 for the manifest. Handing over a single large image leaves each device to downscale it, which looks muddy at small sizes, so we render every size separately with high-quality smoothing.",
        },
        {
          h: "What an ICO file is",
          p: "A single file holding several images at different sizes, from which the system picks whichever fits each spot. We put 16, 32, 48, 64, 128 and 256 pixels inside it — the coverage browsers and Windows need between them.",
        },
        {
          h: "Fit whole or fill and crop?",
          p: "Icons are square and your image usually is not. Fit whole keeps all of it and adds transparent padding, which suits logos. Fill and crop fills the square and trims the edges, which suits photographs.",
        },
      ],
      steps: [
        "Choose an image — ideally a square PNG on a transparent background.",
        "Pick the fit mode and the sizes you want.",
        "Preview every size before downloading.",
        "Download favicon.ico on its own, or the full pack with PNG icons and a manifest.",
      ],
      faq: [
        {
          q: "What is the difference between favicon.ico and PNG icons?",
          a: "The ICO holds several sizes together and every browser understands it, including older ones. Separate PNG icons are what iOS, Android and the web manifest require. The full pack gives you both.",
        },
        {
          q: "Where do the files go?",
          a: "At the root of your site, then add the link tags shown below the tool into the head of your pages.",
        },
        {
          q: "What makes a good source image?",
          a: "A square image on a transparent background, 512 pixels or larger. Simple logos read far better at 16 pixels than detailed artwork.",
        },
        {
          q: "Is transparency preserved?",
          a: "Yes. Every size is generated as PNG, inside the ICO and outside it, and PNG supports transparency fully.",
        },
        {
          q: "Is SVG supported?",
          a: "Yes, and it is the best possible source — it is drawn at each icon's exact size, so the result is perfectly sharp.",
        },
        {
          q: "What size is an iOS icon?",
          a: "180 pixels, for the apple-touch-icon tag. It is selected by default in the size list.",
        },
        {
          q: "Is my image uploaded to a server?",
          a: "No. Generation happens entirely in your browser, and the ICO file itself is assembled byte by byte on the page.",
        },
        {
          q: "What is site.webmanifest?",
          a: "A file telling Android which icons to use when someone adds your site to their home screen. We generate it ready inside the pack.",
        },
      ],
    },
    exif: {
      nav: "Remove EXIF data",
      short: "EXIF",
      h1: "Remove EXIF data from images",
      meta: "Strip camera and GPS location metadata from your photos before publishing them — in your browser, with no upload.",
      intro:
        "Every photo your phone takes carries hidden data: the device model, the moment it was taken, and usually the exact coordinates of where you stood. This tool removes it.",
      steps: [
        "Drop the photos you are about to publish onto the page.",
        "Check that Remove EXIF data is on — it is on by default here.",
        "Pick the Light compression level if you want the smallest possible change in quality.",
        "Download the cleaned images and publish them safely.",
      ],
      body: [
        {
          h: "What your photos reveal",
          p: "EXIF data can carry latitude and longitude accurate to a few metres, a capture time down to the second, and sometimes the phone model and serial number. Posting a photo taken at home to a site or a marketplace can publish your address without you realising it.",
        },
        {
          h: "How it is removed",
          p: "The image is redrawn onto a fresh canvas and re-encoded from scratch. The result carries pixel data and nothing inherited — a more dependable approach than trying to blank individual metadata fields.",
        },
        {
          h: "Orientation is preserved",
          p: "Some EXIF strippers leave photos sideways, because the rotation lived in the metadata they deleted. We apply the EXIF rotation to the pixels first and then discard the data, so the image stays the way you see it.",
        },
      ],
      faq: [
        {
          q: "Is the removal permanent?",
          a: "Yes. The output file is re-encoded and carries no metadata from the original. Your original file on disk is left untouched.",
        },
        {
          q: "Does it affect image quality?",
          a: "Re-encoding is what makes the removal dependable. Choose the Light compression level to keep quality very close to the original.",
        },
        {
          q: "Is GPS location removed?",
          a: "Yes. GPS coordinates are part of EXIF and are removed along with everything else.",
        },
        {
          q: "How do I know whether my photo carries EXIF?",
          a: "Almost anything shot on a phone or a dedicated camera does. Screenshots and designed graphics usually do not.",
        },
        {
          q: "Do platforms strip this automatically?",
          a: "Some do on publish and some do not — particularly when a file is sent as an original through a chat or an email. Do not rely on it.",
        },
        {
          q: "Will my photo end up sideways?",
          a: "No. We apply the EXIF rotation to the pixels before discarding the data, which is a common failure in other strippers.",
        },
        {
          q: "Can I clean several photos at once?",
          a: "Yes, up to 30 images per batch.",
        },
        {
          q: "Do you keep a copy of my photos?",
          a: "No. Your photos never reach us in the first place — everything happens inside your browser.",
        },
      ],
    },
  },
};

export const dictionaries = { ar, en };
export type Dictionary = typeof ar;
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
