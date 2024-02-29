"use client";

import { useMenuContext } from "@/context/MenuContext";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import LanguageSelection from "../pc/LanguageSelection";
import MobileLanguageSelection from "./MobileLanguageSelection";
import MobileThemeSelection from "./MobileThemeSelection";

const MobileBar = ({
  home,
  aboutme,
  locale,
  close,
  theme,
  light,
  dark,
}: {
  home: string;
  aboutme: string;
  locale: string;
  close: string;
  theme: string;
  light: string;
  dark: string;
}) => {
  const { open, setOpen } = useMenuContext() || {};
  const pathname = usePathname();

  return (
    <>
      {open && (
        <nav className="w-[100vw] h-[100vh] top-0 fixed bg-inherit flex items-center">
          <ul className="w-full">
            <li
              className={`hover:bg-primary pointer p-4 text-center text-3xl ${
                pathname === `/${locale}` && "bg-primary"
              }`}
            >
              <Link
                href={`/${locale}`}
                className="block"
                onClick={() => setOpen!(false)}
              >
                {home}
              </Link>
            </li>
            <li
              className={`hover:bg-primary pointer p-4 text-center text-3xl ${
                pathname === `/${locale}/about-me` && "bg-primary"
              }`}
            >
              <Link
                href={`/${locale}/about-me`}
                className="block"
                onClick={() => setOpen!(false)}
              >
                {aboutme}
              </Link>
            </li>
            <li className="hover:bg-primary pointer p-4 text-center text-3xl">
              <Link
                className="block"
                href="https://github.com/Takish155"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen!(false)}
              >
                Github
              </Link>
            </li>
            <li className="hover:bg-primary pointer p-4 text-center text-3xl">
              <MobileLanguageSelection />
            </li>
            <li
              className="hover:bg-primary pointer p-4 text-center text-3xl hover:cursor-pointer"
              onClick={() => setOpen!(false)}
            >
              {close}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileBar;
