import { useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import GoToTop from "./GoToTop";
import Menu from "./Menu";
import MenuContent from "./MenuContent";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="w-full h-[130px] flex justify-between items-center">
        <div className="ml-9">
          <Logo />
        </div>
        <div className="mr-10 flex justify-between items-center">
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

export default Header;
