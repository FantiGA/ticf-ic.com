import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h1>{t("header.title")}</h1>
      <Footer />
    </>
  );
}

export default App;
