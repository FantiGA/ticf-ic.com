import { MetadataRoute } from "next";
import { locales } from "@/utils/i18n";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ticf-ic.com";

  // Generate URLs for each locale
  const urls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  return urls;
}
