import React from "react";
import js from "@/../public/images/techstack_logos/js.png";
import react from "@/../public/images/techstack_logos/react.png";
import tailwind from "@/../public/images/techstack_logos/tailwind.png";
import mui from "@/../public/images/techstack_logos/mui.png";
import tmdb from "@/../public/images/techstack_logos/tmdb.jpg";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ProjectImageHoverAnimation from "@/animation/ProjectImageHoverAnimation";

const Project1 = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="w-full mb-[2rem] bg-[#1f1f1f] rounded-xl">
      <h2 className="font-semibold ml-[1rem] text-[1.75rem] pt-[1.75rem] mb-3">
        iMoviF
      </h2>
      <p className="w-[95%] mx-[auto] mb-5 text-xl">{t("iMoviFDescription")}</p>
      <section className="flex gap-[0.65rem] flex-wrap w-[95%] mx-auto mb-5">
        <div className="bg-[#181818] p-[0.65rem] rounded-xl flex gap-2">
          <ProjectImageHoverAnimation>
            <Image
              src={js}
              alt="Javascript"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />
          </ProjectImageHoverAnimation>

          <p>Javascript</p>
        </div>
        <div className="bg-[#181818] p-[0.65rem] rounded-xl flex gap-2">
          <Image src={react} alt="React" width={25} height={25} />
          <p>React</p>
        </div>
        <div className="bg-[#181818] p-[0.65rem] rounded-xl flex gap-2">
          <Image
            src={tmdb}
            alt="TMDB API"
            width={25}
            height={25}
            className="max-w-[25px] max-h-[25px] h-auto w-auto"
          />

          <p>TMDB API</p>
        </div>
        <div className="bg-[#181818] p-[0.65rem] rounded-xl flex gap-2">
          <Image
            src={tailwind}
            alt="Tailwind CSS"
            width={25}
            height={25}
            className="max-w-[25px] max-h-[25px] h-auto w-auto"
          />

          <p>Tailwind CSS</p>
        </div>
        <div className="bg-[#181818] p-[0.65rem] rounded-xl flex gap-2">
          <Image
            src={mui}
            alt="Material UI"
            width={25}
            height={25}
            className="max-w-[25px] max-h-[25px] h-auto w-auto"
          />

          <p>Material UI</p>
        </div>
      </section>
      <section className="flex gap-4 ml-4 pb-5">
        <Link
          href="https://github.com/Takish155/iMovIF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 hover:bg-blue-400 p-[0.65rem] rounded-xl flex gap-2">
            {t("viewWebsite")}
          </button>
        </Link>
        <Link
          href="https://imovif.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 hover:bg-blue-400 p-[0.65rem] rounded-xl flex gap-2">
            {t("viewSourceCode")}
          </button>
        </Link>
      </section>
    </section>
  );
};

export default Project1;
