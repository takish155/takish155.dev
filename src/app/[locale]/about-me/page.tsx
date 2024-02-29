import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Page = () => {
  const t = useTranslations("AboutMePage");
  return (
    <main className="w-[95%] max-w-[900px] mx-auto hello world">
      <article className="mt-[5rem]">
        <p className="italic text-lg">{t("updatedAt")}</p>
        <section className="mb-14">
          <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
            {t("heading")}
          </h2>
          <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
            {t("introduction1")}
          </p>
          <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
            {t("introduction2")}
          </p>
          <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
            {t("introduction3")}
          </p>
          <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
            {t("introduction4")}
          </p>
          <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
            {t("introduction5")}
          </p>
        </section>
        <section className="mb-14">
          <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
            {t("heading2")}
          </h2>
          <ul
            className=" tablet:w-full list-disc pl-5 text-lg text-muted-foreground"
            id="toDoList"
          >
            <li>{t("todolist1")}</li>
            <li>{t("todolist2")}</li>
            <li>{t("todolist3")}</li>
          </ul>
        </section>
        <section className="mb-14">
          <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
            {t("heading3")}
          </h2>
          <p className="text-muted-foreground text-lg">
            &#9989;
            {t("goal1")}
          </p>
          <p className="text-muted-foreground text-lg">
            &#9989;
            {t("goal3")}
          </p>
          <ul className="text-muted-foreground  list-disc pl-5 text-lg tablet:w-full">
            <li>{t("goal2")}</li>
            <li>{t("goal4")}</li>
            <li>{t("goal5")}</li>
            <li>{t("goal6")}</li>
            <li>{t("goal7")}</li>
            <li>{t("goal8")}</li>
            <li>{t("goal9")}</li>
            <li>{t("goal10")}</li>
            <li>{t("goal11")}</li>
            <li>{t("goal12")}</li>
            <li>{t("goal13")}</li>
          </ul>
        </section>
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
