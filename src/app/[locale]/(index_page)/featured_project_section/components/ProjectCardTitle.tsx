import FromBottomText from "@/animation/FromBottonText";
import { CardTitle } from "@/components/ui/card";
import { Code, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectCardTitleProps {
  title: string;
  url: string;
  sourceCodeURL: string;
}

const ProjectCardTitle = ({ project }: { project: ProjectCardTitleProps }) => {
  return (
    <CardTitle className="mb-2">
      <FromBottomText delay={0}>
        <h3 className="flex justify-between">
          {project.title}
          <div className="flex gap-2">
            <Link
              className="text-2xl"
              href={project.url}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Visit website</span>
              <ExternalLinkIcon />
            </Link>
            <Link
              href={project.sourceCodeURL}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">View source code in Github</span>
              <Code />
            </Link>
          </div>
        </h3>
      </FromBottomText>
    </CardTitle>
  );
};

export default ProjectCardTitle;
