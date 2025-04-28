"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import en from "@/locales/en.json";
import zhCN from "@/locales/zh-CN.json";
import ja from "@/locales/ja.json";

const translations = {
  en,
  "zh-CN": zhCN,
  ja,
};

export default function HtmlWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const match = pathname.match(/^\/(en|zh-CN|ja)/);
  const locale = match ? match[1] : "en";
  const t =
    translations[locale as keyof typeof translations] || translations.en;

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/x-icon" rel="icon" href="/favicon.ico" />
        <title>{t.header.title}</title>
        <meta name="description" content={t.header.description} />
        <meta name="keywords" content={t.header.keywords} />
        <meta name="author" content={t.header.title} />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
