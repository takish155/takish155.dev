import type { Metadata } from "next";
import HeroSection from "./hero_section/_HeroSection";
import { getTranslations } from "next-intl/server";
import FeaturedProjectSection from "./featured_project_section/_FeaturedProjectSection";
import ContactSection from "./contact_section/_ContactSection";
import ParallaxSection from "./parallax_section/_ParalaxSection";
import IntroductionSection from "./introduction_section/_IntroductionSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <ParallaxSection />
      <IntroductionSection />
      <FeaturedProjectSection />
      <ContactSection />
    </main>
  );
};

export default page;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage");
  return {
    title: t("pageTitle"),
    description: t("description"),
  };
}
