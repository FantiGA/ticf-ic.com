"use client";

import ClientPage from "./ClientPage";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePathname } from "next/navigation";
import en from "@/locales/en.json";
import zhCN from "@/locales/zh-CN.json";
import ja from "@/locales/ja.json";

const translations = {
  en,
  "zh-CN": zhCN,
  ja,
};

export default function Page() {
  const pathname = usePathname();
  const match = pathname.match(/^\/(en|zh-CN|ja)/);
  const locale = match ? match[1] : "en";
  const t =
    translations[locale as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <ClientPage
          initialTranslations={{
            title: t.header.title,
            description: t.header.description,
            image: "/images/og-image.jpg",
          }}
        />
      </div>
    </div>
  );
}
