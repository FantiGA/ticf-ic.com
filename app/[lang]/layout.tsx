import { dir } from "i18next";
import { Geist, Geist_Mono } from "next/font/google";
import { fallbackLng, languages } from "@/i18n/settings";
import { useTranslation } from "@/i18n/index";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);

  return {
    title: t("header.title"),
    content: t("header.description"),
    keywords: t("header.keywords"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lang);

  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <link type="image/x-icon" rel="icon" href="/favicon.ico" />
        <title>{t("header.title")}</title>
        <meta name="description" content={t("header.description")} />
        <meta name="keywords" content={t("header.keywords")} />
        <meta name="author" content={t("header.title")} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
