import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/type-writer-effect";
import { WavyBackground } from "@/components/ui/wavy-background";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <section className="h-[75vh] flex flex-col justify-center w-[100vw]">
      <WavyBackground className="overflow-hidden max-w-full">
        <h2 className="text-2xl font-semibold text-center mb-5">
          &#128075;
          {t("hello")}
        </h2>
        <h2 className="text-5xl text-center font-semibold leading-relaxed bg-pri">
          {t("im")} <span className="font-extrabold">{t("name")}</span>,{" "}
          <span className="px-4 font-extrabold text-red-500">{t("job")}</span>
        </h2>
        <TypewriterEffect
          className="mb-5"
          words={t("introduction2")
            .split(" ")
            .map((word) => {
              return {
                text: word,
              };
            })}
        />

        <section className="flex gap-5 justify-center">
          <Link href={`/${locale}/#projects`} passHref>
            <Button>{t("viewProject")}</Button>
          </Link>
          <Link href={`/${locale}/#contact`} passHref>
            <Button variant={"outline"}>{t("contactMe")}</Button>
          </Link>
        </section>
      </WavyBackground>
    </section>
  );
};

export default HeroSection;
