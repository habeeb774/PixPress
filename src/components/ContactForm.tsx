"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const EMAIL = "hello@leanpix.site";

/**
 * لا خادم بريد لدينا، والموقع بلا خلفية أصلاً — فالنموذج يُركّب رسالة
 * ويفتحها في برنامج بريد المستخدم. صادق وظيفياً، وبلا مفاتيح ولا خدمة خارجية.
 */
export default function ContactForm({ t }: { t: Dictionary }) {
  const [kind, setKind] = useState(0);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const kinds = t.contact.kinds;

  const send = () => {
    const subject = `[${kinds[kind]}] ${t.brand.name}`;
    const lines = [name && `${t.contact.name}: ${name}`, "", body].filter(Boolean).join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
  };

  return (
    <div className="mt-6 space-y-4">
      <fieldset>
        <legend className="mb-2 text-sm text-[var(--color-ink-soft)]">{t.contact.kind}</legend>
        <div className="flex flex-wrap gap-2">
          {kinds.map((k, i) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(i)}
              aria-pressed={kind === i}
              className={
                kind === i
                  ? "rounded-full border border-[var(--color-brand)] bg-[var(--color-brand)] px-3.5 py-1.5 text-sm text-white"
                  : "rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-sm transition hover:border-[var(--color-brand)]"
              }
            >
              {k}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm">
        <span className="mb-1.5 block text-[var(--color-ink-soft)]">{t.contact.name}</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-[var(--color-line)] bg-transparent px-3 py-2"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-[var(--color-ink-soft)]">{t.contact.message}</span>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={6}
          className="w-full rounded-lg border border-[var(--color-line)] bg-transparent px-3 py-2"
        />
      </label>

      <button
        type="button"
        onClick={send}
        disabled={!body.trim()}
        className="flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)] disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {t.contact.send}
      </button>

      <p className="text-xs text-[var(--color-ink-soft)]">{t.contact.note}</p>
    </div>
  );
}
