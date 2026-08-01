"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { ImagePlus, AlertCircle } from "lucide-react";
import { ACCEPT_MAP, MAX_FILE_SIZE, MAX_FILES } from "@/lib/constants";
import { validateImage } from "@/lib/validate";
import { useAppStore } from "@/store/useAppStore";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

export default function Dropzone({ t, compact = false }: { t: Dictionary; compact?: boolean }) {
  const addFiles = useAppStore((s) => s.addFiles);
  const count = useAppStore((s) => s.jobs.length);
  const [errors, setErrors] = useState<string[]>([]);

  const onDrop = useCallback(
    async (accepted: File[]) => {
      const msgs: string[] = [];
      const safe: File[] = [];

      if (count + accepted.length > MAX_FILES) {
        msgs.push(t.errors.limit.replace("{n}", String(MAX_FILES)));
      }

      // تحقّق من محتوى كل ملف فعلياً قبل تمريره للضغط
      for (const file of accepted.slice(0, MAX_FILES - count)) {
        const res = await validateImage(file);
        if (res.ok) safe.push(file);
        else msgs.push(`${file.name} — ${t.errors[res.reason ?? "type"]}`);
      }

      setErrors(msgs);
      if (safe.length) await addFiles(safe);
    },
    [addFiles, count, t]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: ACCEPT_MAP,
    maxSize: MAX_FILE_SIZE,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={cn(
          "relative rounded-[var(--radius-card)] border-2 border-dashed bg-[var(--color-surface)] text-center transition",
          compact ? "p-6" : "p-10 md:p-16",
          isDragActive
            ? "border-[var(--color-brand)] bg-[var(--color-brand-tint)]"
            : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
        )}
      >
        <input {...getInputProps()} aria-label={t.hero.cta} />

        <motion.div animate={{ scale: isDragActive ? 1.04 : 1 }} transition={{ duration: 0.2 }}>
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-brand-tint)] text-[var(--color-brand)]">
            <ImagePlus className="h-7 w-7" />
          </div>

          <button
            type="button"
            onClick={open}
            className="rounded-full bg-[var(--color-brand)] px-7 py-3 font-semibold text-white shadow-lg shadow-[var(--color-brand)]/25 transition hover:bg-[var(--color-brand-strong)] active:scale-[0.98]"
          >
            {t.hero.cta}
          </button>

          <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
            {isDragActive ? t.dropzone.active : t.hero.drop}
          </p>
          {!compact && <p className="mt-1 text-xs text-[var(--color-ink-soft)]">{t.hero.formats}</p>}
        </motion.div>
      </div>

      {errors.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-red-600 dark:text-red-400">
          {errors.map((e, i) => (
            <li key={i} className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {e}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
