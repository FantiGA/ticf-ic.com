import { SUPPORTED_LANGUAGES, type LocaleType } from "@/utils/i18n-config";
import { useTranslation } from "react-i18next";

const LocaleSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: LocaleType) => {
    i18n.changeLanguage(lang);
    console.log("lang", lang);
    console.log(t("header.title"));
  };
  return (
    <div className="drop visible opacity withBG bgw">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ja")}>Japanese</button>

      {SUPPORTED_LANGUAGES.map((locale) => (
        <div
          key={locale}
          className={`option ${locale === i18n.language ? "active placeholder" : "option_topnone"}`}
          data-value={locale === i18n.language ? "placeholder" : "wow"}
        >
          <button onClick={() => changeLanguage(locale)}>{locale}</button>
        </div>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
