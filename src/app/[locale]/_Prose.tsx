export default function Prose({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="mb-6 text-3xl font-extrabold md:text-4xl">{title}</h1>
      <div className="space-y-4 text-[var(--color-ink-soft)] leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--color-ink)]">
        {children}
      </div>
    </article>
  );
}
