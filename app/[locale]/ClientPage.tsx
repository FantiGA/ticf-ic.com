"use client";

import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { TranslationKeys, TranslationSection } from "@/types/translations";

type ClientPageProps = {
  initialTranslations: {
    [K in keyof TranslationKeys]: TranslationSection<K>;
  };
};

export default function ClientPage({ initialTranslations }: ClientPageProps) {
  const [translations] = useState(initialTranslations);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              {translations.header.title}
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#welcome"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {translations.chapter["our-mission"]}
                  </a>
                </li>
                <li>
                  <a
                    href="#our-mission"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {translations.chapter["our-mission"]}
                  </a>
                </li>
                <li>
                  <a
                    href="#our-vision"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {translations.chapter["our-vision"]}
                  </a>
                </li>
                <li>
                  <a
                    href="#our-core-value"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {translations.chapter["our-core-value"]}
                  </a>
                </li>
                <li>
                  <a
                    href="#our-faith-statment"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {translations.chapter["our-faith-statment"]}
                  </a>
                </li>
                <li>
                  <a
                    href="#worship-service-information"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {translations.chapter["worship-service-information"]}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {translations.chapter.contact}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>

        {/* Welcome Section */}
        <section id="welcome" className="mb-12">
          <h1 className="text-3xl font-bold mb-4">
            {translations.welcome.title}
          </h1>
          <p className="text-lg mb-4">{translations.welcome.line1}</p>
          <p className="text-lg">{translations.welcome.line2}</p>
        </section>

        {/* Our Mission Section */}
        <section id="our-mission" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {translations["our-mission"].title}
          </h2>
          <p className="text-lg mb-2">{translations["our-mission"].line1}</p>
          <p className="text-lg mb-2">{translations["our-mission"].line2}</p>
          <p className="text-lg mb-2">{translations["our-mission"].line3}</p>
          <p className="text-lg italic">{translations["our-mission"].line4}</p>
        </section>

        {/* Our Vision Section */}
        <section id="our-vision" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {translations["our-vision"].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-vision"].gathering}
              </h3>
              <p>{translations["our-vision"].line1}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-vision"].growing}
              </h3>
              <p>{translations["our-vision"].line2}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-vision"].going}
              </h3>
              <p>{translations["our-vision"].line3}</p>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section id="our-core-value" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {translations["our-core-value"].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-core-value"].faith}
              </h3>
              <p className="mb-2">{translations["our-core-value"].line1}</p>
              <p>{translations["our-core-value"].line2}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-core-value"].hope}
              </h3>
              <p className="mb-2">{translations["our-core-value"].line3}</p>
              <p className="mb-2">{translations["our-core-value"].line4}</p>
              <p>{translations["our-core-value"].line5}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-core-value"].love}
              </h3>
              <p className="mb-2">{translations["our-core-value"].line6}</p>
              <p className="mb-2">{translations["our-core-value"].line7}</p>
              <p className="mb-2">{translations["our-core-value"].line8}</p>
              <p className="mb-2">{translations["our-core-value"].line9}</p>
              <p className="italic">{translations["our-core-value"].line10}</p>
            </div>
          </div>
        </section>

        {/* Our Faith Statement Section */}
        <section id="our-faith-statment" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {translations["our-faith-statment"].title}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"]["the-scriptures"]}
              </h3>
              <p>{translations["our-faith-statment"].line1}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"].god}
              </h3>
              <p>{translations["our-faith-statment"].line2}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"]["jesus-christ"]}
              </h3>
              <p>{translations["our-faith-statment"].line5}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"]["the-holy-spirit"]}
              </h3>
              <p>{translations["our-faith-statment"].line6}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"]["the-condition-of-people"]}
              </h3>
              <p>{translations["our-faith-statment"].line3}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"]["the-work-of-christ"]}
              </h3>
              <p>{translations["our-faith-statment"].line9}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"].salvation}
              </h3>
              <p>{translations["our-faith-statment"].line10}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"]["the-church"]}
              </h3>
              <p>{translations["our-faith-statment"].line11}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["our-faith-statment"]["eternal-state"]}
              </h3>
              <p>{translations["our-faith-statment"].line12}</p>
            </div>
          </div>
        </section>

        {/* Worship Service Information Section */}
        <section id="worship-service-information" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {translations["worship-service-information"].title}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["worship-service-information"]["service-time"]}
              </h3>
              <p>
                {
                  translations["worship-service-information"][
                    "service-location"
                  ]
                }
              </p>
              <p>
                {translations["worship-service-information"]["service-address"]}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations["worship-service-information"]["service-map"]}
              </h3>
              <p>
                {translations["worship-service-information"]["service-note"]}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {translations.contact.title}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.contact["contact-info"]}
              </h3>
              <p>{translations.contact["contact-email"]}</p>
              <p>{translations.contact["contact-phone"]}</p>
              <p>{translations.contact["contact-address"]}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.contact["contact-map"]}
              </h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
 