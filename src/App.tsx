import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "@/utils/i18n-config";
import { Banner, Footer, Header, Welcome } from "@/components";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("header.title");

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
      <Footer />
    </>
  );
}

export default App;
