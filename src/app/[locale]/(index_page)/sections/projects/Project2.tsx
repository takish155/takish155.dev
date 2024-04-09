import Image from "next/image";
import React from "react";
import ts from "@/../public/images/techstack_logos/ts.png";
import react from "@/../public/images/techstack_logos/react.png";
import tailwind from "@/../public/images/techstack_logos/tailwind.png";
import mui from "@/../public/images/techstack_logos/mui.png";
import unsplash from "@/../public/images/techstack_logos/unplash.jpeg";
import screenshot1 from "@/../public/images/ifindgallery_screenshots/screenshot1.png";
import screenshot2 from "@/../public/images/ifindgallery_screenshots/screenshot2.png";
import screenshot3 from "@/../public/images/ifindgallery_screenshots/screenshot3.png";
import screenshot4 from "@/../public/images/ifindgallery_screenshots/screenshot4.png";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, ExternalLinkIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectSectionAnimation from "@/animation/ProjectSectionAnimation";
import ProjectImageHoverAnimation from "@/animation/ProjectImageHoverAnimation";
import { BackgroundGradient } from "@/components/ui/glowingcard";

const Project2 = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="my-[5rem]">
      <BackgroundGradient className="rounded-[22px] p-1 bg-slate-950 flex content-center">
        <section className="w-full flex-wrap flex gap-[5%] justify-center items-center">
          <CardContent className="w-[55%] max-sm:w-[85%] max-sm:mt-6">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <Link
                    href="https://ifindgallery.netlify.app/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={screenshot1} alt="iFindGallery" />
                  </Link>
                </CarouselItem>
                <CarouselItem>
                  <Link
                    href="https://ifindgallery.netlify.app/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={screenshot2} alt="iFindGallery" />
                  </Link>
                </CarouselItem>
                <CarouselItem>
                  <Link
                    href="https://ifindgallery.netlify.app/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={screenshot3} alt="iFindGallery" />
                  </Link>
                </CarouselItem>
                <CarouselItem>
                  <Link
                    href="https://ifindgallery.netlify.app/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={screenshot4} alt="iFindGallery" />
                  </Link>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="sm:hidden" />
              <CarouselNext />
            </Carousel>
          </CardContent>
          <CardHeader className="w-[40%] max-sm:w-full">
            <CardTitle className="mb-2">
              <h3 className="flex justify-between">
                &#x1F4F8; iFindGallery{" "}
                <div className="flex gap-2">
                  <Link
                    className="text-2xl"
                    href="https://ifindgallery.netlify.app/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Visit website</span>
                    <ExternalLinkIcon />
                  </Link>
                  <Link
                    href="https://github.com/Takish155/iFindGallery"
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
              <p className="text-lg">{t("iFindGalleryDescription")}</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full flex gap-4 flex-wrap justify-center">
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
                src={unsplash}
                alt="Unsplash API"
                width={25}
                height={25}
                className="max-w-[25px] max-h-[25px] h-auto w-auto"
              />

              <p>Unsplash API</p>
            </Card>
            <Card className="p-[0.65rem] rounded-xl flex gap-2">
              <Image
                src={tailwind}
                alt="Tailwind CSS"
                width={25}
                height={25}
                className="max-w-[25px] max-h-[25px] h-auto w-auto"
              />

              <p>Tailwind CSS</p>
            </Card>
            <Card className="p-[0.65rem] rounded-xl flex gap-2">
              <Image
                src={mui}
                alt="Material UI"
                width={25}
                height={25}
                className="max-w-[25px] max-h-[25px] h-auto w-auto"
              />

              {/* id of contact isnt part of the card */}
              <p id="contact">Material UI</p>
            </Card>
          </CardContent>
        </section>
      </BackgroundGradient>
    </div>
  );
};

export default Project2;
