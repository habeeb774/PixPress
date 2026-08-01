"use client";

import imageCompression from "browser-image-compression";
import type { CompressionSettings, WorkerResponse } from "./types";
import { resolveMime, resolveQuality } from "./utils";

export interface CompressResult {
  blob: Blob;
  width: number;
  height: number;
  srcWidth: number;
  srcHeight: number;
  mime: string;
  quality: number;
}

/** Worker واحد مشترك، يُنشأ عند أول استخدام فقط */
let worker: Worker | null = null;
function getWorker(): Worker | null {
  if (typeof window === "undefined") return null;
  if (typeof OffscreenCanvas === "undefined") return null;
  if (!worker) {
    worker = new Worker(new URL("../workers/compress.worker.ts", import.meta.url), { type: "module" });
  }
  return worker;
}

export function terminateWorker() {
  worker?.terminate();
  worker = null;
}

/**
 * يضغط ملفاً واحداً. يفضّل مسار الـ Worker، ويسقط تلقائياً إلى
 * browser-image-compression عند غياب OffscreenCanvas أو عند طلب حفظ EXIF.
 */
export function compressFile(
  id: string,
  file: File,
  settings: CompressionSettings,
  onProgress: (p: number) => void
): Promise<CompressResult> {
  const quality = resolveQuality(file, settings);
  const mime = resolveMime(file, settings.format, settings.keepTransparency);
  const w = settings.stripExif ? getWorker() : null;

  if (!w) return fallbackCompress(file, quality, mime, settings, onProgress);

  return new Promise((resolve, reject) => {
    const handle = (e: MessageEvent<WorkerResponse>) => {
      const msg = e.data;
      if (msg.id !== id) return;
      if (msg.type === "progress") {
        onProgress(msg.progress);
        return;
      }
      w.removeEventListener("message", handle);
      if (msg.type === "error") reject(new Error(msg.message));
      else resolve(msg);
    };
    w.addEventListener("message", handle);
    w.postMessage({
      id,
      file,
      quality: quality / 100,
      mime,
      maxDimension: settings.maxDimension,
      keepTransparency: settings.keepTransparency,
    });
  });
}

/** مسار احتياطي على الخيط الرئيسي (يستخدم Worker داخلي خاص بالمكتبة) */
async function fallbackCompress(
  file: File,
  quality: number,
  mime: string,
  settings: CompressionSettings,
  onProgress: (p: number) => void
): Promise<CompressResult> {
  const src = await readDimensions(file);
  const blob = await imageCompression(file, {
    initialQuality: quality / 100,
    fileType: mime,
    maxWidthOrHeight: settings.maxDimension || undefined,
    useWebWorker: true,
    preserveExif: !settings.stripExif,
    onProgress,
  });
  const out = await readDimensions(blob as File);
  onProgress(100);
  return {
    blob,
    width: out.width,
    height: out.height,
    srcWidth: src.width,
    srcHeight: src.height,
    mime: blob.type || mime,
    quality,
  };
}

export function readDimensions(file: Blob): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      resolve({ width: 0, height: 0 });
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });
}
