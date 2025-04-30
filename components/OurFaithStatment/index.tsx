import { RoundedTitle } from "@/components/common";
import type { TranslationSection } from "@/types";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"our-faith-statment">;
}

export const OurFaithStatment: FC<Props> = ({ translations }) => {
  return (
    <div
      id="our-faith-statment"
      className="flex flex-col justify-center pt-8 pb-10 space-y-9"
    >
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{translations["title"]}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6">
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {translations["the-scriptures"]}
          </h4>
          <p>{translations["line1"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">{translations["god"]}</h4>
          <p>{translations["line2"]}</p>
          <p>{translations["line3"]}</p>
          <p>{translations["line4"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {translations["jesus-christ"]}
          </h4>
          <p>{translations["line5"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {translations["the-holy-spirit"]}
          </h4>
          <p>{translations["line6"]}</p>
          <p>{translations["line7"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {translations["the-condition-of-people"]}
          </h4>
          <p>{translations["line8"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {translations["the-work-of-christ"]}
          </h4>
          <p>{translations["line9"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">{translations["salvation"]}</h4>
          <p>{translations["line10"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">{translations["the-church"]}</h4>
          <p>{translations["line11"]}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-4xl text-center">
            {translations["eternal-state"]}
          </h4>
          <p>{translations["line12"]}</p>
        </div>
      </div>
    </div>
  );
};
