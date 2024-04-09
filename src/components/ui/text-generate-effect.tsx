"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const locale = useLocale();
  const [scope, animate] = useAnimate();
  let wordsArray = locale !== "ja" ? words.split(" ") : words.split("");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: locale !== "ja" ? stagger(0.2) : stagger(0.03),
      }
    );
  }, [animate, locale]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}
              {locale !== "ja" ? " " : ""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn("text-foreground font-medium text-paragraph", className)}
    >
      <div className="mt-4">
        <div className=" dark:text-white text-black text-paragraph leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
