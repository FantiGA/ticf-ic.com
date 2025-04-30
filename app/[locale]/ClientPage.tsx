"use client";

import { useState } from "react";
import { TranslationKeys, TranslationSection } from "@/types";
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

type ClientPageProps = {
  initialTranslations: {
    [K in keyof TranslationKeys]: TranslationSection<K>;
  };
};

export default function ClientPage({ initialTranslations }: ClientPageProps) {
  const [translations] = useState(initialTranslations);

  return (
    <>
      <Header translations={translations} />
      <Banner translations={translations["prayer-text"]} />
      <Welcome translations={translations["welcome"]} />
      <OurMission translations={translations["our-mission"]} />
      <OurVision translations={translations["our-vision"]} />
      <OurCoreValue translations={translations["our-core-value"]} />
      <OurFaithStatment translations={translations["our-faith-statment"]} />
      <WorshipServiceInformation
        translations={translations["worship-service-information"]}
      />
      <Contact translations={translations["contact"]} />
      <Footer translations={translations["footer"]} />
    </>
  );
}
