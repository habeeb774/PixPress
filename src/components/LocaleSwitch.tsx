"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { localeNames, locales, type Locale } from "@/i18n/config";

export default function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // التنقّل لا يُعيد التركيب، فنغلق القائمة عند تغيّر المسار
  useEffect(() => setOpen(false), [pathname]);

  /** نستبدل جزء اللغة فقط ونُبقي المستخدم في نفس الصفحة */
  const hrefFor = (l: Locale) => pathname.replace(/^\/[a-z]{2}/, `/${l}`) || `/${l}`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={localeNames[locale]}
        aria-expanded={open}
        className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-line)] px-2.5 text-sm text-[var(--color-ink-soft)] transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] sm:px-3"
      >
        <Languages className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 cursor-default"
          />
          <ul className="absolute end-0 z-40 mt-2 min-w-40 overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] py-1 shadow-lg">
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={hrefFor(l)}
                  hrefLang={l}
                  onClick={() => setOpen(false)}
                  className={
                    l === locale
                      ? "block px-4 py-2 text-sm font-semibold text-[var(--color-brand)]"
                      : "block px-4 py-2 text-sm transition hover:bg-[var(--color-brand-tint)] hover:text-[var(--color-brand)]"
                  }
                >
                  {localeNames[l]}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
