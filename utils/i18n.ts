// Supported languages list - can be easily extended by adding files to locales directory
// To add a new language:
// 1. Add the locale code to this array (e.g., "fr", "de", "ko")
// 2. Create a corresponding JSON file in the locales directory (e.g., "fr.json", "de.json", "ko.json")
// 3. The loadMessages function will automatically pick up the new locale file
export const locales = ["en", "ja", "zh-CN"] as const;
export type Locale = (typeof locales)[number];

// Default language
export const defaultLocale: Locale = "en";

// Helper function to check if a locale is supported
export const isLocaleSupported = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

// Dynamic message loader with fallback
// This function dynamically imports locale files, making it easy to add new languages
export const loadMessages = async (locale: Locale) => {
  // Validate locale first
  if (!isLocaleSupported(locale)) {
    console.warn(
      `Unsupported locale: ${locale}, falling back to ${defaultLocale}`,
    );
    locale = defaultLocale;
  }

  try {
    // Dynamic import - will work for any locale file in the locales directory
    const messages = await import(`../locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.warn(
      `Failed to load messages for locale: ${locale}, falling back to ${defaultLocale}`,
      error,
    );
    try {
      // Fallback to default locale
      const fallbackMessages = await import(`../locales/${defaultLocale}.json`);
      return fallbackMessages.default;
    } catch (fallbackError) {
      console.error(
        `Failed to load fallback messages for locale: ${defaultLocale}`,
        fallbackError,
      );
      // Return empty object as last resort
      return {};
    }
  }
};

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale,
  }));
}
