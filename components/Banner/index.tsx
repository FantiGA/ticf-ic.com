import type { TranslationSection } from "@/types";
import type { FC } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { PrayerText } from "./PrayerText";

interface Props {
  translations: TranslationSection<"prayer-text">;
}

export const Banner: FC<Props> = ({ translations }) => {
  return (
    <div className="relative w-full h-[702px] top-24 md:top-32 mb-[128px]">
      <BackgroundImage />
      <PrayerText translations={translations} />
    </div>
  );
};
