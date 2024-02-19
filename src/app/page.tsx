import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage");
  return {
    title: t("pageTitle"),
    description: t("description"),
  };
}
