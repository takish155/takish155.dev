"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const ProjectImageHoverAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div whileHover={{ scale: 1.09 }} whileTap={{ scale: 1.05 }}>
      {children}
    </motion.div>
  );
};

export default ProjectImageHoverAnimation;
