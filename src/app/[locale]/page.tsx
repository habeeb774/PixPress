import { Lock, Zap, Layers, Replace } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import Workspace from "@/components/Workspace";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const features = [
    { icon: Lock, ...t.features.privacy },
    { icon: Zap, ...t.features.speed },
    { icon: Layers, ...t.features.batch },
    { icon: Replace, ...t.features.convert },
  ];

  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pb-10 pt-16 text-center md:pt-24">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{t.hero.title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-ink-soft)]">{t.hero.subtitle}</p>
      </section>

      <Workspace t={t} locale={locale} />

      <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8 text-2xl font-bold">{t.features.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.t} className="group rounded-[var(--radius-card)] border border-[var(--color-line)] p-5 transition hover:border-[var(--color-brand)]">
                <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-brand-tint)] text-[var(--color-brand)] transition group-hover:bg-[var(--color-brand)] group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mb-1 font-semibold">{f.t}</h3>
                <p className="text-sm text-[var(--color-ink-soft)]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
