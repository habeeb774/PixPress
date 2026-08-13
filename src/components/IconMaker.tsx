"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileArchive, Trash2, Upload } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { buildIco, renderSquare, ICON_SIZES, ICO_SIZES } from "@/lib/ico";
import { cn } from "@/lib/utils";

type Rendered = { size: number; blob: Blob; url: string };

export default function IconMaker({ t }: { t: Dictionary }) {
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"cover" | "contain">("contain");
  const [sizes, setSizes] = useState<number[]>([16, 32, 48, 180, 192, 512]);
  const [rendered, setRendered] = useState<Rendered[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const bitmapRef = useRef<ImageBitmap | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // عناوين blob تبقى في الذاكرة حتى نُبطلها صراحةً
  useEffect(() => {
    return () => {
      rendered.forEach((r) => URL.revokeObjectURL(r.url));
      bitmapRef.current?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = async (bitmap: ImageBitmap, wanted: number[], fit: "cover" | "contain") => {
    setBusy(true);
    try {
      const out: Rendered[] = [];
      for (const size of [...wanted].sort((a, b) => a - b)) {
        const blob = await renderSquare(bitmap, size, fit);
        out.push({ size, blob, url: URL.createObjectURL(blob) });
      }
      setRendered((prev) => {
        prev.forEach((r) => URL.revokeObjectURL(r.url));
        return out;
      });
    } finally {
      setBusy(false);
    }
  };

  const onPick = async (file?: File) => {
    if (!file) return;
    setError("");
    if (!file.type.startsWith("image/")) {
      setError(t.errors.type);
      return;
    }
    try {
      bitmapRef.current?.close();
      const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
      bitmapRef.current = bitmap;
      setName(file.name.replace(/\.[^.]+$/, ""));
      await render(bitmap, sizes, mode);
    } catch {
      setError(t.errors.type);
    }
  };

  const toggleSize = async (size: number) => {
    const next = sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size];
    if (!next.length) return;
    setSizes(next);
    if (bitmapRef.current) await render(bitmapRef.current, next, mode);
  };

  const changeMode = async (m: "cover" | "contain") => {
    setMode(m);
    if (bitmapRef.current) await render(bitmapRef.current, sizes, m);
  };

  const save = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 250);
  };

  const downloadIco = async () => {
    if (!bitmapRef.current) return;
    setBusy(true);
    try {
      // ملف .ico يحمل مقاساته القياسية بغضّ النظر عمّا اختاره المستخدم لملفات PNG
      const parts = [];
      for (const size of ICO_SIZES) {
        parts.push({ size, blob: await renderSquare(bitmapRef.current, size, mode) });
      }
      save(await buildIco(parts), "favicon.ico");
    } finally {
      setBusy(false);
    }
  };

  const downloadPack = async () => {
    if (!rendered.length) return;
    setBusy(true);
    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      rendered.forEach((r) => zip.file(`icon-${r.size}x${r.size}.png`, r.blob));

      const parts = [];
      for (const size of ICO_SIZES) {
        parts.push({ size, blob: await renderSquare(bitmapRef.current!, size, mode) });
      }
      zip.file("favicon.ico", await buildIco(parts));
      zip.file("site.webmanifest", manifest(name || "App"));

      save(await zip.generateAsync({ type: "blob" }), `${name || "icons"}-icons.zip`);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    rendered.forEach((r) => URL.revokeObjectURL(r.url));
    bitmapRef.current?.close();
    bitmapRef.current = null;
    setRendered([]);
    setName("");
    setError("");
  };

  return (
    <div className="mx-auto max-w-4xl px-5 pb-16">
      {!rendered.length ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full flex-col items-center gap-3 rounded-[var(--radius-card)] border-2 border-dashed border-[var(--color-line)] p-14 transition hover:border-[var(--color-brand)]"
        >
          <Upload className="h-8 w-8 text-[var(--color-brand)]" />
          <span className="text-lg font-semibold">{t.icon.pick}</span>
          <span className="text-sm text-[var(--color-ink-soft)]">{t.icon.pickHint}</span>
        </button>
      ) : (
        <div className="space-y-6">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
            <h2 className="mb-3 text-sm font-semibold">{t.icon.fit}</h2>
            <div className="flex gap-2">
              {(["contain", "cover"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => changeMode(m)}
                  aria-pressed={mode === m}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm transition",
                    mode === m
                      ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                      : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
                  )}
                >
                  {t.icon[m]}
                </button>
              ))}
            </div>

            <h2 className="mb-3 mt-6 text-sm font-semibold">{t.icon.sizes}</h2>
            <div className="flex flex-wrap gap-2">
              {ICON_SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleSize(s)}
                  aria-pressed={sizes.includes(s)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs transition",
                    sizes.includes(s)
                      ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                      : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
                  )}
                >
                  {s}px
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
            <div className="flex flex-wrap items-end gap-6">
              {rendered.map((r) => (
                <figure key={r.size} className="text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.url}
                    alt={`${r.size}×${r.size}`}
                    width={Math.min(r.size, 96)}
                    height={Math.min(r.size, 96)}
                    className="checkerboard rounded border border-[var(--color-line)]"
                  />
                  <figcaption className="mt-1.5 text-xs text-[var(--color-ink-soft)]">
                    {r.size}px
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={downloadIco}
              disabled={busy}
              className="flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)] disabled:opacity-50"
            >
              <Download className="h-4 w-4" />
              {t.icon.downloadIco}
            </button>
            <button
              type="button"
              onClick={downloadPack}
              disabled={busy}
              className="flex items-center gap-2 rounded-full border border-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-[var(--color-brand)] transition hover:bg-[var(--color-brand-tint)] disabled:opacity-50"
            >
              <FileArchive className="h-4 w-4" />
              {t.icon.downloadPack}
            </button>
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:border-red-400 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
              {t.actions.clear}
            </button>
          </div>

          <pre className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-canvas)] p-4 text-xs leading-relaxed">
            {SNIPPET}
          </pre>
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onPick(e.target.files?.[0])}
      />
    </div>
  );
}

const SNIPPET = `<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png">
<link rel="manifest" href="/site.webmanifest">`;

const manifest = (appName: string) =>
  JSON.stringify(
    {
      name: appName,
      short_name: appName,
      icons: [
        { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      display: "standalone",
    },
    null,
    2
  );
