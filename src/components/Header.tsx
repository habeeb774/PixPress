import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { toolSlugs } from "@/lib/tools";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitch from "./LocaleSwitch";
import MobileNav from "./MobileNav";

export default function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  // الشريط العلوي يضيق بالأسماء الكاملة، فيأخذ المختصرة — والقائمة المنسدلة تأخذ الكاملة
  const barLinks = [
    { href: `/${locale}`, label: t.nav.home },
    ...toolSlugs.map((s) => ({ href: `/${locale}/${s}`, label: t.tools[s].short })),
  ];
  const menuLinks = [
    { href: `/${locale}`, label: t.nav.home },
    ...toolSlugs.map((s) => ({ href: `/${locale}/${s}`, label: t.tools[s].nav })),
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/about`, label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-surface)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 xl:gap-8">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2 font-semibold">
          <img
            src="/icon-64x64.png"
            alt="LeanPix"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded-lg object-contain"
          />
          <span className="display text-lg">{t.brand.name}</span>
        </Link>

        <nav className="hidden min-w-0 gap-4 text-sm text-[var(--color-ink-soft)] xl:flex">
          {barLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap transition hover:text-[var(--color-brand)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-1 sm:gap-2">
          <LocaleSwitch locale={locale} />
          <ThemeToggle label={locale === "ar" ? "تبديل الوضع الليلي" : "Toggle dark mode"} />
          <MobileNav links={menuLinks} label={locale === "ar" ? "القائمة" : "Menu"} />
        </div>
      </div>
    </header>
  );
}
