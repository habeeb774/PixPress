import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { toolSlugs } from "@/lib/tools";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitch from "./LocaleSwitch";
import MobileNav from "./MobileNav";

export default function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const links = [
    { href: `/${locale}`, label: t.nav.home },
    ...toolSlugs.map((s) => ({ href: `/${locale}/${s}`, label: t.tools[s].nav })),
    { href: `/${locale}/faq`, label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-surface)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 lg:gap-6">
        <Link href={`/${locale}`} className="flex min-w-0 shrink items-center gap-2 font-semibold">
          <img
            src="/favicon.svg"
            alt="LeanPix"
            className="h-8 w-8 shrink-0 rounded-lg object-contain"
          />
          <span className="display truncate text-lg">{t.brand.name}</span>
        </Link>

        <nav className="hidden gap-5 text-sm text-[var(--color-ink-soft)] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-[var(--color-brand)]">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-1 sm:gap-2">
          <LocaleSwitch locale={locale} />
          <ThemeToggle label={locale === "ar" ? "تبديل الوضع الليلي" : "Toggle dark mode"} />
          <MobileNav links={links} label={locale === "ar" ? "القائمة" : "Menu"} />
        </div>
      </div>
    </header>
  );
}
