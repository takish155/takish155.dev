import FromBottomText from "@/animation/FromBottonText";
import { CardDescription } from "@/components/ui/card";
import React from "react";

const ProjectCardDescription = ({
  description,
  skillUsed,
}: {
  description: string;
  skillUsed: string;
}) => {
  return (
    <CardDescription>
      <FromBottomText delay={0.5}>
        <p className="text-lg mb-6 font-light">{description}</p>
      </FromBottomText>
      <FromBottomText delay={0.8}>
        <p className="text-base">{skillUsed}</p>
      </FromBottomText>
    </CardDescription>
  );
};

export default ProjectCardDescription;
