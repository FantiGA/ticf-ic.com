import { loadMessages } from "@/utils/i18n";
import ClientPage from "./ClientPage";
import { Locale } from "@/utils/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-CN" }, { locale: "ja" }];
}

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const messages = await loadMessages(params.locale);

  return {
    title: messages.header.title,
    description: messages.header.description,
    keywords: messages.header.keywords,
    authors: [{ name: "Jun Wu" }],
    viewport: "width=device-width, initial-scale=1.0",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const messages = await loadMessages(resolvedParams.locale);
  return <ClientPage initialTranslations={messages} />;
}
