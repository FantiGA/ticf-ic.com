import { loadMessages } from "@/utils/i18n";
import ClientPage from "./ClientPage";
import { Locale } from "@/utils/i18n";
import { Metadata } from "next";

type PageProps = {
  params: { locale: Locale };
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-CN" }, { locale: "ja" }];
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = props.params;
  const messages = await loadMessages(locale);

  return {
    title: messages.header.title,
    description: messages.header.description,
    keywords: messages.header.keywords,
    authors: [{ name: "Jun Wu" }],
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function Page(props: PageProps) {
  const { locale } = props.params;
  const messages = await loadMessages(locale);
  return <ClientPage initialTranslations={messages} />;
}
