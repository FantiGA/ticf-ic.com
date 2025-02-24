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
      <div className="w-full h-24 md:h-32 flex justify-between items-center">
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

      {/* 菜单显示\隐藏 */}
      {isActive && <MenuContent setIsActive={setIsActive} />}

      {/* button TOP */}
      <GoToTop />
    </>
  );
};
