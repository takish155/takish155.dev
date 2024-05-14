import { useTranslations } from "next-intl";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import FromBottomAnimation from "@/animation/FromBottomAnimation";
import dynamic from "next/dynamic";

const SelfDetails = dynamic(() => import("./SelfDetails"));
const SelfSkills = dynamic(() => import("./SelfSkills"));

const IntroductionSection = () => {
  const t = useTranslations("HomePage");

  return (
    <FromBottomAnimation>
      <article className="max-md:my-[8rem] w-[95%] max-w-[1080px] mx-auto my-[20rem] overflow-x-hidden">
        <h2 className="font-semibold text-header pt-[1rem] mb-5">
          {t("introductionHeader")}
        </h2>
        <section className="mb-7">
          <TextGenerateEffect words={t("longIntroduction1")} />
        </section>
        <SelfDetails />
        <SelfSkills />
      </article>
    </FromBottomAnimation>
  );
};

export default IntroductionSection;
