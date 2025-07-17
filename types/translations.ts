// Main translation keys type
export type TranslationKeys = {
  header: Record<string, string>;
  language: Record<string, string>;
  menu: Record<string, string>;
  chapter: Record<string, string>;
  "prayer-text": { [key: string]: string };
  welcome: { [key: string]: string };
  "our-mission": { [key: string]: string };
  "our-vision": { [key: string]: string };
  "our-core-value": { [key: string]: string };
  "our-faith-statment": { [key: string]: string };
  "worship-service-information": { [key: string]: string };
  contact: { [key: string]: string };
  "christian-links": { title: string; links: { title: string; url: string }[] };
  footer: { [key: string]: string };
};

// Translation section type
export type TranslationSection<T extends keyof TranslationKeys> =
  TranslationKeys[T];
