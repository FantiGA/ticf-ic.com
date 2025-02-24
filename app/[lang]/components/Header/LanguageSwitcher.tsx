import { useTranslation } from "@/i18n/index";
import { languages } from "@/i18n/settings";
import { type LocaleType } from "@/utils/i18n-config";
import Link from "next/link";
import type { FC } from "react";

interface LanguageSwitcherProps {
  lang: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = async ({ lang }) => {
  return (
    <div className="flex flex-col justify-center items-center mr-1 md:mr-4 space-y-1">
      {languages
        .filter((l) => lang !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link
                role="button"
                className={`cursor-pointer text-center w-24 md:w-28 text-xl transition-colors duration-300 ${
                  lang === l ? "bg-blue-500 text-white" : "hover:bg-blue-300"
                }`}
                href={`/${l}`}
              >
                {l}
              </Link>
            </span>
          );
        })}
    </div>
  );
};

export default LanguageSwitcher;
