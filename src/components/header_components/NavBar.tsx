"use client";

import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = ({
  contact,
  locale,
}: {
  home: string;
  aboutMe: string;
  contact: string;
  locale: string;
}) => {
  return (
    <nav className="flex items-center gap-9">
      <ul className="flex gap-[1.2rem] text-[1.15rem] font-extralight">
        <li className="hover:text-primary">
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
      <Link href={`/${locale}/#contact`} passHref>
        <Button>{contact}</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
