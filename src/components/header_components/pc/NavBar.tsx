"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = ({
  aboutMe,
  contact,
  home,
  locale,
}: {
  home: string;
  aboutMe: string;
  contact: string;
  locale: string;
}) => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center gap-9 max-md:hidden">
      <div>
        <ul className="flex gap-[1.2rem] text-[1.15rem] font-extralight">
          <li
            className={
              pathName === `/${locale}`
                ? "border-b-4 border-primary"
                : "hover:border-b-4 border-primary"
            }
          >
            <Link href="/">{home}</Link>
          </li>
          <li
            className={
              pathName === `/${locale}/about-me`
                ? "border-b-4 border-primary"
                : "hover:border-b-4 border-primary"
            }
          >
            <Link href={`/${locale}/about-me`} data-test="about-me">
              {aboutMe}
            </Link>
          </li>

          <li className="hover:border-b-4 border-primary">
            <Link
              className="flex gap-1"
              href="https://github.com/Takish155"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <ExternalLinkIcon size={17} />
            </Link>
          </li>
        </ul>
      </div>
      <Link href={`/${locale}/#contact`} passHref>
        <Button>{contact}</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
