import { RoundedTitle } from "@/components/common";
import type { TranslationSection } from "@/types";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"worship-service-information">;
}

export const WorshipServiceInformation: FC<Props> = ({ translations }) => {
  return (
    <div
      id="worship-service-information"
      className="flex flex-col justify-center pt-8 pb-10 space-y-9 bg-light-blue"
    >
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle isBlue={true}>{translations["title"]}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <div className="space-y-4">
          <h4 className="text-4xl">{translations["ticf-ueno-name"]}</h4>
          <p>{translations["ticf-ueno-time"]}</p>
          <p>{translations["ticf-ueno-address-line1"]}</p>
          <p>{translations["ticf-ueno-address-line2"]}</p>
          <div className="flex justify-center">
            <iframe
              src={translations["ticf-ueno-map"]}
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl">{translations["ticf-ikebukuro-name"]}</h4>
          <p>{translations["ticf-ikebukuro-time"]}</p>
          <p>{translations["ticf-ikebukuro-address-line1"]}</p>
          <p>{translations["ticf-ikebukuro-address-line2"]}</p>
          <div className="flex justify-center">
            <iframe
              src={translations["ticf-ikebukuro-map"]}
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
