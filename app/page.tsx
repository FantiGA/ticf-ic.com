"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const supportedLocales = ["en", "zh-CN", "ja"];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 获取浏览器语言
    const browserLanguage = navigator.language.toLowerCase();

    // 检查是否支持完整的语言代码（如 zh-CN）
    if (supportedLocales.includes(browserLanguage)) {
      router.push(`/${browserLanguage}`);
      return;
    }

    // 检查是否支持语言前缀（如 zh）
    const languagePrefix = browserLanguage.split("-")[0];
    const matchingLocale = supportedLocales.find((locale) =>
      locale.startsWith(languagePrefix),
    );

    if (matchingLocale) {
      router.push(`/${matchingLocale}`);
    } else {
      // 默认跳转到英文版本
      router.push("/en");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <p className="text-gray-600">
          Redirecting to your preferred language...
        </p>
      </div>
    </div>
  );
}
