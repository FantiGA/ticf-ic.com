import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mt-10 md:mt-24 mb-4">
      <p className="text-xs">
        {`${t("footer.copyright.line1")}${new Date().getFullYear()} ${t("footer.copyright.line2")}`}
      </p>
    </div>
  );
};
