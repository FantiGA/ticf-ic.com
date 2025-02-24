import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center mt-8 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">{t("welcome.title")}</h3>
      <div className="mx-[15%] text-lg space-y-6">
        <p>{t("welcome.line1")}</p>
        <p>{t("welcome.line2")}</p>
        <p>
          {t("welcome.line3")}
          <span className="text-3xl">{t("welcome.line4")}</span>
        </p>
      </div>
    </div>
  );
};
