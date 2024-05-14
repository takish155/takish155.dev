import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";
import ThemeMode from "./buttons/ThemeMode";
import LanguageSelection from "./buttons/LanguageSelection";

const Header = async () => {
  const t = await getTranslations("Header");
  const locale = await getLocale();
  return (
    <header className="flex justify-around contents-center sticky top-0 w-full z-50 bg-background bg-opacity-[0.98] py-6">
      <h1 className="text-[min(5vw,1.7rem)] font-semibold flex items-center gap-2">
        <Link href="/" passHref>
          {t("title")}
        </Link>
      </h1>
      <div className="flex gap-8 max-md:hidden">
        <NavBar
          aboutMe={t("about")}
          home={t("home")}
          locale={locale}
          contact={t("contact")}
        />
        <LanguageSelection />
        <ThemeMode />
      </div>
      <div className="flex gap-10 md:hidden items-center">
        <ThemeMode />
        <LanguageSelection />
      </div>
    </header>
  );
};

export default Header;
