import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Convert locale codes to match file names
  const localeMap: Record<string, string> = {
    zh: "zh-CN",
    "zh-CN": "zh-CN",
    ja: "ja",
    en: "en",
  };

  const currentLocale = localeMap[locale || "en"] || "en";

  return {
    locale: currentLocale,
    messages: (await import(`../locales/${currentLocale}.json`)).default,
  };
});
