"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Banner_panel({ panel, variants }: any) {
  return (
    <motion.div className={styles.banner_pannel} variants={variants}>
      <img src={`/banner/potraits/${panel.img}`} alt="panel" />
      <div className={styles.pannel_text_box}>
        <p>{panel.letter}</p>
      </div>
    </motion.div>
  );
}
