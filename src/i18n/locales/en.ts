import type ar from './ar';

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
  contact: {
    kind: "What is this about?",
    kinds: ["Bug report", "Suggestion", "Partnership", "General question"],
    name: "Name",
    message: "Message",
    send: "Send",
    note: "The button opens your mail app with the message ready — we run no server to receive forms and keep none of your details. Typical reply within 24–48 hours.",
  },
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
  },};

export default en;
