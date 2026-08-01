"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FileArchive, RefreshCw, Trash2 } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatBytes } from "@/lib/utils";
import { terminateWorker } from "@/lib/compressor";
import Dropzone from "./Dropzone";
import SettingsPanel from "./SettingsPanel";
import StatsPanel from "./StatsPanel";
import JobCard from "./JobCard";

export default function Workspace({ t, locale }: { t: Dictionary; locale: string }) {
  const jobs = useAppStore((s) => s.jobs);
  const clearAll = useAppStore((s) => s.clearAll);
  const recompressAll = useAppStore((s) => s.recompressAll);
  const isWorking = useAppStore((s) => s.isWorking);
  const [zipping, setZipping] = useState(false);

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

  const downloadZip = async () => {
    setZipping(true);
    try {
      // نُحمّل JSZip عند الطلب فقط حتى لا يثقل الحزمة الأولى
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      jobs.forEach((j) => j.compressedBlob && zip.file(j.name, j.compressedBlob));
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `pixpress-${Date.now()}.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setZipping(false);
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
                  disabled={!totals.count || zipping}
                  className="flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)] disabled:opacity-50"
                >
                  <FileArchive className="h-4 w-4" />
                  {t.actions.downloadAll}
                </button>
                <button
                  type="button"
                  onClick={recompressAll}
                  disabled={isWorking}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:border-[var(--color-brand)] disabled:opacity-50"
                >
                  <RefreshCw className={isWorking ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
                  {t.actions.recompress}
                </button>
                <button
                  type="button"
                  onClick={clearAll}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:border-red-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                  {t.actions.clear}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} t={t} locale={locale} />
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
