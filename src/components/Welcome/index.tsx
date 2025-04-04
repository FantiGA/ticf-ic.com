import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">
        {t("welcome.title")}
        <br />
        {t("welcome.title2")}
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6">
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
