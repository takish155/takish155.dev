import { useTranslations } from "next-intl";
import Project2 from "./projects/Project2";
import Project1 from "./projects/Project1";
import Project3 from "./projects/Project3";
import Project4 from "./projects/Project4";

const Projects = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="hello world tablet:my-[8rem] my-[12rem] w-[95%] max-w-[900px] mx-auto">
      <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
        &#x1F6E0; {t("project")}
      </h2>
      <Project4 />
      <Project3 />
      <Project2 />
    </section>
  );
};

export default Projects;
