import clsx from "clsx";
import type { FC, JSX } from "react";

interface RoundedTitleProps {
  children: JSX.Element | string;
  isBlue?: boolean;
}

export const RoundedTitle: FC<RoundedTitleProps> = ({ children, isBlue }) => (
  <span
    className={clsx(
      "inline-block text-3xl w-96 h-14 leading-14 rounded-full font-normal align-middle",
      isBlue ? "bg-white text-normal-blue" : "bg-normal-blue text-white",
    )}
  >
    {children}
  </span>
);
