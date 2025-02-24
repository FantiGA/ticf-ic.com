import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import zhCN from "@/locales/zh-CN.json";

export const SUPPORTED_LANGUAGES = ["en", "ja", "zh-CN"] as const;
export type LocaleType = (typeof SUPPORTED_LANGUAGES)[number];

interface TranslationDictionary {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
}

const resources: Record<LocaleType, { translation: TranslationDictionary }> = {
  en: { translation: en },
  ja: { translation: ja },
  "zh-CN": { translation: zhCN },
};

const browserLanguage = navigator.language.split("-")[0] as LocaleType;

i18n.use(initReactI18next).init({
  resources,
  lng: SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
