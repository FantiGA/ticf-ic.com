import type { TranslationSection } from "@/types";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"welcome">;
}

export const Welcome: FC<Props> = ({ translations }) => {
  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">
        {translations["title"]}
        <br />
        {translations["title2"]}
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6">
        <p>{translations["line1"]}</p>
        <p>{translations["line2"]}</p>
        <p>
          {translations["line3"]}
          <span className="text-3xl">{translations["line4"]}</span>
        </p>
      </div>
    </div>
  );
};
