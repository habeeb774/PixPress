import type { ReactNode } from "react";
import "./globals.css";

// التخطيط الجذري يمرّر الأبناء فقط؛ وسما html/body يُبنيان في [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
