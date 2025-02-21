import { getDictionary } from "@/utils/dictionaries";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }, { lang: "zh-CN" }];
}

export default async function Page({
  params,
}: {
  params: { lang: "en" | "ja" | "zh-CN" };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang); // Load dictionary based on the language
  return <button>{dict.products.cart}</button>; // Display the translated content
}
