import type { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface MenuProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<MenuProps> = ({ isActive, setIsActive }) => {
  const { t } = useTranslation();

  return (
    <div className="cursor-pointer" onClick={() => setIsActive(!isActive)}>
      <div className="group flex flex-col items-center w-14 h-12">
        <span
          className={`block w-13 h-[1px] bg-black dark:bg-white transition-transform duration-300 ${
            isActive ? "translate-y-[19px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-13 h-[1px] bg-black dark:bg-white mt-[18px] transition-opacity duration-300 ${
            isActive ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-13 h-[1px] bg-black dark:bg-white mt-[18px] transition-transform duration-300 ${
            isActive ? "-translate-y-[19px] -rotate-45" : ""
          }`}
        />
      </div>

      <div className="text-base font-bold text-center pt-1.5">
        {isActive ? t("menu.close") : t("menu.menu")}
      </div>
    </div>
  );
};

export default Menu;
