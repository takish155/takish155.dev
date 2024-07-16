import { useTranslations } from "next-intl";
import React from "react";
import dynamic from "next/dynamic";
import Project5 from "./Project5";
import Project6 from "./Project6";

const Project2 = dynamic(() => import("./Project2"));
const Project3 = dynamic(() => import("./Project3"));
const Project4 = dynamic(() => import("./Project4"));

const FeaturedProjectSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="w-[95%] max-w-[1080px] mx-auto" id="projects">
      <h2 className="text-header font-semibold mb-8">{t("featuredProject")}</h2>
      <Project6 />
      <Project5 />
      <Project4 />
      <Project3 />
      <Project2 />
    </section>
  );
};

export default FeaturedProjectSection;
