import screenshot1 from "@/../public/images/budgetplex_screenshots/screenshot1.png";
import screenshot2 from "@/../public/images/budgetplex_screenshots/screenshot2.png";
import screenshot3 from "@/../public/images/budgetplex_screenshots/screenshot3.png";
import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";
import FromRightAnimation from "@/animation/FromRightAnimation";

const Project5 = () => {
  const t = useTranslations("HomePage");

  return (
    <FromRightAnimation>
      <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem] max-md:flex-col-reverse">
        <CardHeader className="w-[40%] max-md:w-full">
          <ProjectCardTitle
            project={{
              title: "Budgetplex",
              sourceCodeURL: "https://github.com/Takish155/budgetplex",
              url: "https://budgetplex.vercel.app/",
            }}
          />
          <ProjectCardDescription
            description={t("budgetplexDescription")}
            skillUsed="React, Next.js, Typescript, Prisma, NextAuth, MongoDB"
          />
        </CardHeader>
        <ImageCarousel
          position="right"
          image={[
            { image: screenshot1, imageAlt: "Zeetaa" },
            { image: screenshot2, imageAlt: "Zeetaa" },
            { image: screenshot3, imageAlt: "Zeetaa" },
          ]}
        />
      </section>
    </FromRightAnimation>
  );
};

export default Project5;
