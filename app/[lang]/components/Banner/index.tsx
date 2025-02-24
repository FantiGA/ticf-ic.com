import BackgroundImage from "./BackgroundImage";
import PrayerText from "./PrayerText";

export const Banner = () => {
  return (
    <div className="relative w-full h-[830px] overflow-hidden">
      <BackgroundImage />
      <PrayerText />
    </div>
  );
};
