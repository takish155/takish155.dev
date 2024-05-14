"use client";

import React from "react";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSelection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <button
      aria-label="Toggle language selection"
      onClick={() => {
        if (locale === "en") {
          router.push(pathname.replace("en", "ja"));
        } else {
          router.push(pathname.replace("ja", "en"));
        }
      }}
    >
      <Languages />
    </button>
  );
};

export default LanguageSelection;
