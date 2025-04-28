// 支持的语言列表
export const locales = ["en", "zh-CN", "ja"] as const;
export type Locale = (typeof locales)[number];

// 默认语言
export const defaultLocale: Locale = "en";

// 使用动态导入来加载翻译文件
export const loadMessages = async (locale: Locale) => {
  const messages = await import(`../locales/${locale}.json`);
  return messages.default;
};
