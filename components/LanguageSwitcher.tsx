"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "zh-CN", name: "中文" },
  { code: "ja", name: "日本語" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    // 从 URL 中获取当前语言
    const match = pathname.match(/^\/(en|zh-CN|ja)/);
    if (match) {
      setCurrentLocale(match[1]);
    }
  }, [pathname]);

  const handleLanguageChange = useCallback(
    (locale: string) => {
      router.push(`/${locale}`);
    },
    [router],
  );

  return (
    <div className="flex gap-2">
      {languages.map(({ code, name }) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code)}
          className={`px-3 py-1 text-sm rounded ${
            currentLocale === code
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
