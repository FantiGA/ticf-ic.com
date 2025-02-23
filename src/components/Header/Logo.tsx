import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <img
      src="/images/top_logo.png"
      alt={t("header.title")}
      width={406}
      height={97}
    />
  );
};

export default Logo;
