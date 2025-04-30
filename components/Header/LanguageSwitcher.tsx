import type { TranslationSection } from "@/types";
import { locales, type Locale } from "@/utils/i18n";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState, type FC } from "react";

interface Props {
  translations: TranslationSection<"language">;
}

export const LanguageSwitcher: FC<Props> = ({ translations }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  const changeLanguage = useCallback(
    (locale: Locale) => {
      router.push(`/${locale}`);
    },
    [router],
  );

  useEffect(() => {
    const matched = locales.find((locale) => pathname.startsWith(`/${locale}`));
    if (matched) {
      setCurrentLocale(matched);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col justify-center items-center mr-1 md:mr-4 space-y-1">
      {locales.map((locale) => (
        <button
          key={locale}
          className={`cursor-pointer text-center w-24 md:w-28 text-xl transition-colors duration-300 ${
            currentLocale === locale
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-300"
          }`}
          onClick={() => changeLanguage(locale)}
        >
          {translations[locale]}
        </button>
      ))}
    </div>
  );
};
