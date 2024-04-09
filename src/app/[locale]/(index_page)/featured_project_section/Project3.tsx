import React from "react";
import screenshot1 from "@/../public/images/gamiplex_screenshots/gamiplex1.png";
import screenshot2 from "@/../public/images/gamiplex_screenshots/gamiplex2.png";
import screenshot3 from "@/../public/images/gamiplex_screenshots/gamiplex3.png";
import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import FromRightAnimation from "@/animation/FromRightAnimation";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project3 = () => {
  const t = useTranslations("HomePage");

  return (
    <FromRightAnimation>
      <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem]">
        <CardHeader className="w-[40%] max-md:w-full">
          <ProjectCardTitle
            project={{
              title: "Gamiplex",
              sourceCodeURL: "https://github.com/Takish155/Gamiplex",
              url: "https://gamiplex.vercel.app/",
            }}
          />
          <ProjectCardDescription
            description={t("gamiplexDescription")}
            skillUsed="React, Next.js, Typescript, Prisma, NextAuth, Material UI, MongoDB"
          />
        </CardHeader>
        <ImageCarousel
          position="right"
          image={[
            { image: screenshot1, imageAlt: "Gamiplex" },
            { image: screenshot2, imageAlt: "Gamiplex" },
            { image: screenshot3, imageAlt: "Gamiplex" },
          ]}
        />
      </section>
    </FromRightAnimation>
  );
};

export default Project3;
