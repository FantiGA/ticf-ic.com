import { useTranslation } from "react-i18next";
import { RoundedTitle } from "app/[lang]/components/common";

export const OurCoreValue = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{t("our-core-value.title")}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center flex flex-col md:flex-row justify-between items-center">
        <div>
          <img
            src="/images/img03.png"
            alt={t("our-core-value.title")}
            width={373}
            height={366}
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-4xl">{t("our-core-value.faith")}</h4>
            <p>{t("our-core-value.line1")}</p>
            <p>{t("our-core-value.line2")}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-4xl">{t("our-core-value.hope")}</h4>
            <p>{t("our-core-value.line3")}</p>
            <p>{t("our-core-value.line4")}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-4xl">{t("our-core-value.love")}</h4>
            <p>{t("our-core-value.line5")}</p>
            <p>{t("our-core-value.line6")}</p>
            <p>{t("our-core-value.line7")}</p>
            <p>{t("our-core-value.line8")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
