import { loadMessages, Locale, locales } from "@/utils/i18n";
import ClientPage from "./ClientPage";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;

  if (!locales.includes(resolvedParams.locale as Locale)) {
    notFound();
  }

  const messages = await loadMessages(resolvedParams.locale as Locale);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <ClientPage
          initialTranslations={{
            header: {
              title: messages.header.title,
              keywords: messages.header.keywords,
              description: messages.header.description,
            },
            language: messages.language,
            menu: messages.menu,
            chapter: messages.chapter,
            "prayer-text": messages["prayer-text"],
            welcome: messages.welcome,
            "our-mission": messages["our-mission"],
            "our-vision": messages["our-vision"],
            "our-core-value": messages["our-core-value"],
            "our-faith-statment": messages["our-faith-statment"],
            "worship-service-information":
              messages["worship-service-information"],
            contact: messages.contact,
          }}
        />
      </div>
    </div>
  );
}
