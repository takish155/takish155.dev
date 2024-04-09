import { useTranslations } from "next-intl";
import React from "react";

const AboutMeIntroduction = () => {
  const t = useTranslations("AboutMePage");

  return (
    <section className="mb-14">
      <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
        {t("heading")}
      </h2>
      <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
        {t("introduction1")}
      </p>
      <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
        {t("introduction2")}
      </p>
      <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
        {t("introduction3")}
      </p>
      <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
        {t("introduction4")}
      </p>
      <p className="text-muted-foreground text-lg  tablet:w-full mb-4">
        {t("introduction5")}
      </p>
    </section>
  );
};

export default AboutMeIntroduction;
