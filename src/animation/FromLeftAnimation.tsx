"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const FromLeftAnimation = ({ children }: { children: ReactNode }) => {
  const isMobile = window.innerWidth <= 768;
  const ref = useRef(null);
  const control = useAnimationControls();
  const inView = useInView(ref, {
    once: true,
    margin: isMobile ? "0px 0px 0px 0px" : "0px 400px -50px 0px",
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView, control, isMobile]);

  return (
    <motion.section
      className="mb-[25rem]"
      initial={{
        opacity: 0,
        x: isMobile ? 0 : -200,
        y: isMobile ? 200 : 0,
        filter: "blur(3px)",
      }}
      variants={{
        visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 1 }}
      animate={control}
      ref={ref}
    >
      {children}
    </motion.section>
  );
};

export default FromLeftAnimation;
