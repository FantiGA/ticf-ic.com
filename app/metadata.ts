import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://ticf-ic.com"),
  title: {
    default:
      "TICF Ikebukuro Church | Ueno Church | Tokyo International Christian Fellowship",
    template: "%s | TICF",
  },
  description:
    "TICF is an international Protestant church with bilingual services in Chinese and Japanese every Sunday.",
  keywords: [
    "Christian Church",
    "Japan Christian Church",
    "Tokyo Christian Church",
    "Chinese Christian Church",
    "Church",
    "Ikebukuro Christian Church",
    "Ueno Christian Church",
    "Christianity",
    "Chinese Church",
    "Chinese Christian Church in Japan",
    "Bilingual Church",
    "Trilingual Church",
  ],
  authors: [{ name: "TICF" }],
  creator: "TICF",
  publisher: "TICF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ticf-ic.com",
    siteName: "TICF",
    title:
      "TICF Ikebukuro Church | Ueno Church | Tokyo International Christian Fellowship",
    description:
      "TICF is an international Protestant church with bilingual services in Chinese and Japanese every Sunday.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TICF - Tokyo International Christian Fellowship",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ticf-ic.com",
    languages: {
      en: "https://ticf-ic.com/en",
      ja: "https://ticf-ic.com/ja",
      "zh-CN": "https://ticf-ic.com/zh-CN",
    },
  },
};
