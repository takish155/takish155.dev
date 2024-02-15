"use client";

import { useMenuContext } from "@/context/MenuContext";
import { MenuIcon } from "lucide-react";
import React from "react";

const MenuIconButton = () => {
  const { setOpen } = useMenuContext() || {};

  return (
    <MenuIcon
      aria-label="menu-button"
      className="hover:cursor-pointer sm:hidden"
      size={50}
      onClick={() => setOpen!(true)}
    />
  );
};

export default MenuIconButton;
