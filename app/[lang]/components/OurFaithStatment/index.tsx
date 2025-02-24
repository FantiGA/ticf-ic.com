import { useTranslation } from "react-i18next";
import { RoundedTitle } from "app/[lang]/components/common";

export const OurFaithStatment = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{t("our-faith-statment.title")}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6">
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.the-scriptures")}
          </h4>
          <p>{t("our-faith-statment.line1")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.god")}
          </h4>
          <p>{t("our-faith-statment.line2")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.jesus-christ")}
          </h4>
          <p>{t("our-faith-statment.line3")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.the-holy-spirit")}
          </h4>
          <p>{t("our-faith-statment.line4")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.the-condition-of-people")}
          </h4>
          <p>{t("our-faith-statment.line5")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.the-work-of-christ")}
          </h4>
          <p>{t("our-faith-statment.line6")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.salvation")}
          </h4>
          <p>{t("our-faith-statment.line7")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.the-church")}
          </h4>
          <p>{t("our-faith-statment.line8")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {t("our-faith-statment.eternal-state")}
          </h4>
          <p>{t("our-faith-statment.line9")}</p>
        </div>
      </div>
    </div>
  );
};
