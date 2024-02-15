import { Card } from "@/components/ui/card";
import React from "react";

const Footer = () => {
  return (
    <Card className="w-full bg-red h-[15vh] flex items-center justify-center">
      <p className="text-center text-lg">
        Copyright &copy; 2024. All Rights Reserved.
      </p>
    </Card>
  );
};

export default Footer;
