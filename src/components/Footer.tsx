import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const links = [
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/privacy`, label: t.nav.privacy },
    { href: `/${locale}/terms`, label: t.nav.terms },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[var(--color-ink-soft)] md:flex-row md:items-center">
        <p className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[var(--color-good)]" />
          {t.footer.made}
        </p>
        <nav className="flex flex-wrap gap-4 md:ms-auto">
          {links.map((l) => (
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
