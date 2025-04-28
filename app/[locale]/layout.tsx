import { ReactNode } from "react";

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "zh-CN" },
    { locale: "ja" }
  ];
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
