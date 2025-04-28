import { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Enable static export
  output: "export",
  // Disable i18n config as next-intl handles internationalization
  // i18n: {
  //   locales: ["en", "zh-CN", "ja"],
  //   defaultLocale: "en",
  // },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },
};

export default nextConfig;
 