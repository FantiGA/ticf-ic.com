import type { Dispatch, FC, SetStateAction } from "react";
import type { TranslationSection } from "@/types";

interface Props {
  translations: TranslationSection<"chapter">;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const MenuContent: FC<Props> = ({ translations, setIsActive }) => {
  const scrollToTarget = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      const offset = window.innerWidth >= 768 ? 127 : 95;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
      setIsActive(false);
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-background fixed top-24 md:top-32 z-[9999] font-semibold transition-all duration-300">
      <ul className="p-0 m-0">
        <li
          className="w-full h-16 text-center text-lg border-b border-black dark:border-foreground flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-mission")}
        >
          {translations["our-mission"]}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-b border-black dark:border-foreground flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-vision")}
        >
          {translations["our-vision"]}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-b border-black dark:border-foreground flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-core-value")}
        >
          {translations["our-core-value"]}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-b border-black dark:border-foreground flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#our-faith-statment")}
        >
          {translations["our-faith-statment"]}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-b border-black dark:border-foreground flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#worship-service-information")}
        >
          {translations["worship-service-information"]}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-b border-black dark:border-foreground flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#contact")}
        >
          {translations["contact"]}
        </li>
        <li
          className="w-full h-16 text-center text-lg border-b border-black dark:border-foreground flex justify-center items-center cursor-pointer"
          onClick={() => scrollToTarget("#christian-links")}
        >
          {translations["christian-links"]}
        </li>
      </ul>
    </div>
  );
};
