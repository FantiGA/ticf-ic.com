import "server-only";

const dictionaries = {
  en: () =>
    import("../public/locales/en.json").then((module) => module.default),
  ja: () =>
    import("../public/locales/ja.json").then((module) => module.default),
  "zh-CN": () =>
    import("../public/locales/zh-CN.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "ja" | "zh-CN") =>
  dictionaries[locale]();
