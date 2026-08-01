"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export default function AdSenseBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: {
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-4289613732718863";
  const adSlot = slot?.trim() || process.env.NEXT_PUBLIC_ADSENSE_SLOT?.trim() || "";

  useEffect(() => {
    if (!adSlot) return;

    const target = document.getElementById("adsense-banner");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [adSlot]);

  useEffect(() => {
    if (!isVisible || !adSlot) return;

    const scriptId = "adsbygoogle-js";
    const pushAd = () => {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    };

    if (document.getElementById(scriptId)) {
      pushAd();
      return;
    }

    try {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.defer = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.crossOrigin = "anonymous";
      script.onload = pushAd;
      document.head.appendChild(script);
    } catch {
      // ignore
    }
  }, [clientId, isVisible, adSlot]);

  if (!adSlot) return null;

  return (
    <div id="adsense-banner" className={`mx-auto my-8 w-full max-w-4xl px-5 ${className}`}>
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-3 shadow-sm">
        {!isVisible ? (
          <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)]/70">
            <div className="h-4 w-28 animate-pulse rounded-full bg-[var(--color-line)]" />
          </div>
        ) : (
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", minHeight: 280 }}
            data-ad-client={clientId}
            data-ad-slot={adSlot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        )}
      </div>
    </div>
  );
}
