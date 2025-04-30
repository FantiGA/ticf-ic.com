import type { Dispatch, FC, SetStateAction } from "react";
import type { TranslationSection } from "@/types";

interface Props {
  translations: TranslationSection<"menu">;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const Menu: FC<Props> = ({ translations, isActive, setIsActive }) => {
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
        {isActive ? translations["close"] : translations["menu"]}
      </div>
    </div>
  );
};
