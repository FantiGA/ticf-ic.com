import "server-only";
import { i18n, type LocaleType } from "@/i18n-config";

type DictionaryType = Record<string, Record<string, string>>;

const loadDictionary = (locale: LocaleType) =>
  import(`../locales/${locale}.json`).then((module) => module.default);

const dictionaries: Record<LocaleType, () => Promise<DictionaryType>> =
  Object.fromEntries(
    i18n.locales.map((locale) => [locale, () => loadDictionary(locale)]),
  ) as Record<LocaleType, () => Promise<DictionaryType>>;

export const getDictionary = async (locale: LocaleType) =>
  dictionaries[locale]?.() ?? dictionaries.en();
