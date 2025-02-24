import { useTranslation } from "react-i18next";
import { RoundedTitle } from "@/components/common";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 space-y-9">
      <h3 className="text-center text-2xl md:text-5xl">
        <RoundedTitle>{t("contact.title")}</RoundedTitle>
      </h3>
      <div className="mx-[5%] md:mx-[15%] text-lg space-y-6 text-center">
        <div className="space-y-4">
          <h4 className="text-4xl">
            <a href={`mailto:${t("contact.email")}`} target="_blank">
              {t("contact.email")}
            </a>
          </h4>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/img04.png"
            alt={t("contact.title")}
            width={728}
            height={490}
          />
        </div>
      </div>
    </div>
  );
};
