"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const FromBottomText = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) => {
  const isMobile = window.innerWidth <= 768;
  const ref = useRef(null);
  const control = useAnimationControls();
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px 200px 0px",
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        filter: "blur(3px)",
      }}
      variants={{
        visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.7, delay: delay }}
      animate={control}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default FromBottomText;
