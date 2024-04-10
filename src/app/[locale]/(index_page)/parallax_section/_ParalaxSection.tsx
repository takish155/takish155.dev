import { HeroParallax } from "@/components/ui/hero-parralax";
import { projectList } from "@/lib/projectList";

const ParallaxSection = () => {
  return (
    <section className="tablet:mb-[8rem] mb-[12rem] z-[46]">
      <HeroParallax products={projectList} />
    </section>
  );
};

export default ParallaxSection;
