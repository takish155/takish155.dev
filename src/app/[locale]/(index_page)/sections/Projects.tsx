import { useTranslations } from "next-intl";
import { HeroParallax } from "@/components/ui/hero-parralax";
import { projectList } from "@/lib/projectList";

const Projects = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="hello world tablet:my-[8rem] my-[12rem]">
      <HeroParallax products={projectList} />
    </section>
  );
};

export default Projects;
