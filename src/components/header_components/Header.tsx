import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";
import NavBar from "./pc/NavBar";
import { CardHeader } from "@/components/ui/card";
import MobileBar from "./mobile/MobileBar";
import MenuIconButton from "./pc/MenuIconButton";
import ThemeMode from "./pc/ThemeMode";
import LanguageSelection from "./pc/LanguageSelection";

const Header = async () => {
  const t = await getTranslations("Header");
  const locale = await getLocale();
  return (
    <header className="flex justify-evenly max-md:justify-normal contents-center sticky top-0 w-full z-50 bg-[#030712] bg-opacity-[0.98]">
      <MobileBar
        aboutme={t("about")}
        home={t("home")}
        close={t("close")}
        locale={locale}
        theme={t("theme")}
        light={t("light")}
        dark={t("dark")}
      />
      <CardHeader className="max-md:p-0 max-md:py-6 max-md:px-2">
        <h1 className="text-[1.7rem] font-semibold mb-[0.5rem] flex items-center gap-2">
          <MenuIconButton />
          &#128187;
          <Link href="/" passHref>
            {t("title")}
          </Link>
        </h1>
      </CardHeader>
      <div className="flex gap-8 max-md:hidden">
        <NavBar
          aboutMe={t("about")}
          home={t("home")}
          locale={locale}
          contact={t("contact")}
        />
        <LanguageSelection />
      </div>
    </header>
  );
};

export default Header;
