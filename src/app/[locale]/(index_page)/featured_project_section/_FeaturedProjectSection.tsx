import { useTranslations } from "next-intl";
import React from "react";
import Project4 from "./Project4";
import Project3 from "./Project3";
import Project2 from "./Project2";

const FeaturedProjectSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="w-[95%] max-w-[1080px] mx-auto" id="projects">
      <h2 className="text-header font-semibold mb-8">{t("featuredProject")}</h2>
      <Project4 />
      <Project3 />
      <Project2 />
    </section>
  );
};

export default FeaturedProjectSection;
