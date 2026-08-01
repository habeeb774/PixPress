/// <reference lib="webworker" />
import type { WorkerRequest, WorkerResponse } from "@/lib/types";

/**
 * ضغط الصور داخل Worker باستخدام OffscreenCanvas.
 * كل شيء يجري خارج الخيط الرئيسي، فلا تتجمّد الصفحة أثناء معالجة دفعة كبيرة.
 * إعادة الترميز عبر canvas تُزيل بيانات EXIF تلقائياً.
 */

const post = (msg: WorkerResponse) => (self as unknown as Worker).postMessage(msg);

/** أبعاد الإخراج مع الحفاظ على نسبة العرض إلى الارتفاع */
function fit(w: number, h: number, max: number) {
  if (!max || (w <= max && h <= max)) return { w, h };
  const r = Math.min(max / w, max / h);
  return { w: Math.round(w * r), h: Math.round(h * r) };
}

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const { id, file, quality, mime, maxDimension, keepTransparency } = e.data;
  try {
    post({ id, type: "progress", progress: 15 });

    // fromImage يطبّق دوران EXIF قبل حذفه، فلا تظهر الصورة مقلوبة
    const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
    post({ id, type: "progress", progress: 45 });

    const srcWidth = bitmap.width;
    const srcHeight = bitmap.height;
    const { w, h } = fit(srcWidth, srcHeight, maxDimension);

    const canvas = new OffscreenCanvas(w, h);
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) throw new Error("canvas-unavailable");

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // JPEG لا يدعم الشفافية: نملأ بالأبيض بدل ظهور خلفية سوداء
    const opaque = mime === "image/jpeg" || !keepTransparency;
    if (opaque) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
    }

    ctx.drawImage(bitmap, 0, 0, w, h);
    bitmap.close();
    post({ id, type: "progress", progress: 70 });

    let blob = await canvas.convertToBlob({ type: mime, quality: quality });

    // بعض المتصفحات تتجاهل صيغة غير مدعومة وترجع PNG أكبر من الأصل
    let outMime = blob.type || mime;
    if (outMime !== mime && mime !== "image/png") {
      blob = await canvas.convertToBlob({ type: "image/jpeg", quality });
      outMime = "image/jpeg";
    }

    post({ id, type: "progress", progress: 95 });
    post({
      id,
      type: "done",
      blob,
      width: w,
      height: h,
      srcWidth,
      srcHeight,
      mime: outMime,
      quality: Math.round(quality * 100),
    });
  } catch (err) {
    post({ id, type: "error", message: err instanceof Error ? err.message : "compression-failed" });
  }
};
