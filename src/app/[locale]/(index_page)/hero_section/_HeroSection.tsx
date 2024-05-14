import { useLocale, useTranslations } from "next-intl";
import { TypewriterEffect } from "@/components/ui/type-writer-effect";
import HeroActionButtons from "./HeroActionButtons";
import HeroHeading from "./HeroHeading";

const HeroSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="h-[75vh] flex flex-col justify-center w-[100vw] relative">
      <h2 className="text-miniheader font-semibold text-center mb-5 z-40">
        &#128075;
        {t("hello")}
      </h2>
      <HeroHeading />
      <TypewriterEffect
        className="mb-5 mx-auto z-40"
        words={t("introduction2")
          .split(" ")
          .map((word) => {
            return {
              text: word,
            };
          })}
      />
      <HeroActionButtons />
    </section>
  );
};

export default HeroSection;
