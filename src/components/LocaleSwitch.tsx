"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import type { Locale } from "@/i18n/config";

export default function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const next: Locale = locale === "ar" ? "en" : "ar";
  // نستبدل جزء اللغة فقط ونُبقي المستخدم في نفس الصفحة
  const href = pathname.replace(/^\/(ar|en)/, `/${next}`) || `/${next}`;

  return (
    <Link
      href={href}
      hrefLang={next}
      aria-label={next === "ar" ? "العربية" : "English"}
      className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-line)] px-2.5 text-sm text-[var(--color-ink-soft)] transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] sm:px-3"
    >
      <Languages className="h-4 w-4 shrink-0" />
      {/* الاسم الكامل يزاحم الشعار على الشاشات الضيّقة، فنكتفي بالرمز */}
      <span className="hidden sm:inline">{next === "ar" ? "العربية" : "English"}</span>
      <span className="sm:hidden">{next === "ar" ? "ع" : "EN"}</span>
    </Link>
  );
}
