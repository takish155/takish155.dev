import { useLocale, useTranslations } from "next-intl";
import React from "react";

const HeroHeading = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <h2 className="text-heroHeader text-center font-semibold z-40">
      {t("im")} <span className="font-extrabold text-primary">{t("name")}</span>
      , <br className="lg:hidden" />
      {locale === "en" && " a"}
      <span className="px-4 font-extrabold bg-primary text-white rounded-2xl ml-4">
        {t("job")}
      </span>
      {locale === "ja" && <br className="md:hidden" />}
      {locale === "ja" && "です。"}
    </h2>
  );
};

export default HeroHeading;
