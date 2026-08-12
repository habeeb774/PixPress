"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FileArchive, ImageDown, RefreshCw, Trash2 } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatBytes, renameWithExt } from "@/lib/utils";
import { compressFile, terminateWorker } from "@/lib/compressor";
import Dropzone from "./Dropzone";
import SettingsPanel from "./SettingsPanel";
import StatsPanel from "./StatsPanel";
import JobCard from "./JobCard";

const JPEG_MIME = "image/jpeg";

/** يمنع تصادم الأسماء داخل الأرشيف عندما يتحوّل a.png وa.webp إلى a-min.jpg */
function uniqueName(name: string, taken: Set<string>): string {
  let out = name;
  if (taken.has(out)) {
    const dot = name.lastIndexOf(".");
    const base = dot > 0 ? name.slice(0, dot) : name;
    const ext = dot > 0 ? name.slice(dot) : "";
    let i = 2;
    while (taken.has(`${base} (${i})${ext}`)) i++;
    out = `${base} (${i})${ext}`;
  }
  taken.add(out);
  return out;
}

export default function Workspace({ t, locale }: { t: Dictionary; locale: string }) {
  const jobs = useAppStore((s) => s.jobs);
  const settings = useAppStore((s) => s.settings);
  const clearAll = useAppStore((s) => s.clearAll);
  const recompressAll = useAppStore((s) => s.recompressAll);
  const isWorking = useAppStore((s) => s.isWorking);
  const [busy, setBusy] = useState<"zip" | "jpeg" | null>(null);
  const [converted, setConverted] = useState(0);

  // ننهي الـ Worker ونحرّر عناوين blob عند مغادرة الصفحة
  useEffect(() => () => terminateWorker(), []);

  const totals = useMemo(() => {
    const done = jobs.filter((j) => j.status === "done" && j.compressedSize !== undefined);
    return {
      count: done.length,
      before: done.reduce((a, j) => a + j.originalSize, 0),
      after: done.reduce((a, j) => a + (j.compressedSize ?? 0), 0),
    };
  }, [jobs]);

  const saveZip = async (entries: { name: string; blob: Blob }[]) => {
    // نُحمّل JSZip عند الطلب فقط حتى لا يثقل الحزمة الأولى
    const { default: JSZip } = await import("jszip");
    const zip = new JSZip();
    const taken = new Set<string>();
    entries.forEach((e) => zip.file(uniqueName(e.name, taken), e.blob));
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pixpress-${Date.now()}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadZip = async () => {
    setBusy("zip");
    try {
      const entries = jobs
        .filter((j) => j.compressedBlob)
        .map((j) => ({ name: j.name, blob: j.compressedBlob! }));
      if (entries.length) await saveZip(entries);
    } finally {
      setBusy(null);
    }
  };

  /** المتصفحات تُسقط التنزيلات المتتابعة السريعة، فنترك فاصلاً قصيراً بين كل ملف */
  const saveBlob = (blob: Blob, name: string) =>
    new Promise<void>((resolve) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve();
      }, 250);
    });

  /**
   * ينزّل كل صورة بصيغة JPG كملف مستقل — لا أرشيف — دون المساس بنتائج الشاشة.
   * التحويل يجري من الملف الأصلي لا من الناتج المضغوط، تفادياً لضغطٍ فوق ضغط،
   * وبنفس مستوى الجودة والأبعاد المختارَين في الإعدادات.
   */
  const downloadAllJpeg = async () => {
    setBusy("jpeg");
    setConverted(0);
    try {
      const jpegSettings = { ...settings, format: "jpeg" as const, keepTransparency: false };
      const done = jobs.filter((j) => j.status === "done" && j.compressedBlob);
      const taken = new Set<string>();

      for (const job of done) {
        const name = uniqueName(renameWithExt(job.file.name, JPEG_MIME), taken);
        try {
          // الناتج بصيغة JPEG أصلاً — نأخذه كما هو بلا إعادة ترميز
          const blob =
            job.outMime === JPEG_MIME
              ? job.compressedBlob!
              : (await compressFile(`${job.id}-jpeg`, job.file, jpegSettings, () => {})).blob;
          await saveBlob(blob, name);
        } catch {
          // نتخطّى الصورة المتعذّرة ونُكمل بقية الدفعة
        }
        setConverted((n) => n + 1);
      }
    } finally {
      setBusy(null);
    }
  };

  const hasJobs = jobs.length > 0;

  return (
    <div className="mx-auto max-w-6xl px-5 pb-20">
      {!hasJobs && <Dropzone t={t} />}

      {hasJobs && (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            <Dropzone t={t} compact />

            <div className="flex flex-wrap items-center gap-2 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
              <p className="text-sm text-[var(--color-ink-soft)]">
                {t.actions.totalSaved
                  .replace("{size}", formatBytes(totals.before - totals.after, locale))
                  .replace("{total}", formatBytes(totals.before, locale))}
              </p>

              <div className="ms-auto flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={downloadZip}
                  disabled={!totals.count || busy !== null || isWorking}
                  className="flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)] disabled:opacity-50"
                >
                  <FileArchive className="h-4 w-4" />
                  {t.actions.downloadAll}
                </button>
                <button
                  type="button"
                  onClick={downloadAllJpeg}
                  disabled={!totals.count || busy !== null || isWorking}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-[var(--color-brand)] transition hover:bg-[var(--color-brand-tint)] disabled:opacity-50"
                >
                  <ImageDown className={busy === "jpeg" ? "h-4 w-4 animate-pulse" : "h-4 w-4"} />
                  {busy === "jpeg"
                    ? `${t.actions.converting} ${converted}/${totals.count}`
                    : t.actions.downloadAllJpeg}
                </button>
                <button
                  type="button"
                  onClick={recompressAll}
                  disabled={isWorking || busy !== null}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:border-[var(--color-brand)] disabled:opacity-50"
                >
                  <RefreshCw className={isWorking ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
                  {t.actions.recompress}
                </button>
                <button
                  type="button"
                  onClick={clearAll}
                  disabled={busy !== null}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:border-red-400 hover:text-red-500 disabled:opacity-50"
                >
                  <Trash2 className="h-4 w-4" />
                  {t.actions.clear}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {jobs.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} t={t} locale={locale} />
                ))}
              </AnimatePresence>
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <SettingsPanel t={t} />
            <StatsPanel t={t} locale={locale} />
          </aside>
        </div>
      )}
    </div>
  );
}
