"use client";

import { ReactNode } from "react";
import { HtmlWrapper } from "./[locale]/HtmlWrapper";
import { Locale } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const match = pathname.match(/^\/(en|zh-CN|ja)/);
  const locale = (match ? match[1] : "en") as Locale;

  return (
    <html lang={locale}>
      <body>
        <HtmlWrapper>{children}</HtmlWrapper>
      </body>
    </html>
  );
}
