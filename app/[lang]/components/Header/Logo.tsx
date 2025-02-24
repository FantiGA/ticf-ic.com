import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <>
      <img
        className="dark:hidden"
        src="/images/top_logo.png"
        alt={t("header.title")}
        width={406}
        height={97}
      />
      <img
        className="hidden dark:block"
        src="/images/top_logo_dark.png"
        alt={t("header.title")}
        width={406}
        height={97}
      />
    </>
  );
};

export default Logo;
