import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "@/utils/i18n-config";
import {
  Banner,
  Contact,
  Footer,
  Header,
  OurCoreValue,
  OurFaithStatment,
  OurMission,
  OurVision,
  Welcome,
  WorshipServiceInformation,
} from "@/components";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("header.title");

    const metaKeywords = document.querySelector(
      'meta[name="keywords"]',
    ) as HTMLMetaElement;
    if (metaKeywords) {
      metaKeywords.content = t("header.keywords");
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = t("header.keywords");
      document.head.appendChild(meta);
    }

    const metaDescription = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = t("header.description");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = t("header.description");
      document.head.appendChild(meta);
    }
  }, [t, i18n.language]);

  return (
    <>
      <Header />
      <Banner />
      <Welcome />
      <OurMission />
      <OurVision />
      <OurCoreValue />
      <OurFaithStatment />
      <WorshipServiceInformation />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
