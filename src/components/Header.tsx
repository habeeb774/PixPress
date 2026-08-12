import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitch from "./LocaleSwitch";

export default function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-surface)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold">
          <img src="/favicon.svg" alt="LeanPix" className="h-8 w-8 rounded-lg object-contain" />
          <span className="display text-lg">{t.brand.name}</span>
        </Link>

        <nav className="hidden gap-5 text-sm text-[var(--color-ink-soft)] md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-[var(--color-brand)]">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <LocaleSwitch locale={locale} />
          <ThemeToggle label={locale === "ar" ? "تبديل الوضع الليلي" : "Toggle dark mode"} />
        </div>
      </div>
    </header>
  );
}
