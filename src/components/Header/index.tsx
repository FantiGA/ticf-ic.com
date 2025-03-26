import { useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import GoToTop from "./GoToTop";
import Menu from "./Menu";
import MenuContent from "./MenuContent";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="fixed w-full h-24 md:h-32 bg-white dark:bg-background flex justify-between items-center border-b border-normal-black dark:border-foreground z-10">
        <div className="ml-1 md:ml-9 mr-2 md:mr-0">
          <Logo />
        </div>
        <div className="mr-1 md:mr-10 flex justify-between items-center">
          <div>
            <LanguageSwitcher />
          </div>
          <div>
            <Menu isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
      </div>

      {isActive && <MenuContent setIsActive={setIsActive} />}

      <GoToTop />
    </>
  );
};
