"use client";

import { useEffect } from "react";

export default function AdSenseBanner({
  slot,
  format = "auto",
  responsive = true,
}: {
  slot: string;
  format?: string;
  responsive?: boolean;
}) {
  useEffect(() => {
    try {
      const scriptId = "adsbygoogle-js";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4289613732718863";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="mx-auto my-8 flex w-full max-w-4xl justify-center px-5">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: 280 }}
        data-ad-client="ca-pub-4289613732718863"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
