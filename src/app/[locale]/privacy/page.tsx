import type { Metadata } from "next";
import Prose from "../_Prose";
import { isLocale } from "@/i18n/config";
import { getPages } from "@/i18n/pages";

export const metadata: Metadata = { title: "Privacy / سياسة الخصوصية" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "ar";
  const page = getPages(l).privacy;

  return (
    <Prose title={page.title}>
      {page.sections.map((s, i) => (
        <div key={i}>
          {s.h && <h2>{s.h}</h2>}
          <p>{s.p}</p>
        </div>
      ))}
    </Prose>
  );
}
