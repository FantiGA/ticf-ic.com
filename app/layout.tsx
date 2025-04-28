"use client";

import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { HtmlWrapper } from "./[locale]/HtmlWrapper";
import { Locale } from "@/utils/i18n";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const match = pathname.match(/^\/(en|zh-CN|ja)/);
  const locale = (match ? match[1] : "en") as Locale;

  return (
    <html lang={locale}>
      <body>
        <HtmlWrapper>
          <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </div>
        </HtmlWrapper>
      </body>
    </html>
  );
}
