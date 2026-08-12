import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { toolSlugs } from "@/lib/tools";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pages = [
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/privacy`, label: t.nav.privacy },
    { href: `/${locale}/terms`, label: t.nav.terms },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-[var(--color-ink-soft)] sm:grid-cols-3">
        <div>
          <p className="mb-3 flex items-center gap-2 font-semibold text-[var(--color-ink)]">
            <ShieldCheck className="h-4 w-4 text-[var(--color-good)]" />
            {t.footer.made}
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <h2 className="mb-1 font-semibold text-[var(--color-ink)]">{t.toolsNav.title}</h2>
          {toolSlugs.map((s) => (
            <Link
              key={s}
              href={`/${locale}/${s}`}
              className="transition hover:text-[var(--color-brand)]"
            >
              {t.tools[s].nav}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-2">
          <h2 className="mb-1 font-semibold text-[var(--color-ink)]">{t.brand.name}</h2>
          {pages.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-[var(--color-brand)]">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-[var(--color-line)] py-4 text-center text-xs text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} {t.brand.name} — {t.footer.rights}
      </div>
    </footer>
  );
}
