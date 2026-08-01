import type { NextConfig } from "next";

/** نطاقات Google AdSense اللازمة لتحميل السكربت وعرض الإعلانات وقياساتها */
const adsense = {
  script: [
    "https://pagead2.googlesyndication.com",
    "https://partner.googleadservices.com",
    "https://tpc.googlesyndication.com",
    "https://www.googletagservices.com",
    "https://adservice.google.com",
    "https://securepubads.g.doubleclick.net",
    "https://fundingchoicesmessages.google.com",
  ],
  img: [
    "https://*.googlesyndication.com",
    "https://*.g.doubleclick.net",
    "https://*.doubleclick.net",
    "https://www.google.com",
  ],
  connect: [
    "https://*.googlesyndication.com",
    "https://*.g.doubleclick.net",
    "https://*.doubleclick.net",
    "https://ep1.adtrafficquality.google",
    "https://ep2.adtrafficquality.google",
  ],
  frame: [
    "https://*.googlesyndication.com",
    "https://*.doubleclick.net",
    "https://www.google.com",
    "https://fundingchoicesmessages.google.com",
  ],
};

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${adsense.script.join(" ")}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' blob: data: ${adsense.img.join(" ")}`,
  "font-src 'self' data:",
  `connect-src 'self' blob: ${adsense.connect.join(" ")}`,
  `frame-src 'self' ${adsense.frame.join(" ")}`,
  "worker-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};
export default nextConfig;
