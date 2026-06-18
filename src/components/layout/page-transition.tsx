"use client";

import { motion } from "framer-motion";
import { springTransition } from "@/styles/animations";

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springTransition}
    >
      {children}
    </motion.div>
  );
}

export { PageTransition };
