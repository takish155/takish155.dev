import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import React from "react";

const SelfSkillCard = ({
  skillImageSrc,
  skillName,
}: {
  skillImageSrc: string | StaticImageData;
  skillName: string;
}) => {
  return (
    <Card className="p-[0.65rem] rounded-xl flex gap-2">
      <Image
        src={skillImageSrc}
        alt={skillName}
        width={25}
        height={25}
        className="max-w-[25px] max-h-[25px] h-auto w-auto"
      />

      <p>{skillName}</p>
    </Card>
  );
};

export default SelfSkillCard;
