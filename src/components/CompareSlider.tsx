"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { clamp } from "@/lib/utils";

/**
 * مقارنة بالسحب بين الأصلية والمضغوطة.
 * تعمل بالماوس واللمس والأسهم في لوحة المفاتيح.
 */
export default function CompareSlider({
  before,
  after,
  labelBefore,
  labelAfter,
  hint,
}: {
  before: string;
  after: string;
  labelBefore: string;
  labelAfter: string;
  hint: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(clamp(((clientX - r.left) / r.width) * 100, 0, 100));
  }, []);

  return (
    <div
      ref={ref}
      className="checkerboard relative aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-xl"
      onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={labelAfter} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
      {/* الطبقة العلوية مقصوصة أفقياً؛ الغلاف الداخلي يظل بعرض الحاوية كاملاً حتى لا تنضغط الصورة */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div
          className="absolute inset-y-0 start-0"
          style={{ width: pos > 0 ? `${(100 / pos) * 100}%` : "100%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={before}
            alt={labelBefore}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <span className="absolute top-2 start-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
        {labelBefore}
      </span>
      <span className="absolute top-2 end-2 rounded-full bg-[var(--color-brand)] px-2 py-0.5 text-xs text-white">
        {labelAfter}
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ insetInlineStart: `${pos}%` }}>
        <span className="absolute top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[var(--color-brand)] shadow-lg">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label={hint}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute bottom-2 start-1/2 w-2/3 -translate-x-1/2 opacity-0 focus-visible:opacity-100"
      />
    </div>
  );
}
