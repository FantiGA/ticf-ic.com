"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { loadMessages } from "@/utils/i18n";
import { Locale } from "@/utils/i18n";

export function HtmlWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const match = pathname.match(/^\/(en|zh-CN|ja)/);
  const locale = (match ? match[1] : "en") as Locale;
  const [t, setT] = useState<Awaited<ReturnType<typeof loadMessages>> | null>(
    null,
  );

  useEffect(() => {
    loadMessages(locale).then(setT);
  }, [locale]);

  if (!t) {
    return <>Loading...</>;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L21FKDK6YT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L21FKDK6YT');
        `}
      </Script>
      {children}
    </>
  );
}
