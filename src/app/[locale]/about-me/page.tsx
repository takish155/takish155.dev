import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import AboutMeIntroduction from "./sections/AboutMeIntroduction";
import ThingsImDoingSection from "./sections/ThingsImDoingSection";

const Page = () => {
  const t = useTranslations("AboutMePage");
  return (
    <main className="w-[95%] max-w-[900px] mx-auto hello world">
      <article className="mt-[5rem]">
        <p className="italic text-lg">{t("updatedAt")}</p>
        <AboutMeIntroduction />
        <ThingsImDoingSection
          todo={[t("todolist1"), t("todolist2"), t("todolist3")]}
        />
      </article>
      <BackgroundBeams />
    </main>
  );
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutMePage");
  return {
    title: t("pageTitle"),
    description: t("description"),
  };
}

export default Page;
