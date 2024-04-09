import html from "@/../public/images/techstack_logos/html5.svg";
import css from "@/../public/images/techstack_logos/css.png";
import js from "@/../public/images/techstack_logos/js.png";
import ts from "@/../public/images/techstack_logos/ts.png";
import react from "@/../public/images/techstack_logos/react.png";
import next from "@/../public/images/techstack_logos/next.png";
import prisma from "@/../public/images/techstack_logos/prisma.svg";
import nextauth from "@/../public/images/techstack_logos/nextauth.png";
import tailwind from "@/../public/images/techstack_logos/tailwind.png";
import nextintl from "@/../public/images/techstack_logos/nextinlt.png";
import mui from "@/../public/images/techstack_logos/mui.png";
import pusher from "@/../public/images/techstack_logos/pusher.jpg";
import React from "react";
import { CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import SelfSkillCard from "./SelfSkillCard";

const SelfSkills = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="mb-[1.5rem] w-full">
      <h2 className="font-bold text-miniheader mb-2">{t("skillsHeading")}</h2>
      <CardContent className="w-full flex gap-4 flex-wrap p-0 text-paragraph">
        <SelfSkillCard skillImageSrc={html} skillName="HTML5" />
        <SelfSkillCard skillImageSrc={css} skillName="CSS3" />
        <SelfSkillCard skillImageSrc={js} skillName="JavaScript" />
        <SelfSkillCard skillImageSrc={ts} skillName="TypeScript" />
        <SelfSkillCard skillImageSrc={react} skillName="React" />
        <SelfSkillCard skillImageSrc={next} skillName="Next.js" />
        <SelfSkillCard skillImageSrc={prisma} skillName="Prisma" />
        <SelfSkillCard skillImageSrc={nextauth} skillName="NextAuth" />
        <SelfSkillCard skillImageSrc={tailwind} skillName="TailwindCSS" />
        <SelfSkillCard skillImageSrc={nextintl} skillName="NextIntl" />
        <SelfSkillCard skillImageSrc={mui} skillName="Material-UI" />
        <SelfSkillCard skillImageSrc={pusher} skillName="Pusher" />
      </CardContent>
    </section>
  );
};

export default SelfSkills;
