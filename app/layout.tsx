import { ReactNode } from "react";
import HtmlWrapper from "./[locale]/HtmlWrapper";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <HtmlWrapper>
      <div
        id="root"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </div>
    </HtmlWrapper>
  );
}
