"use client";

import { BarChart3, HardDrive, Images, Percent, RotateCcw } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatBytes } from "@/lib/utils";

export default function StatsPanel({ t, locale }: { t: Dictionary; locale: string }) {
  const stats = useAppStore((s) => s.stats);
  const resetStats = useAppStore((s) => s.resetStats);
  const ratio = stats.bytesProcessed ? Math.round((stats.bytesSaved / stats.bytesProcessed) * 100) : 0;

  const items = [
    { icon: Images, label: t.stats.images, value: String(stats.imagesCompressed) },
    { icon: HardDrive, label: t.stats.saved, value: formatBytes(stats.bytesSaved, locale) },
    { icon: BarChart3, label: t.stats.processed, value: formatBytes(stats.bytesProcessed, locale) },
    { icon: Percent, label: t.stats.ratio, value: `${ratio}%` },
  ];

  return (
    <section className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold">{t.stats.title}</h2>
        <button
          type="button"
          onClick={resetStats}
          className="flex items-center gap-1.5 text-xs text-[var(--color-ink-soft)] transition hover:text-[var(--color-brand)]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t.stats.reset}
        </button>
      </div>

      <dl className="grid grid-cols-2 gap-3">
        {items.map((i) => (
          <div key={i.label} className="rounded-xl bg-[var(--color-canvas)] p-3">
            <i.icon className="mb-1.5 h-4 w-4 text-[var(--color-brand)]" />
            <dd className="display text-xl font-bold">{i.value}</dd>
            <dt className="text-xs text-[var(--color-ink-soft)]">{i.label}</dt>
          </div>
        ))}
      </dl>

      <p className="mt-3 text-xs text-[var(--color-ink-soft)]">{t.stats.note}</p>
    </section>
  );
}
