import type { Metadata } from "next";
import Prose from "../_Prose";
import { isLocale } from "@/i18n/config";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = { title: "About / من نحن" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  const page = getPages(l).about;

  return (
    <Prose title={page.title}>
      {page.body.map((s, i) => (
        <div key={i}>
          {"h" in s && s.h && <h2>{s.h}</h2>}
          <p>{s.p}</p>
        </div>
      ))}

      <h2>{page.startHere}</h2>
      <p>
        {page.links.map(([slug, label], i) => (
          <span key={slug}>
            {i > 0 && " · "}
            <a href={`/${l}/${slug}`}>{label}</a>
          </span>
        ))}
      </p>
    </Prose>
  );
}
