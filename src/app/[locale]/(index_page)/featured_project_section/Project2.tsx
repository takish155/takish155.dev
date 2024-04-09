import React from "react";
import screenshot1 from "@/../public/images/ifindgallery_screenshots/screenshot1.png";
import screenshot2 from "@/../public/images/ifindgallery_screenshots/screenshot2.png";
import screenshot3 from "@/../public/images/ifindgallery_screenshots/screenshot3.png";
import screenshot4 from "@/../public/images/ifindgallery_screenshots/screenshot4.png";
import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import FromLeftAnimation from "@/animation/FromLeftAnimation";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project2 = () => {
  const t = useTranslations("HomePage");

  return (
    <FromLeftAnimation>
      <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem]">
        <ImageCarousel
          position="left"
          image={[
            { image: screenshot1, imageAlt: "iFindGallery" },
            { image: screenshot2, imageAlt: "iFindGallery" },
            { image: screenshot3, imageAlt: "iFindGallery" },
            { image: screenshot4, imageAlt: "iFindGallery" },
          ]}
        />
        <CardHeader className="w-[40%] max-md:w-full">
          <ProjectCardTitle
            project={{
              title: "iFindGallery",
              sourceCodeURL: "https://github.com/Takish155/iFindGallery",
              url: "https://ifindgallery.netlify.app/",
            }}
          />
          <ProjectCardDescription
            description={t("iFindGalleryDescription")}
            skillUsed="React, Typescript, Material UI, Unsplash API"
          />
        </CardHeader>
      </section>
    </FromLeftAnimation>
  );
};

export default Project2;
