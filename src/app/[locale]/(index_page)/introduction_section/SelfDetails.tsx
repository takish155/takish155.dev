import { useTranslations } from "next-intl";
import React from "react";

const SelfDetails = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="grid md:grid-cols-2 mb-4">
      <section className="mb-[1.5rem] max-md:w-[95%]">
        <h2 className="font-bold text-miniheader mb-2">{t("nameHeading")}</h2>
        <h3 className="text-muted-foreground text-sm">{t("name")}</h3>
      </section>
      <section className="mb-[1.5rem] max-md:w-[95%]">
        <h2 className="font-bold text-miniheader mb-2">
          {t("nationalityHeading")}
        </h2>
        <h3 className="text-muted-foreground text-sm">{t("country")}</h3>
      </section>
      <section className="mb-[1.5rem] max-md:w-[95%]">
        <h2 className="font-bold text-miniheader mb-2">
          {t("educationHeading")}
        </h2>
        <h3 className="text-muted-foreground text-sm">{t("education")}</h3>
        <h3 className="text-muted-foreground text-sm">{t("course")}</h3>
      </section>
      <section className="mb-[1.5rem] max-md:w-[95%]">
        <h2 className="font-bold text-miniheader mb-2">{t("emailHeading")}</h2>
        <h3 className="text-muted-foreground text-sm">
          rimutakeshi155@gmail.com
        </h3>
      </section>
    </section>
  );
};

export default SelfDetails;
