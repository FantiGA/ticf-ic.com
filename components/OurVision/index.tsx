import { RoundedTitle } from "@/components/common";
import type { TranslationSection } from "@/types";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"our-vision">;
}

export const OurVision: FC<Props> = ({ translations }) => {
  return (
    <div
      id="our-vision"
      className="flex flex-col justify-center pt-8 pb-10 space-y-9"
    >
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{translations["title"]}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <div className="space-y-4">
          <h4 className="text-4xl">{translations["gathering"]}</h4>
          <p>{translations["line1"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl">{translations["growing"]}</h4>
          <p>{translations["line2"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl">{translations["going"]}</h4>
          <p>{translations["line3"]}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/img022.png"
          alt={translations["title"]}
          width={400}
          height={188}
        />
      </div>
    </div>
  );
};
