import type { TranslationSection } from "@/types";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"prayer-text">;
}

export const PrayerText: FC<Props> = ({ translations }) => {
  return (
    <div className="relative z-10 flex items-center justify-center h-full text-white lg:left-1/8 xl:left-1/5">
      <div className="max-w-11/12 md:max-w-4xl">
        <div className="mt-6 text-xl space-y-8">
          <h3 className="text-3xl font-bold">
            {translations["corinthians15-3"]}
            <br />
            {translations["corinthians15-4"]}
          </h3>
          <div>
            <p>{translations["corinthians15"]}</p>
          </div>
          <div>
            <p>{translations["line1"]}</p>
            <p>{translations["line2"]}</p>
            <p>{translations["line3"]}</p>
          </div>
          <div>
            <p>{translations["line4"]}</p>
            <p>{translations["line5"]}</p>
            <p>{translations["line6"]}</p>
            <p>{translations["line7"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
