import { HeroParallax } from "@/components/ui/hero-parralax";
import { projectList } from "@/lib/projectList";

const ParallaxSection = () => {
  return (
    <section className="tablet:my-[8rem] my-[12rem]">
      <HeroParallax products={projectList} />
    </section>
  );
};

export default ParallaxSection;
