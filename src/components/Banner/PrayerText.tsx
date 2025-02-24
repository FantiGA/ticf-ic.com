import { useTranslation } from "react-i18next";

const PrayerText = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 flex items-center justify-center h-full text-white  md:left-1/5">
      <div className="max-w-11/12 md:max-w-2xl">
        <div className="mt-6 text-xl space-y-8">
          <h3 className="text-3xl font-bold">
            {t("prayer-text.corinthians15-3")}
            <br />
            {t("prayer-text.corinthians15-4")}
          </h3>
          <div>
            <p>{t("prayer-text.corinthians15")}</p>
          </div>
          <div>
            <p>{t("prayer-text.line1")}</p>
            <p>{t("prayer-text.line2")}</p>
            <p>{t("prayer-text.line3")}</p>
          </div>
          <div>
            <p>{t("prayer-text.line4")}</p>
            <p>{t("prayer-text.line5")}</p>
            <p>{t("prayer-text.line6")}</p>
            <p>{t("prayer-text.line7")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerText;
