import type { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface MenuContentProps {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const MenuContent: FC<MenuContentProps> = ({ setIsActive }) => {
  const { t } = useTranslation();

  const scrollToTarget = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }

    setIsActive(false);
  };

  return (
    <div className="w-full overflow-hidden h-[426px] bg-white absolute top-[130px] z-[9999] font-semibold transition-all duration-300">
      <ul className="p-0 m-0">
        <li
          className="w-full h-16 text-center text-lg border-t border-black flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-mission")}
        >
          {t("chapter.our-mission")}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-t border-black flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-vision")}
        >
          {t("chapter.our-vision")}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-t border-black flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-core-value")}
        >
          {t("chapter.our-core-value")}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-t border-black flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-faith-statment")}
        >
          {t("chapter.our-faith-statment")}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-t border-black flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#worship-service-information")}
        >
          {t("chapter.worship-service-information")}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-t border-black flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#contact")}
        >
          {t("chapter.contact")}
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
