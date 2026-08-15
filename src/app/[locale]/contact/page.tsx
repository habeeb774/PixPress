import type { Metadata } from "next";
import { Mail, Github } from "lucide-react";
import Prose from "../_Prose";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = { title: "Contact / اتصل بنا" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  const ar = l === "ar";
  const t = getDictionary(l);
  const page = getPages(l).contact;

  return (
    <Prose title={t.nav.contact}>
      <p>{page.intro}</p>
      <ContactForm t={t} />

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <a
          href="mailto:hello@leanpix.site"
          className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-line)] p-4 transition hover:border-[var(--color-brand)]"
        >
          <Mail className="h-5 w-5 text-[var(--color-brand)]" />
          <span className="text-[var(--color-ink)]">hello@leanpix.site</span>
        </a>
        <a
          href="https://github.com/habeeb774/PixPress"
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
