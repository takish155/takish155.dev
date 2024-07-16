import screenshot1 from "@/../public/images/omniparts_screenshots/screenshot1.png";
import screenshot2 from "@/../public/images/omniparts_screenshots/screenshot2.png";
import screenshot3 from "@/../public/images/omniparts_screenshots/screenshot3.png";
import { useTranslations } from "next-intl";
import { CardHeader } from "@/components/ui/card";
import FromLeftAnimation from "@/animation/FromLeftAnimation";
import ImageCarousel from "./components/ImageCarousel";
import ProjectCardTitle from "./components/ProjectCardTitle";
import ProjectCardDescription from "./components/ProjectCardDescription";

const Project6 = () => {
  const t = useTranslations("HomePage");

  return (
    <FromLeftAnimation>
      <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto mb-[5rem]">
        <ImageCarousel
          position="left"
          image={[
            { image: screenshot1, imageAlt: "Zeetaa" },
            { image: screenshot2, imageAlt: "Zeetaa" },
            { image: screenshot3, imageAlt: "Zeetaa" },
          ]}
        />
        <CardHeader className="w-[40%] max-md:w-full">
          <ProjectCardTitle
            project={{
              title: "Omniparts",
              sourceCodeURL: "https://github.com/Takish155/omniparts",
              url: "https://omniparts.vercel.app/en",
            }}
          />
          <ProjectCardDescription
            description={t("omnipartsDescription")}
            skillUsed="React, Next.js, Typescript, Prisma, NextAuth, Supabase, Stripe"
          />
        </CardHeader>
      </section>
    </FromLeftAnimation>
  );
};

export default Project6;
