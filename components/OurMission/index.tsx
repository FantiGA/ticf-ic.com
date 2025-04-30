import { RoundedTitle } from "@/components/common";
import type { TranslationSection } from "@/types";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"our-mission">;
}

export const OurMission: FC<Props> = ({ translations }) => {
  return (
    <div
      id="our-mission"
      className="flex flex-col justify-center pt-8 pb-10 space-y-9"
    >
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{translations["title"]}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <p>{translations["line1"]}</p>
        <p>{translations["line2"]}</p>
        <p>{translations["line3"]}</p>
        <p>{translations["line4"]}</p>
      </div>
    </div>
  );
};
