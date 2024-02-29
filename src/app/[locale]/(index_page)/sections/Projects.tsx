import { useTranslations } from "next-intl";
import Project2 from "./projects/Project2";
import Project1 from "./projects/Project1";
import Project3 from "./projects/Project3";
import Project4 from "./projects/Project4";
import { HeroParallax } from "@/components/ui/hero-parralax";
import ifindgallery1 from "@/../public/images/ifindgallery_screenshots/screenshot1.png";
import ifindgallery2 from "@/../public/images/ifindgallery_screenshots/screenshot2.png";
import ifindgallery3 from "@/../public/images/ifindgallery_screenshots/screenshot3.png";
import ifindgallery4 from "@/../public/images/ifindgallery_screenshots/screenshot4.png";
import ifindgallery5 from "@/../public/images/ifindgallery_screenshots/screenshot5.png";
import gamiplex1 from "@/../public/images/gamiplex_screenshots/gamiplex1.png";
import gamiplex2 from "@/../public/images/gamiplex_screenshots/gamiplex2.png";
import gamiplex3 from "@/../public/images/gamiplex_screenshots/gamiplex3.png";
import gamiplex4 from "@/../public/images/gamiplex_screenshots/gamiplex4.png";
import gamiplex5 from "@/../public/images/gamiplex_screenshots/gamiplex4.png";
import zeetaa1 from "@/../public/images/zeetaa_screenshots/zeetaa1.png";
import zeetaa2 from "@/../public/images/zeetaa_screenshots/zeetaa2.png";
import zeetaa3 from "@/../public/images/zeetaa_screenshots/zeetaa3.png";
import zeetaa4 from "@/../public/images/zeetaa_screenshots/zeetaa4.png";
import zeetaa5 from "@/../public/images/zeetaa_screenshots/zeetaa5.png";
import { BackgroundGradient } from "@/components/ui/glowingcard";

const Projects = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="hello world tablet:my-[8rem] my-[12rem]">
      <HeroParallax
        products={[
          {
            title: "iFindGallery",
            link: "https://ifindgallery.netlify.app/",
            thumbnail: ifindgallery5,
          },
          {
            title: "Gamiplex",
            link: "https://gamiplex.netlify.app/",
            thumbnail: gamiplex1,
          },
          {
            title: "Zeetaa",
            link: "https://zeetaa.netlify.app/",
            thumbnail: zeetaa1,
          },
          {
            title: "iFindGallery",
            link: "https://ifindgallery.netlify.app/",
            thumbnail: ifindgallery2,
          },
          {
            title: "Gamiplex",
            link: "https://gamiplex.netlify.app/",
            thumbnail: gamiplex2,
          },
          {
            title: "Zeetaa",
            link: "https://zeetaa.netlify.app/",
            thumbnail: zeetaa2,
          },
          {
            title: "iFindGallery",
            link: "https://ifindgallery.netlify.app/",
            thumbnail: ifindgallery3,
          },
          {
            title: "Gamiplex",
            link: "https://gamiplex.netlify.app/",
            thumbnail: gamiplex3,
          },
          {
            title: "Zeetaa",
            link: "https://zeetaa.netlify.app/",
            thumbnail: zeetaa3,
          },
          {
            title: "iFindGallery",
            link: "https://ifindgallery.netlify.app/",
            thumbnail: ifindgallery4,
          },
          {
            title: "Gamiplex",
            link: "https://gamiplex.netlify.app/",
            thumbnail: gamiplex4,
          },
          {
            title: "Zeetaa",
            link: "https://zeetaa.netlify.app/",
            thumbnail: zeetaa4,
          },
          {
            title: "iFindGallery",
            link: "https://ifindgallery.netlify.app/",
            thumbnail: ifindgallery1,
          },
          {
            title: "Gamiplex",
            link: "https://gamiplex.netlify.app/",
            thumbnail: gamiplex5,
          },
          {
            title: "Zeetaa",
            link: "https://zeetaa.netlify.app/",
            thumbnail: zeetaa5,
          },
        ]}
      />
      {/* <section className="w-[95%] max-w-[900px] mx-auto mt-[15rem]">
        <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
          &#x1F6E0; {t("project")}
        </h2>
        <BackgroundGradient
          className="mb-[10rem]"
          children={<Project4 />}
        ></BackgroundGradient>
        <BackgroundGradient className="mb-[10rem]">
          <Project3 />
        </BackgroundGradient>
        <BackgroundGradient className="mb-[10rem]">
          <Project2 />
        </BackgroundGradient>
      </section> */}
    </section>
  );
};

export default Projects;
