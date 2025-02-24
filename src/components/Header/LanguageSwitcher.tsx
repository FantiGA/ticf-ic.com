import { type LocaleType } from "@/utils/i18n-config";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: LocaleType) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-col justify-center items-center mr-1 md:mr-4 space-y-1">
      <button
        className={`cursor-pointer text-center w-24 md:w-28 text-xl transition-colors duration-300 ${
          i18n.language === "en"
            ? "bg-blue-500 text-white"
            : "hover:bg-blue-300"
        }`}
        onClick={() => changeLanguage("en")}
      >
        {t("language.en")}
      </button>
      <button
        className={`cursor-pointer text-center w-24 md:w-28 text-xl transition-colors duration-300 ${
          i18n.language === "ja"
            ? "bg-blue-500 text-white"
            : "hover:bg-blue-300"
        }`}
        onClick={() => changeLanguage("ja")}
      >
        {t("language.ja")}
      </button>
      <button
        className={`cursor-pointer text-center w-24 md:w-28 text-xl transition-colors duration-300 ${
          i18n.language === "zh-CN"
            ? "bg-blue-500 text-white"
            : "hover:bg-blue-300"
        }`}
        onClick={() => changeLanguage("zh-CN")}
      >
        {t("language.zh-CN")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
