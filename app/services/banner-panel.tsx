"use client";

import styles from "./page.module.css";
import { motion, Variants } from "framer-motion";

interface Panel {
  img: string;
  letter: string;
}

interface BannerPanelProps {
  panel: Panel;
  variants?: Variants;
}

export default function BannerPanel({ panel, variants }: BannerPanelProps) {
  return (
    <motion.div className={styles.banner_pannel} variants={variants}>
      <img src={`/banner/potraits/${panel.img}`} alt="panel" />
      <div className={styles.pannel_text_box}>
        <p>{panel.letter}</p>
      </div>
    </motion.div>
  );
}
