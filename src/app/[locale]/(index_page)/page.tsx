import type { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";
import MiniIntroduction from "./sections/MiniIntroduction";
import ContactSection from "./sections/ContactSection";
import { getTranslations } from "next-intl/server";

const page = () => {
  return (
    <main>
      <HeroSection />
      <MiniIntroduction />
      <Projects />
      {/* <TechstackSection /> */}
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
