"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const FromBottomAnimation = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const control = useAnimationControls();
  const inView = useInView(ref, {
    once: true,
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
        y: 150,
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
    </motion.div>
  );
};

export default FromBottomAnimation;
