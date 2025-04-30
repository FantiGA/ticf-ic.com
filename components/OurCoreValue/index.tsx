import { RoundedTitle } from "@/components/common";
import type { TranslationSection } from "@/types";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"our-core-value">;
}

export const OurCoreValue: FC<Props> = ({ translations }) => {
  return (
    <div
      id="our-core-value"
      className="flex flex-col justify-center pt-8 pb-10 space-y-9"
    >
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{translations["title"]}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center flex flex-col md:flex-row justify-between items-center">
        <div>
          <Image
            src="/images/img03.png"
            alt={translations["title"]}
            width={373}
            height={366}
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-4xl">{translations["faith"]}</h4>
            <p>{translations["line1"]}</p>
            <p>{translations["line2"]}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-4xl">{translations["hope"]}</h4>
            <p>{translations["line3"]}</p>
            <p>{translations["line4"]}</p>
            <p>{translations["line5"]}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-4xl">{translations["love"]}</h4>
            <p>{translations["line6"]}</p>
            <p>{translations["line7"]}</p>
          </div>
          <div className="space-y-4">
            <br />
            <p>{translations["line8"]}</p>
            <p>{translations["line9"]}</p>
            <p>{translations["line10"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
