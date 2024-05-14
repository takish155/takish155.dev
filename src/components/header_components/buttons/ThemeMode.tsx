"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeMode = () => {
  const { setTheme, theme: currentTheme } = useTheme();

  if (currentTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        aria-label="Toogle theme to dark mode"
      >
        <Moon />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme("light")}
      aria-label="Toogle theme to light mode"
    >
      <Sun />
    </button>
  );
};

export default ThemeMode;
