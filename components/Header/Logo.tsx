import type { TranslationSection } from "@/types";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"header">;
}

export const Logo: FC<Props> = ({ translations }) => {
  return (
    <>
      <Image
        className="dark:hidden"
        src="/images/top_logo.png"
        alt={translations["title"]}
        width={406}
        height={97}
      />
      <Image
        className="hidden dark:block"
        src="/images/top_logo_dark.png"
        alt={translations["title"]}
        width={406}
        height={97}
      />
    </>
  );
};
