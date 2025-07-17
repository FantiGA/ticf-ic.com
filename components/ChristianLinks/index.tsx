import type { TranslationSection } from "@/types";
import { RoundedTitle } from "@/components";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"christian-links">;
}

export const ChristianLinks: FC<Props> = ({ translations }) => {
  return (
    <div
      id="christian-links"
      className="flex flex-col justify-center pt-8 pb-6 space-y-6"
    >
      <h3 className="text-center text-2xl md:text-4xl">
        <RoundedTitle>{translations["title"]}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {translations["links"].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-normal-blue hover:text-light-blue underline text-lg transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
