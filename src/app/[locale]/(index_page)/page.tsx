import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ParallaxSection from "./parallax_section/_ParalaxSection";
import dynamic from "next/dynamic";

const IntroductionSection = dynamic(
  () => import("./introduction_section/_IntroductionSection")
);
const FeaturedProjectSection = dynamic(
  () => import("./featured_project_section/_FeaturedProjectSection")
);
const ContactSection = dynamic(
  () => import("./contact_section/_ContactSection")
);

const page = () => {
  return (
    <main className="overflow-x-hidden">
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
