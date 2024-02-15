import { useLocale, useTranslations } from "next-intl";
import React from "react";
import heroimg from "@/../public/images/heroimg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <section className="hello world max-sm:my-[8rem] my-[14.5rem] w-[95%] max-w-[900px] mx-auto flex justify-center gap-4 items-center flex-wrap">
      <section className="max-sm:w-full  tablet:mb-8 w-[65%] min-w-[250px]">
        <h2 className="text-[2.3rem] font-semibold">
          &#128075;
          {t("hello")}
        </h2>
        <h3 className="text-[2.8rem] font-bold mb-[0.7rem] ">
          {t("introduction")}
        </h3>
        <p className="text-muted-foreground font-medium text-xl mb-7">
          {t("introduction2")}
        </p>
        <section className="flex gap-5">
          <Link href={`/${locale}/#projects`} passHref>
            <Button>{t("viewProject")}</Button>
          </Link>
          <Link href={`/${locale}/#contact`} passHref>
            <Button variant={"outline"}>{t("contactMe")}</Button>
          </Link>
        </section>
      </section>
      <section className="tablet:w-[60%] w-[30%]">
        <Image src={heroimg} alt="gear 5 luffy" />
      </section>
    </section>
  );
};

export default HeroSection;
