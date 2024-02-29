import { useTranslations } from "next-intl";
import React from "react";
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
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Meteors } from "@/components/ui/meteor-effect";

const MiniIntroduction = () => {
  const t = useTranslations("HomePage");
  return (
    <article className="max-sm:my-[8rem] w-[95%] max-w-[900px] mx-auto my-[20rem] relative overflow-x-hidden">
      <section className="mb-7">
        <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
          &#x1F91D; {t("introductionHeader")}
        </h2>
        <TextGenerateEffect words={t("longIntroduction1")} />
      </section>
      <section className="grid sm:grid-cols-2">
        <section className="mb-[1.5rem] max-sm:w-[95%]">
          <h2 className="font-bold text-2xl mb-2">{t("nameHeading")}</h2>
          <h3 className="text-muted-foreground text-lg">{t("name")}</h3>
        </section>
        <section className="mb-[1.5rem] max-sm:w-[95%]">
          <h2 className="font-bold text-2xl mb-2">{t("nationalityHeading")}</h2>
          <h3 className="text-muted-foreground text-lg">{t("country")}</h3>
        </section>
        <section className="mb-[1.5rem] max-sm:w-[95%]">
          <h2 className="font-bold text-2xl mb-2">{t("educationHeading")}</h2>
          <h3 className="text-muted-foreground text-lg">{t("education")}</h3>
          <h3 className="text-muted-foreground text-lg">{t("course")}</h3>
        </section>
        <section className="mb-[1.5rem] max-sm:w-[95%]">
          <h2 className="font-bold text-2xl mb-2">{t("emailHeading")}</h2>
          <h3 className="text-muted-foreground text-lg">
            rimutakeshi155@gmail.com
          </h3>
        </section>
      </section>
      <Meteors number={60} />
      <section className="mb-[1.5rem] w-full">
        <h2 className="font-bold text-2xl mb-2 text-center">
          {t("skillsHeading")}
        </h2>
        <CardContent className="w-full flex gap-4 flex-wrap justify-center">
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={html}
              alt="HTML5"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>HTML5</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={css}
              alt="CSS3"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>CSS3</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={js}
              alt="Javascript"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Javascript</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={ts}
              alt="Typescript"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Typescript</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={react}
              alt="React"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>React</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={next}
              alt="Next.js"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Next.js</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={prisma}
              alt="Prisma"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Prisma</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={nextauth}
              alt="NextAuth"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>NextAuth</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={tailwind}
              alt="Tailwind CSS"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
              layout="fixed"
            />

            <p>Tailwind CSS</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={mui}
              alt="Material UI"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Material UI</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={pusher}
              alt="Pusher"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Pusher</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={nextintl}
              alt="Next-Intl"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p id="projects">Next-Intl</p>
          </Card>
        </CardContent>
      </section>
    </article>
  );
};

export default MiniIntroduction;
