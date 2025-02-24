import { useTranslation } from "react-i18next";
import { RoundedTitle } from "@/components/common";

export const OurVision = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{t("our-vision.title")}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <div className="space-y-4">
          <h4 className="text-4xl">{t("our-vision.gathering")}</h4>
          <p>{t("our-vision.line1")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl">{t("our-vision.growing")}</h4>
          <p>{t("our-vision.line2")}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl">{t("our-vision.going")}</h4>
          <p>{t("our-vision.line3")}</p>
        </div>
      </div>
    </div>
  );
};
