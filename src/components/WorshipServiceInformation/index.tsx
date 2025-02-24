import { useTranslation } from "react-i18next";
import { RoundedTitle } from "@/components/common";

export const WorshipServiceInformation = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9 bg-light-blue">
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle isBlue={true}>
          {t("worship-service-information.title")}
        </RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <div className="space-y-4">
          <h4 className="text-4xl">
            {t("worship-service-information.ticf-ueno-name")}
          </h4>
          <p>{t("worship-service-information.ticf-ueno-time")}</p>
          <p>{t("worship-service-information.ticf-ueno-address-line1")}</p>
          <p>{t("worship-service-information.ticf-ueno-address-line2")}</p>
          <div className="flex justify-center">
            <iframe
              src={t("worship-service-information.ticf-ueno-map")}
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl">
            {t("worship-service-information.ticf-ikebukuro-name")}
          </h4>
          <p>{t("worship-service-information.ticf-ikebukuro-time")}</p>
          <p>{t("worship-service-information.ticf-ikebukuro-address-line1")}</p>
          <p>{t("worship-service-information.ticf-ikebukuro-address-line2")}</p>
          <div className="flex justify-center">
            <iframe
              src={t("worship-service-information.ticf-ikebukuro-map")}
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
