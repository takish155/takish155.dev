"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const MobileLanguageSelection = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger>Language | 言語</DialogTrigger>
      <DialogContent>
        <ul className="w-[100vh]">
          <Button
            className="text-2xl p-6 border-b-2 border-gray-300 mr-4"
            onClick={() => router.push(pathname.replace("ja", "en"))}
          >
            English
          </Button>
          <Button
            className="text-2xl p-6"
            onClick={() => router.push(pathname.replace("en", "ja"))}
          >
            日本語
          </Button>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default MobileLanguageSelection;
