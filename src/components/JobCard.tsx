"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, X, Check, Copy, Share2, GitCompareArrows, AlertTriangle } from "lucide-react";
import type { ImageJob } from "@/lib/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatBytes, savingsPercent } from "@/lib/utils";
import { useAppStore } from "@/store/useAppStore";
import CompareSlider from "./CompareSlider";

/** الحافظة لا تقبل من الصور سوى PNG، فنعيد ترميز الناتج عند النسخ فقط */
async function toPngBlob(blob: Blob): Promise<Blob> {
  if (blob.type === "image/png") return blob;
  const bitmap = await createImageBitmap(blob);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas-unavailable");
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();
  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("encode-failed"))), "image/png");
  });
}

export default function JobCard({
  job,
  index,
  t,
  locale,
}: {
  job: ImageJob;
  index: number;
  t: Dictionary;
  locale: string;
}) {
  const removeJob = useAppStore((s) => s.removeJob);
  // نفتح مقارنة أول صورة تلقائياً ليرى المستخدم الفرق دون أن يبحث عن الزر
  const [open, setOpen] = useState(index === 0);
  const [copyState, setCopyState] = useState<"idle" | "done" | "error">("idle");
  const [canCopyImage, setCanCopyImage] = useState(false);

  // نفحص بعد التركيب لا أثناء العرض، حتى لا يختلف ناتج الخادم عن المتصفح
  useEffect(() => {
    setCanCopyImage(
      typeof ClipboardItem !== "undefined" && typeof navigator.clipboard?.write === "function"
    );
  }, []);

  const done = job.status === "done" && job.compressedUrl && job.compressedSize !== undefined;
  const saved = done ? savingsPercent(job.originalSize, job.compressedSize!) : 0;

  const download = () => {
    if (!job.compressedUrl) return;
    const a = document.createElement("a");
    a.href = job.compressedUrl;
    a.download = job.name;
    a.click();
  };

  const copyImage = async () => {
    if (!job.compressedBlob) return;
    try {
      // Safari يُسقط إذن اللمسة إن انتظرنا التحويل قبل بناء ClipboardItem،
      // فنمرّر الوعد نفسه بدل انتظاره
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": toPngBlob(job.compressedBlob) }),
      ]);
      setCopyState("done");
    } catch {
      setCopyState("error");
    }
    setTimeout(() => setCopyState("idle"), 1600);
  };

  const share = async () => {
    if (!job.compressedBlob) return;
    const file = new File([job.compressedBlob], job.name, { type: job.outMime });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: job.name });
    } else {
      download();
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)]"
    >
      <div className="flex items-center gap-4 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={job.originalUrl}
          alt=""
          loading="lazy"
          decoding="async"
          className="checkerboard h-14 w-14 shrink-0 rounded-lg object-cover"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{job.name}</p>

          {done ? (
            <p className="mt-0.5 text-sm text-[var(--color-ink-soft)]">
              {formatBytes(job.originalSize, locale)} →{" "}
              <b className="text-[var(--color-good)]">{formatBytes(job.compressedSize!, locale)}</b>
              <span className="ms-2 rounded-full bg-[var(--color-good)]/10 px-2 py-0.5 text-xs text-[var(--color-good)]">
                −{saved}%
              </span>
            </p>
          ) : job.status === "error" ? (
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
              <AlertTriangle className="h-3.5 w-3.5" />
              {t.job.failed}
            </p>
          ) : (
            <div className="mt-2">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-brand-tint)]">
                <motion.div
                  className="h-full bg-[var(--color-brand)]"
                  animate={{ width: `${job.progress}%` }}
                  transition={{ duration: 0.25 }}
                />
              </div>
              <p className="mt-1 text-xs text-[var(--color-ink-soft)]">
                {job.status === "queued" ? t.job.queued : t.job.working}
              </p>
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {done && (
            <>
              <IconBtn onClick={() => setOpen((v) => !v)} label={t.job.compare}>
                <GitCompareArrows className="h-4 w-4" />
              </IconBtn>
              {canCopyImage && (
                <IconBtn
                  onClick={copyImage}
                  label={
                    copyState === "done"
                      ? t.job.copied
                      : copyState === "error"
                        ? t.job.copyFailed
                        : t.job.copyImage
                  }
                >
                  {copyState === "done" ? (
                    <Check className="h-4 w-4 text-[var(--color-good)]" />
                  ) : copyState === "error" ? (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </IconBtn>
              )}
              <IconBtn onClick={share} label={t.job.share}>
                <Share2 className="h-4 w-4" />
              </IconBtn>
              <button
                type="button"
                onClick={download}
                className="flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">{t.job.download}</span>
              </button>
            </>
          )}
          <IconBtn onClick={() => removeJob(job.id)} label={t.job.remove}>
            <X className="h-4 w-4" />
          </IconBtn>
        </div>
      </div>

      {open && done && (
        <div className="border-t border-[var(--color-line)] p-4">
          <CompareSlider
            before={job.originalUrl}
            after={job.compressedUrl!}
            labelBefore={t.job.original}
            labelAfter={t.job.compressed}
            hint={t.job.dragHandle}
          />

          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-5">
            <Stat label={t.job.before} value={formatBytes(job.originalSize, locale)} />
            <Stat label={t.job.after} value={formatBytes(job.compressedSize!, locale)} />
            <Stat label={t.job.saved} value={`${saved}%`} accent />
            <Stat
              label={t.job.dimensions}
              value={job.outWidth ? `${job.outWidth} × ${job.outHeight}` : "—"}
            />
            <Stat label={t.job.quality} value={job.qualityUsed ? `${job.qualityUsed}` : "—"} />
          </dl>
        </div>
      )}
    </motion.article>
  );
}

function IconBtn({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full text-[var(--color-ink-soft)] transition hover:bg-[var(--color-brand-tint)] hover:text-[var(--color-brand)]"
    >
      {children}
    </button>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-lg bg-[var(--color-canvas)] px-3 py-2">
      <dt className="text-xs text-[var(--color-ink-soft)]">{label}</dt>
      <dd className={accent ? "font-semibold text-[var(--color-good)]" : "font-semibold"}>{value}</dd>
    </div>
  );
}
