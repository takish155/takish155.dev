import Image from "next/image";
import React from "react";
import ts from "@/../public/images/techstack_logos/ts.png";
import react from "@/../public/images/techstack_logos/react.png";
import next from "@/../public/images/techstack_logos/next.png";
import prisma from "@/../public/images/techstack_logos/prisma.svg";
import nextauth from "@/../public/images/techstack_logos/nextauth.png";
import mongodb from "@/../public/images/techstack_logos/mongodb.png";
import pusher from "@/../public/images/techstack_logos/pusher.jpg";
import nextintl from "@/../public/images/techstack_logos/nextinlt.png";
import sceenshot1 from "@/../public/images/zeetaa_screenshots/zeetaa1.png";
import screenshot2 from "@/../public/images/zeetaa_screenshots/zeetaa2.png";
import screenshot3 from "@/../public/images/zeetaa_screenshots/zeetaa3.png";
import { Code, ExternalLinkIcon, Github } from "lucide-react";
import Link from "next/link";
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
import { BackgroundGradient } from "@/components/ui/glowingcard";

const Project4 = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="mb-[5rem]">
      <BackgroundGradient className="rounded-[22px] p-1 bg-slate-950 flex content-center">
        <section className="w-full flex-wrap flex gap-[5%] justify-center items-center my-auto">
          <CardContent className="w-[55%] max-sm:w-[85%] max-sm:mt-6">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <Link
                    href="https://zeetaa.vercel.app/en"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={sceenshot1} alt="Zeetaa" />
                  </Link>
                </CarouselItem>
                <CarouselItem>
                  <Link
                    href="https://zeetaa.vercel.app/en"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={screenshot2} alt="Zeetaa" />
                  </Link>
                </CarouselItem>
                <CarouselItem>
                  <Link
                    href="https://zeetaa.vercel.app/en"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={screenshot3} alt="Zeetaa" />
                  </Link>
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious className="sm:hidden" />
            </Carousel>
          </CardContent>
          <CardHeader className="w-[40%] max-sm:w-full">
            <CardTitle className="mb-2">
              <h3 className="flex justify-between">
                &#x1F4F1; Zeetaa{" "}
                <div className="flex gap-2">
                  <Link
                    className="text-2xl"
                    href="https://zeetaa.vercel.app/en"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Visit website</span>
                    <ExternalLinkIcon />
                  </Link>
                  <Link
                    href="https://github.com/Takish155/Zeetaa"
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
              <p className="text-lg">{t("zeetaaDescription")}</p>
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
                src={pusher}
                alt="Pusher"
                width={25}
                height={25}
                className="max-w-[25px] max-h-[25px] h-auto w-auto"
              />

              <p>Pusher</p>
            </Card>
            <Card className="p-[0.65rem] rounded-xl flex gap-2">
              <Image
                src={nextintl}
                alt="NextIntl"
                width={25}
                height={25}
                className="max-w-[25px] max-h-[25px] h-auto w-auto"
              />

              <p>NextIntl</p>
            </Card>
          </CardContent>
        </section>
      </BackgroundGradient>
    </div>
  );
};

export default Project4;
