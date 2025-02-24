import { useTranslation } from "react-i18next";

const PrayerText = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 flex items-center justify-center h-full text-white left-1/5">
      <div className="max-w-2xl">
        <h3 className="text-xl md:text-3xl font-bold mb-4">
          {t("prayer-text.corinthians15-3")}
          <br />
          {t("prayer-text.corinthians15-4")}
        </h3>
        <div className="mt-6 text-base md:text-xl space-y-6">
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
