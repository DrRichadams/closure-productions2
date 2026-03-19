"use client";

import { motion } from "framer-motion";
import styles from "./contact.module.css";

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
      },
    },
  };

  return (
    <div className={styles.contact_container}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.contact_content}
      >
        <motion.h3 variants={item} className={styles.contact_title}>
          Contact Us
        </motion.h3>

        <motion.form variants={item} className={styles.contact_form}>
          {["Fullname", "Phone (+263...)", "Email Address"].map(
            (placeholder, i) => (
              <motion.input
                key={i}
                type="text"
                placeholder={placeholder}
                whileFocus={{ scale: 1.02 }}
              />
            ),
          )}

          <motion.textarea placeholder="Message" whileFocus={{ scale: 1.02 }} />

          <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
