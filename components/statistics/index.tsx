"use client";

import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export default function Statistics() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className={styles.statistics_container}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        onViewportLeave={(entry) => {
          entry?.target?.classList.add("hidden-state");
        }}
      >
        <motion.h1 variants={item} className={styles.title}>
          Trusted by Thousands, Proven by Results
        </motion.h1>

        <motion.p variants={item} className={styles.subtitle}>
          Discover the impact behind our numbers — a community of satisfied
          clients, successful events, and a passionate team driving excellence
          every day.
        </motion.p>
      </motion.div>
      {/* STATS LISTING */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        onViewportLeave={(entry) => {
          entry?.target?.classList.add("hidden-state");
        }}
        className={styles.stat_box_container}
      >
        <motion.div variants={item} className={styles.stat_box}>
          <img src="/stats/users.png" alt="stat icon" />
          <p className={styles.stat_number}>2k+</p>
          <h3>Our clients</h3>
          <p>Follow thousands of professionals who trust our services</p>
        </motion.div>
        <motion.div variants={item} className={styles.stat_box}>
          <img src="/stats/event.png" alt="stat icon" />
          <p className={styles.stat_number}>1k+</p>
          <h3>Events completed</h3>
          <p>Quality that comes from repeated service offering</p>
        </motion.div>
        <motion.div variants={item} className={styles.stat_box}>
          <img src="/stats/happy.png" alt="stat icon" />
          <p className={styles.stat_number}>99%</p>
          <h3>Happy clients</h3>
          <p>Join thousands of clients who enjoy our work</p>
        </motion.div>
        <motion.div variants={item} className={styles.stat_box}>
          <img src="/stats/team.png" alt="stat icon" />
          <p className={styles.stat_number}>60+</p>
          <h3>Team members</h3>
          <p>
            We have a team of dedicated personnel who are excited about what we
            do
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
