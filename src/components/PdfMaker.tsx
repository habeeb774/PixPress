"use client";

import { useEffect, useRef, useState } from "react";
import { FileDown, GripVertical, Trash2, Upload, X } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { MAX_FILES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Item = { id: string; file: File; url: string; w: number; h: number };
type PageSize = "fit" | "a4" | "letter";

const A4 = { w: 595.28, h: 841.89 };
const LETTER = { w: 612, h: 792 };

export default function PdfMaker({ t }: { t: Dictionary }) {
  const [items, setItems] = useState<Item[]>([]);
  const [size, setSize] = useState<PageSize>("a4");
  const [margin, setMargin] = useState(24);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dragIndex = useRef<number | null>(null);

  useEffect(() => {
    return () => items.forEach((i) => URL.revokeObjectURL(i.url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const add = async (files: FileList | null) => {
    if (!files?.length) return;
    setError("");
    const room = MAX_FILES - items.length;
    const picked = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, Math.max(0, room));
    if (!picked.length) {
      setError(t.errors.type);
      return;
    }

    const next: Item[] = [];
    for (const file of picked) {
      const url = URL.createObjectURL(file);
      // نحتاج الأبعاد لحساب مكان الصورة داخل الصفحة قبل الرسم
      const dims = await new Promise<{ w: number; h: number }>((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => resolve({ w: 0, h: 0 });
        img.src = url;
      });
      next.push({ id: crypto.randomUUID(), file, url, ...dims });
    }
    setItems((prev) => [...prev, ...next]);
  };

  const remove = (id: string) =>
    setItems((prev) => {
      const gone = prev.find((i) => i.id === id);
      if (gone) URL.revokeObjectURL(gone.url);
      return prev.filter((i) => i.id !== id);
    });

  const clear = () => {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setError("");
  };

  /** إعادة الترتيب بالسحب — ترتيب الصور هو ترتيب صفحات الملف */
  const reorder = (to: number) => {
    const from = dragIndex.current;
    dragIndex.current = null;
    if (from === null || from === to) return;
    setItems((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(from, 1);
      copy.splice(to, 0, moved);
      return copy;
    });
  };

  const build = async () => {
    if (!items.length) return;
    setBusy(true);
    try {
      // نُحمّل المولّد عند الطلب فقط حتى لا يثقل بقية الصفحات
      const { jsPDF } = await import("jspdf");
      let doc: import("jspdf").jsPDF | null = null;

      for (const [index, item] of items.entries()) {
        const data = await readAsDataUrl(item.file);
        const isPng = item.file.type === "image/png";
        const landscape = item.w > item.h;

        let pageW: number, pageH: number;
        if (size === "fit") {
          // الصفحة بمقاس الصورة تماماً: بلا هوامش ولا أشرطة بيضاء
          pageW = item.w * 0.75;
          pageH = item.h * 0.75;
        } else {
          const base = size === "a4" ? A4 : LETTER;
          pageW = landscape ? base.h : base.w;
          pageH = landscape ? base.w : base.h;
        }

        if (!doc) {
          doc = new jsPDF({
            orientation: pageW > pageH ? "landscape" : "portrait",
            unit: "pt",
            format: [pageW, pageH],
            compress: true,
          });
        } else {
          doc.addPage([pageW, pageH], pageW > pageH ? "landscape" : "portrait");
        }

        const m = size === "fit" ? 0 : margin;
        const availW = pageW - m * 2;
        const availH = pageH - m * 2;
        const ratio = Math.min(availW / item.w, availH / item.h);
        const drawW = item.w * ratio;
        const drawH = item.h * ratio;

        doc.addImage(
          data,
          isPng ? "PNG" : "JPEG",
          m + (availW - drawW) / 2,
          m + (availH - drawH) / 2,
          drawW,
          drawH,
          `img${index}`,
          "FAST"
        );
      }

      doc!.save(`leanpix-${Date.now()}.pdf`);
    } catch {
      setError(t.pdf.failed);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-5 pb-16">
      {!items.length ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full flex-col items-center gap-3 rounded-[var(--radius-card)] border-2 border-dashed border-[var(--color-line)] p-14 transition hover:border-[var(--color-brand)]"
        >
          <Upload className="h-8 w-8 text-[var(--color-brand)]" />
          <span className="text-lg font-semibold">{t.pdf.pick}</span>
          <span className="text-sm text-[var(--color-ink-soft)]">{t.pdf.pickHint}</span>
        </button>
      ) : (
        <div className="space-y-6">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
            <h2 className="mb-3 text-sm font-semibold">{t.pdf.pageSize}</h2>
            <div className="flex flex-wrap gap-2">
              {(["a4", "letter", "fit"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm transition",
                    size === s
                      ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                      : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
                  )}
                >
                  {t.pdf[s]}
                </button>
              ))}
            </div>

            {size !== "fit" && (
              <label className="mt-5 block text-sm">
                <span className="mb-2 flex justify-between text-[var(--color-ink-soft)]">
                  {t.pdf.margin}
                  <b className="text-[var(--color-brand)]">{margin}</b>
                </span>
                <input
                  type="range"
                  min={0}
                  max={72}
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full accent-[var(--color-brand)]"
                />
              </label>
            )}
          </div>

          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
            <h2 className="mb-1 text-sm font-semibold">
              {t.pdf.order} — {items.length}
            </h2>
            <p className="mb-4 text-xs text-[var(--color-ink-soft)]">{t.pdf.orderHint}</p>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {items.map((item, i) => (
                <li
                  key={item.id}
                  draggable
                  onDragStart={() => (dragIndex.current = i)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => reorder(i)}
                  className="group relative cursor-grab rounded-lg border border-[var(--color-line)] p-2 active:cursor-grabbing"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt=""
                    className="checkerboard h-24 w-full rounded object-contain"
                  />
                  <span className="absolute start-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-[var(--color-brand)] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    aria-label={t.job.remove}
                    className="absolute end-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-[var(--color-surface)] text-[var(--color-ink-soft)] shadow transition hover:text-red-500"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <GripVertical className="mx-auto mt-1 h-4 w-4 text-[var(--color-line)]" />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={build}
              disabled={busy}
              className="flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)] disabled:opacity-50"
            >
              <FileDown className="h-4 w-4" />
              {busy ? t.pdf.building : t.pdf.download}
            </button>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:border-[var(--color-brand)]"
            >
              <Upload className="h-4 w-4" />
              {t.pdf.addMore}
            </button>
            <button
              type="button"
              onClick={clear}
              className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:border-red-400 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
              {t.actions.clear}
            </button>
          </div>
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => {
          add(e.target.files);
          e.target.value = "";
        }}
      />
    </div>
  );
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("read-failed"));
    reader.readAsDataURL(file);
  });
}
