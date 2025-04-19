import BackgroundImage from "./BackgroundImage";
import PrayerText from "./PrayerText";

export const Banner = () => {
  return (
    <div className="relative w-full h-[702px] top-24 md:top-32 mb-[128px]">
      <BackgroundImage />
      <PrayerText />
    </div>
  );
};
