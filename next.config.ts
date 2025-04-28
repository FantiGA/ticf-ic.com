import { NextConfig } from "next";
import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Enable static export
  output: "export",
  // Disable i18n config as next-intl handles internationalization
  // i18n: {
  //   locales: ["en", "zh-CN", "ja"],
  //   defaultLocale: "en",
  // },
};

export default withNextIntl("./utils/request.tsx")(nextConfig);
