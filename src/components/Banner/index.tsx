import BackgroundImage from "./BackgroundImage";
import PrayerText from "./PrayerText";

export const Banner = () => {
  return (
    <div className="relative w-full h-[830px] top-24 md:top-32">
      <BackgroundImage />
      <PrayerText />
    </div>
  );
};
