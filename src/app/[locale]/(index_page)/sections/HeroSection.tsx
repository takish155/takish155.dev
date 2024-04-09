import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/type-writer-effect";
import { SparklesCore } from "@/components/ui/sparkle-preview";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <section className="h-[75vh] flex flex-col justify-center w-[100vw] relative">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h2 className="text-[min(3vw,1.55rem)] font-semibold text-center mb-5 relative">
        &#128075;
        {t("hello")}
      </h2>
      <h2 className="text-header  text-center font-semibold">
        {t("im")}{" "}
        <span className="font-extrabold text-primary">{t("name")}</span>,{" "}
        <br className="lg:hidden" />
        {locale === "en" && " a"}
        <span className="px-4 font-extrabold text-red-500">{t("job")}</span>
        {locale === "ja" && <br className="sm:hidden" />}
        {locale === "ja" && "です。"}
      </h2>
      <TypewriterEffect
        className="mb-5 mx-auto"
        words={t("introduction2")
          .split(" ")
          .map((word) => {
            return {
              text: word,
            };
          })}
      />
      <section className="flex gap-5 justify-center flex-wrap relative">
        <Link href={`/${locale}/#projects`} passHref>
          <Button>{t("viewProject")}</Button>
        </Link>
        <Link href={`/${locale}/#contact`} passHref>
          <Button variant={"outline"}>{t("contactMe")}</Button>
        </Link>
      </section>
    </section>
  );
};

export default HeroSection;
