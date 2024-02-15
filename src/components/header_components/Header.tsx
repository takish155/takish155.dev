import { getLocale, getTranslations } from "next-intl/server";

import Link from "next/link";
import React, { useState } from "react";
import NavBar from "./pc/NavBar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MobileBar from "./mobile/MobileBar";
import { MenuIcon, Sun } from "lucide-react";
import MenuIconButton from "./pc/MenuIconButton";
import ThemeMode from "./pc/ThemeMode";
import LanguageSelection from "./pc/LanguageSelection";

const Header = async () => {
  const t = await getTranslations("Header");
  const locale = await getLocale();
  return (
    <Card className="flex justify-evenly max-sm:justify-normal contents-center sticky top-0 w-full z-10">
      <MobileBar
        aboutme={t("about")}
        home={t("home")}
        close={t("close")}
        locale={locale}
        theme={t("theme")}
        light={t("light")}
        dark={t("dark")}
      />
      <CardHeader className="max-sm:p-0 max-sm:py-6 max-sm:px-2">
        <h1 className="text-[1.7rem] font-semibold mb-[0.5rem] flex items-center gap-2">
          <MenuIconButton />
          &#128187;
          <Link href="/" passHref>
            {t("title")}
          </Link>
        </h1>
      </CardHeader>
      <div className="flex gap-8 max-sm:hidden">
        <NavBar
          aboutMe={t("about")}
          home={t("home")}
          locale={locale}
          contact={t("contact")}
        />
        <ThemeMode dark={t("dark")} light={t("light")} theme={t("theme")} />
        <LanguageSelection />
      </div>
    </Card>
  );
};

export default Header;
