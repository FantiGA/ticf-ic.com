import { useState, type FC } from "react";
import { MenuContent } from "./MenuContent";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { GoToTop } from "./GoToTop";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import type { TranslationKeys, TranslationSection } from "@/types";

type Translations = {
  [K in keyof TranslationKeys]: TranslationSection<K>;
};

interface Props {
  translations: Translations;
}

export const Header: FC<Props> = ({ translations }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="fixed w-full h-24 md:h-32 bg-white dark:bg-background flex justify-between items-center border-b border-normal-black dark:border-foreground z-999">
        <div className="ml-1 md:ml-9 mr-2 md:mr-0">
          <Logo translations={translations["header"]} />
        </div>
        <div className="mr-1 md:mr-10 flex justify-between items-center">
          <div>
            <LanguageSwitcher translations={translations["language"]} />
          </div>
          <div>
            <Menu
              translations={translations["menu"]}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
        </div>
      </div>

      {isActive && (
        <MenuContent
          translations={translations["chapter"]}
          setIsActive={setIsActive}
        />
      )}

      <GoToTop />
    </>
  );
};
