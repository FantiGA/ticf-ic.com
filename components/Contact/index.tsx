import type { TranslationSection } from "@/types";
import Image from "next/image";
import { RoundedTitle } from "@/components";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"contact">;
}

export const Contact: FC<Props> = ({ translations }) => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center pt-8 pb-10 space-y-9"
    >
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{translations["title"]}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <div className="space-y-4">
          <h4 className="text-4xl">
            <a href={`mailto:${translations["email"]}`} target="_blank">
              {translations["email"]}
            </a>
          </h4>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/img04.png"
            alt={translations["title"]}
            width={728}
            height={490}
          />
        </div>
      </div>
    </div>
  );
};
