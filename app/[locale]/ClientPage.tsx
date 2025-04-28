"use client";

import { useEffect } from "react";

interface ClientPageProps {
  initialTranslations: {
    title: string;
    description: string;
    image: string;
  };
}

export default function ClientPage({ initialTranslations }: ClientPageProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 更新页面标题
      document.title = initialTranslations.title;

      // 更新 meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]',
      ) as HTMLMetaElement;
      if (metaDescription) {
        metaDescription.content = initialTranslations.description;
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = initialTranslations.description;
        document.head.appendChild(meta);
      }

      // 添加 OpenGraph 和 Twitter 卡片元数据
      const metaImage = document.querySelector(
        'meta[property="og:image"]',
      ) as HTMLMetaElement;
      if (metaImage) {
        metaImage.content = initialTranslations.image;
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        meta.content = initialTranslations.image;
        document.head.appendChild(meta);
      }

      const metaTitle = document.querySelector(
        'meta[property="og:title"]',
      ) as HTMLMetaElement;
      if (metaTitle) {
        metaTitle.content = initialTranslations.title;
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        meta.content = initialTranslations.title;
        document.head.appendChild(meta);
      }

      const metaDescriptionOg = document.querySelector(
        'meta[property="og:description"]',
      ) as HTMLMetaElement;
      if (metaDescriptionOg) {
        metaDescriptionOg.content = initialTranslations.description;
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        meta.content = initialTranslations.description;
        document.head.appendChild(meta);
      }

      const twitterMetaTitle = document.querySelector(
        'meta[name="twitter:title"]',
      ) as HTMLMetaElement;
      if (twitterMetaTitle) {
        twitterMetaTitle.content = initialTranslations.title;
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:title");
        meta.content = initialTranslations.title;
        document.head.appendChild(meta);
      }

      const twitterMetaDescription = document.querySelector(
        'meta[name="twitter:description"]',
      ) as HTMLMetaElement;
      if (twitterMetaDescription) {
        twitterMetaDescription.content = initialTranslations.description;
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:description");
        meta.content = initialTranslations.description;
        document.head.appendChild(meta);
      }

      const twitterMetaImage = document.querySelector(
        'meta[name="twitter:image"]',
      ) as HTMLMetaElement;
      if (twitterMetaImage) {
        twitterMetaImage.content = initialTranslations.image;
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:image");
        meta.content = initialTranslations.image;
        document.head.appendChild(meta);
      }
    }
  }, [initialTranslations]);

  return (
    <div>
      <h1>{initialTranslations.title}</h1>
      <p>{initialTranslations.description}</p>
    </div>
  );
}
