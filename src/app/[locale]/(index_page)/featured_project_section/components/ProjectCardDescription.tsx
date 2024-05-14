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
        <h5 className="text-lg mb-6 font-light">{description}</h5>
      </FromBottomText>
      <FromBottomText delay={0.8}>
        <h5 className="text-base">{skillUsed}</h5>
      </FromBottomText>
    </CardDescription>
  );
};

export default ProjectCardDescription;
