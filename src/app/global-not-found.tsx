import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ display: "grid", placeItems: "center", minHeight: "100vh", fontFamily: "system-ui" }}>
        <main style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 48, margin: 0 }}>404</h1>
          <p>الصفحة غير موجودة.</p>
          <Link href="/ar" style={{ color: "#1d5fff" }}>
            العودة للرئيسية
          </Link>
        </main>
      </body>
    </html>
  );
}
