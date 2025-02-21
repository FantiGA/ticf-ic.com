import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ja", "zh-CN"], // Supported languages
    defaultLocale: "en", // Default language
    localeDetection: false, // Enable locale detection
  },
};

export default nextConfig;
