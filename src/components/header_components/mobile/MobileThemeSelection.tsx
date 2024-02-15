"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useMenuContext } from "@/context/MenuContext";

const MobileThemeSelection = ({
  theme,
  dark,
  light,
}: {
  theme: string;
  dark: string;
  light: string;
}) => {
  const { setTheme, theme: currentTheme } = useTheme();
  const { setOpen } = useMenuContext() || {};
  return (
    <Dialog>
      <DialogTrigger>{theme}</DialogTrigger>
      <DialogContent>
        <ul className="w-[100vh]">
          <Button
            className="text-2xl p-6 border-b-2 border-gray-300 mr-4"
            onClick={() => {
              setTheme("light");
              if (currentTheme === "dark") {
                setOpen!(false);
              }
            }}
          >
            {light}
          </Button>
          <Button
            className="text-2xl p-6"
            onClick={() => {
              setTheme("dark");
              if (currentTheme === "light") {
                setOpen!(false);
              }
            }}
          >
            {dark}
          </Button>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default MobileThemeSelection;
