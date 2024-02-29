import { useTranslations } from "next-intl";
import React from "react";
import Project4 from "./projects/Project4";
import Project3 from "./projects/Project3";
import Project2 from "./projects/Project2";

const FeaturedProject = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="w-[95%] max-w-[900px] mx-auto">
      <h2 className="text-header font-semibold mb-8">
        &#x1F527; {t("featuredProject")}
      </h2>
      <Project4 />
      <Project3 />
      <Project2 />
    </section>
  );
};

export default FeaturedProject;
