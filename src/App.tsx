import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "@/utils/i18n-config";

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
      <Footer />
    </>
  );
}

export default App;
