import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const HeroActionButtons = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  return (
    <section className="flex gap-5 justify-center flex-wrap z-40">
      <Link href={`/${locale}/#projects`} passHref>
        <Button>{t("viewProject")}</Button>
      </Link>
      <Link href={`/${locale}/#contact`} passHref>
        <Button variant={"outline"}>{t("contactMe")}</Button>
      </Link>
    </section>
  );
};

export default HeroActionButtons;
