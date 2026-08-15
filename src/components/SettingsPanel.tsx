"use client";

import { Sliders, RefreshCw } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import type { Dictionary } from "@/i18n/dictionaries";
import type { OutputFormat, Preset } from "@/lib/types";
import { cn } from "@/lib/utils";

const PRESETS: Preset[] = ["max", "auto", "light", "medium", "strong", "custom"];
const FORMATS: OutputFormat[] = ["original", "jpeg", "png", "webp", "avif"];
const SIZES = [0, 3840, 2560, 1920, 1280, 800];

/** مقاسات جاهزة لأكثر الاستخدامات شيوعاً، فلا يبحث المستخدم عن الرقم بنفسه */
const SOCIAL: { key: keyof Dictionary["social"]; px: number }[] = [
  { key: "post", px: 1080 },
  { key: "story", px: 1920 },
  { key: "cover", px: 1640 },
  { key: "thumb", px: 400 },
  { key: "product", px: 1200 },
];

const TARGETS = [0, 100, 200, 500, 1000];

export default function SettingsPanel({ t }: { t: Dictionary }) {
  const settings = useAppStore((s) => s.settings);
  const setSettings = useAppStore((s) => s.setSettings);
  const recompressAll = useAppStore((s) => s.recompressAll);
  const hasJobs = useAppStore((s) => s.jobs.length > 0);
  const isWorking = useAppStore((s) => s.isWorking);

  const label: Record<Preset, string> = {
    max: t.settings.max,
    auto: t.settings.auto,
    light: t.settings.light,
    medium: t.settings.medium,
    strong: t.settings.strong,
    custom: t.settings.custom,
  };

  return (
    <section className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
      <h2 className="mb-4 flex items-center gap-2 text-base font-semibold">
        <Sliders className="h-4 w-4 text-[var(--color-brand)]" />
        {t.settings.title}
      </h2>

      <div className="space-y-5">
        <fieldset>
          <legend className="mb-2 text-sm text-[var(--color-ink-soft)]">{t.settings.preset}</legend>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setSettings({ preset: p })}
                aria-pressed={settings.preset === p}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm transition",
                  settings.preset === p
                    ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                    : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
                )}
              >
                {label[p]}
              </button>
            ))}
          </div>
        </fieldset>

        {settings.preset === "custom" && (
          <label className="block">
            <span className="mb-2 flex justify-between text-sm text-[var(--color-ink-soft)]">
              {t.settings.quality}
              <b className="text-[var(--color-brand)]">{settings.customQuality}</b>
            </span>
            <input
              type="range"
              min={1}
              max={100}
              value={settings.customQuality}
              onChange={(e) => setSettings({ customQuality: Number(e.target.value) })}
              className="w-full accent-[var(--color-brand)]"
            />
          </label>
        )}

        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--color-ink-soft)]">{t.settings.format}</span>
          <select
            value={settings.format}
            onChange={(e) => setSettings({ format: e.target.value as OutputFormat })}
            className="w-full rounded-lg border border-[var(--color-line)] bg-transparent px-3 py-2"
          >
            {FORMATS.map((f) => (
              <option key={f} value={f}>
                {f === "original" ? t.settings.original : f.toUpperCase()}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--color-ink-soft)]">{t.settings.resize}</span>
          <select
            value={settings.maxDimension}
            onChange={(e) => setSettings({ maxDimension: Number(e.target.value) })}
            className="w-full rounded-lg border border-[var(--color-line)] bg-transparent px-3 py-2"
          >
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s === 0 ? t.settings.noResize : `${s} px`}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend className="mb-2 text-sm text-[var(--color-ink-soft)]">{t.settings.social}</legend>
          <div className="flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setSettings({ maxDimension: s.px })}
                aria-pressed={settings.maxDimension === s.px}
                title={`${s.px} px`}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition",
                  settings.maxDimension === s.px
                    ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                    : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
                )}
              >
                {t.social[s.key]}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="text-sm">
          <span className="mb-1.5 block text-[var(--color-ink-soft)]">{t.settings.target}</span>
          <div className="flex flex-wrap gap-2">
            {TARGETS.map((kb) => (
              <button
                key={kb}
                type="button"
                onClick={() => setSettings({ targetKB: kb })}
                aria-pressed={settings.targetKB === kb}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition",
                  settings.targetKB === kb
                    ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                    : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
                )}
              >
                {kb === 0 ? t.settings.noTarget : `${kb} KB`}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-[var(--color-ink-soft)]">{t.settings.targetHint}</p>
        </div>

        <div className="space-y-2 text-sm">
          <Toggle
            checked={settings.stripExif}
            onChange={(v) => setSettings({ stripExif: v })}
            label={t.settings.stripExif}
          />
          <Toggle
            checked={settings.keepTransparency}
            onChange={(v) => setSettings({ keepTransparency: v })}
            label={t.settings.keepAlpha}
          />
        </div>

        {hasJobs && (
          <button
            type="button"
            onClick={recompressAll}
            disabled={isWorking}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand-tint)] px-4 py-2.5 text-sm font-semibold text-[var(--color-brand)] transition hover:bg-[var(--color-brand)] hover:text-white disabled:opacity-50"
          >
            <RefreshCw className={cn("h-4 w-4", isWorking && "animate-spin")} />
            {t.settings.apply}
          </button>
        )}
      </div>
    </section>
  );
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-[var(--color-brand)]"
      />
      <span>{label}</span>
    </label>
  );
}
