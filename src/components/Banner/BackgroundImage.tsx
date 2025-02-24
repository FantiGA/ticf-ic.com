import { useState, useEffect } from "react";
import clsx from "clsx";

const BackgroundImage = () => {
  const [index, setIndex] = useState(0);

  const pcImages = ["bg-banner01", "bg-banner02"];
  const spImages = ["bg-banner01s", "bg-banner02s"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={clsx(
          "absolute h-[830px] block md:hidden inset-0 bg-fixed bg-cover bg-center transition-opacity duration-1000",
          spImages[index],
        )}
      />
      <div
        className={clsx(
          "absolute h-[830px] hidden md:block inset-0 bg-fixed bg-cover bg-center transition-opacity duration-1000",
          pcImages[index],
        )}
      />
    </>
  );
};

export default BackgroundImage;
