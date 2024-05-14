"use client";

import React, { useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import HeroSection from "@/app/[locale]/(index_page)/hero_section/_HeroSection";
import ProductCard from "./product-card";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  }[];
}) => {
  const firstRow = useMemo(() => products.slice(0, 5), [products]);
  const secondRow = useMemo(() => products.slice(5, 10), [products]);
  const thirdRow = useMemo(() => products.slice(10, 15), [products]);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  const firstRowCards = useMemo(
    () =>
      firstRow.map((product) => {
        return (
          <ProductCard
            product={product}
            translate={translateX}
            key={product.title}
          />
        );
      }),
    [firstRow, translateX]
  );
  const secondRowCards = useMemo(
    () =>
      secondRow.map((product) => {
        return (
          <ProductCard
            product={product}
            translate={translateXReverse}
            key={product.title}
          />
        );
      }),
    [secondRow, translateXReverse]
  );
  const thirdRowCards = useMemo(
    () =>
      thirdRow.map((product) => {
        return (
          <ProductCard
            product={product}
            translate={translateX}
            key={product.title}
          />
        );
      }),
    [thirdRow, translateX]
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] pb-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRowCards}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRowCards}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRowCards}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return <HeroSection />;
};
