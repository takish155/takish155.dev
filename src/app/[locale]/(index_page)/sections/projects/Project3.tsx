import Image from "next/image";
import React from "react";
import ts from "@/../public/images/techstack_logos/ts.png";
import react from "@/../public/images/techstack_logos/react.png";
import next from "@/../public/images/techstack_logos/next.png";
import prisma from "@/../public/images/techstack_logos/prisma.svg";
import nextauth from "@/../public/images/techstack_logos/nextauth.png";
import mui from "@/../public/images/techstack_logos/mui.png";
import mongodb from "@/../public/images/techstack_logos/mongodb.png";
import rawg from "@/../public/images/techstack_logos/rawg.jpg";
import Link from "next/link";
import screenshot1 from "@/../public/images/gamiplex_screenshots/gamiplex1.png";
import screenshot2 from "@/../public/images/gamiplex_screenshots/gamiplex2.png";
import screenshot3 from "@/../public/images/gamiplex_screenshots/gamiplex3.png";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Code, ExternalLinkIcon } from "lucide-react";
import ProjectSectionAnimation from "@/animation/ProjectSectionAnimation";
import ProjectImageHoverAnimation from "@/animation/ProjectImageHoverAnimation";

const Project3 = () => {
  const t = useTranslations("HomePage");
  return (
    <ProjectSectionAnimation>
      <Card className="w-full flex-wrap flex gap-[5%] justify-center items-center mb-12">
        <CardHeader className="w-[40%] max-sm:order-1 max-sm:w-full">
          <CardTitle className="mb-2">
            <h3 className="flex justify-between">
              &#x1F3AE; Gamiplex{" "}
              <div className="flex gap-2">
                <Link
                  className="text-2xl"
                  href="https://gamiplex.vercel.app/"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Visit website</span>
                  <ExternalLinkIcon />
                </Link>
                <Link
                  href="https://github.com/Takish155/Gamiplex"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">View source code in Github</span>
                  <Code />
                </Link>
              </div>
            </h3>
          </CardTitle>
          <CardDescription>
            <p className="text-lg">{t("gamiplexDescription")}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[55%] max-sm:mt-6 max-sm:w-[80%]">
          <Carousel opts={{ loop: true }}>
            <ProjectImageHoverAnimation>
              <CarouselContent>
                <CarouselItem>
                  <Image src={screenshot1} alt="Zeetaa" />
                </CarouselItem>
                <CarouselItem>
                  <Image src={screenshot2} alt="Zeetaa" />
                </CarouselItem>
                <CarouselItem>
                  <Image src={screenshot3} alt="Zeetaa" />
                </CarouselItem>
              </CarouselContent>
            </ProjectImageHoverAnimation>
            <CarouselPrevious />
            <CarouselNext className="sm:hidden" />
          </Carousel>
        </CardContent>
        <CardContent className="w-full flex gap-4 flex-wrap justify-center max-sm:order-3">
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={ts}
              alt="Typescript"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Typescript</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image src={react} alt="React" width={25} height={25} />
            <p>React</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={next}
              alt="Next.js"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Next</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={prisma}
              alt="Prisma"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Prisma</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={nextauth}
              alt="NextAuth"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>NextAuth</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={rawg}
              alt="Rawg Logo"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>Rawg API</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={mongodb}
              alt="MongoDB"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>MongoDB</p>
          </Card>
          <Card className="p-[0.65rem] rounded-xl flex gap-2">
            <Image
              src={mui}
              alt="Material UI"
              width={25}
              height={25}
              className="max-w-[25px] max-h-[25px] h-auto w-auto"
            />

            <p>MaterialUI</p>
          </Card>
        </CardContent>
      </Card>
    </ProjectSectionAnimation>
  );
};

export default Project3;
