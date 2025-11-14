"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import styles from "./animated-container.module.css";

export default function AnimatedContainer({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ width: "90%" }}
      animate={{ width: isInView ? "100%" : "90%" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={styles.ani_container}
    >
      {children}
    </motion.div>
  );
}
