import { useTranslation } from "react-i18next";
import { RoundedTitle } from "@/components/common";

export const OurMission = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{t("our-mission.title")}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <p>{t("our-mission.line1")}</p>
        <p>{t("our-mission.line2")}</p>
        <p>{t("our-mission.line3")}</p>
        <p>{t("our-mission.line4")}</p>
      </div>
    </div>
  );
};
