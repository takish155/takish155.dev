"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const MobileThemeSelection = ({
  theme,
  dark,
  light,
}: {
  theme: string;
  dark: string;
  light: string;
}) => {
  const { theme: currentTheme, setTheme } = useTheme();
  return (
    <Dialog>
      <DialogTrigger>{theme}</DialogTrigger>
      <DialogContent>
        <ul className="w-[100vh]">
          <Button
            className="text-2xl p-6 border-b-2 border-gray-300 mr-4"
            onClick={() => setTheme("light")}
          >
            {light}
          </Button>
          <Button className="text-2xl p-6" onClick={() => setTheme("dark")}>
            {dark}
          </Button>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default MobileThemeSelection;
