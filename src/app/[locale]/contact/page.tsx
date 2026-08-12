import type { Metadata } from "next";
import { Mail, Github } from "lucide-react";
import Prose from "../_Prose";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Contact / اتصل بنا" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = !isLocale(locale) || locale === "ar";
  const t = getDictionary(ar ? "ar" : "en");

  return (
    <Prose title={t.nav.contact}>
      <p>
        {ar
          ? "بلاغ عن خلل، أو صيغة تريد دعمها، أو فكرة تحسين — اكتب لنا ونقرأ كل رسالة."
          : "Report a bug, request a format, or suggest an improvement. We read everything."}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href="mailto:hello@leanpix.app"
          className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-line)] p-4 transition hover:border-[var(--color-brand)]"
        >
          <Mail className="h-5 w-5 text-[var(--color-brand)]" />
          <span className="text-[var(--color-ink)]">hello@leanpix.app</span>
        </a>
        <a
          href="https://github.com"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-line)] p-4 transition hover:border-[var(--color-brand)]"
        >
          <Github className="h-5 w-5 text-[var(--color-brand)]" />
          <span className="text-[var(--color-ink)]">{ar ? "المستودع على GitHub" : "GitHub repository"}</span>
        </a>
      </div>
    </Prose>
  );
}
