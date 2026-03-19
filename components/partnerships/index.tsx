"use client";

import styles from "./index.module.css";
import { motion } from "framer-motion";

export default function Partnerships() {
  const partners = [
    "/partners/doves.png",
    "/partners/clevers.png",
    "/partners/clicknpay.png",
    "/partners/dalkieth.png",
    "/partners/fiat.avif",
    "/partners/parks.avif",
    "/partners/bachelors.avif",
    "/partners/havanna.avif",
    "/partners/edmark.avif",
    "/partners/3k-tv.avif",
    "/partners/shalom-jnr.png",
    "/partners/shalom-snr.png",
    "/partners/felicity.png",
    "/partners/global-dna.png",
    "/partners/foundation.png",
    "/partners/closure-tv.png",
    "/partners/corporate-wear.png",
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 16,
      },
    },
  };

  return (
    <div className={styles.partnerships_container}>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        className={styles.main_title}
      >
        Our Partners
      </motion.h3>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.partners_box}
      >
        {partners.map((itemSrc, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={styles.partner_card}
          >
            <img src={itemSrc} alt="partner logo" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
