import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ja", "zh-CN"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  // output: "export",
  distDir: "./dist",
};

export default nextConfig;
