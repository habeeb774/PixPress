"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

/** تنقّل الشاشات الصغيرة: الترويسة تُخفي القائمة الأفقية تحت lg فتحلّ هذه محلّها */
export default function MobileNav({
  links,
  label,
}: {
  links: { href: string; label: string }[];
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // التنقّل في Next لا يُعيد تركيب المكوّن، فنغلق القائمة عند تغيّر المسار
  useEffect(() => setOpen(false), [pathname]);

  // منع تمرير الصفحة خلف القائمة المفتوحة
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        className="grid h-9 w-9 place-items-center rounded-full text-[var(--color-ink-soft)] transition hover:bg-[var(--color-brand-tint)] hover:text-[var(--color-brand)]"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-30 cursor-default bg-black/20"
          />
          <nav className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3 shadow-lg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base transition hover:bg-[var(--color-brand-tint)] hover:text-[var(--color-brand)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
