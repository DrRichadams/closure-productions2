"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import MainNav from "../navigation/main-nav";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Banner() {
  const [indices, setIndices] = useState(Array(college.length).fill(0));
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  // amount = how much of it must be visible (0–1)
  // once = false means it triggers both in/out

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

  useEffect(() => {
    // Create one interval per column with random timing
    const intervals = college.map((col, colIndex) => {
      const randomDelay = Math.floor(Math.random() * 5000) + 3000; // 3–8 sec

      return setInterval(() => {
        setIndices((prev) => {
          const updated = [...prev];
          const max = col.length;
          updated[colIndex] = (updated[colIndex] + 1) % max;
          return updated;
        });
      }, randomDelay);
    });

    // Cleanup all intervals when component unmounts
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className={styles.banner}>
      <MainNav />
      <div className={styles.bg_img_box}>
        <img src="/banner/bg.jpg" alt="bg" className={styles.bg_img} />
        <div></div>
      </div>
      <div className={styles.banner_titles_box}>
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src="/cp-white.png"
          alt="logo"
          className={styles.banner_logo}
        />
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.main_title}
        >
          Sensational Inspirations
        </motion.h1>
        <div className={styles.banner_subtitle_box}>
          <p>Home of magical moments</p>
        </div>
        <button className={styles.banner_cta}>
          <div>
            <p>Get in touch now</p>
          </div>
        </button>
        <div className={styles.banner_social_links}>
          <div className={styles.banner_social_link_box}>
            <div>
              <img src="/icons/facebook.png" alt="Facebook" />
            </div>
          </div>
          <div className={styles.banner_social_link_box}>
            <div>
              <img src="/icons/instagram.png" alt="Instagram" />
            </div>
          </div>
          <div className={styles.banner_social_link_box}>
            <div>
              <img src="/icons/x.png" alt="X" />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={styles.img_grid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        onViewportLeave={(entry) => {
          entry?.target?.classList.add("hidden-state");
        }}
      >
        <div className={styles.overlay}></div>
        {college.map((col, colIndex) => (
          <motion.div
            key={colIndex}
            className={styles[`col${colIndex + 1}`]}
            variants={item}
          >
            {col.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt=""
                className={`${styles.fade} ${
                  imgIndex === indices[colIndex]
                    ? styles.visible
                    : styles.hidden
                }`}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
      {/* <div className={styles.offset}></div> */}
    </div>
  );
}

const college = [
  [
    "/banner/potraits/pot1.jpg",
    "/banner/anp2.jpg",
    "/banner/potraits/pot1.jpg",
    "/banner/anp7.jpg",
    "/banner/anp8.jpg",
    "/banner/anp17.jpg",
    "/banner/anp18.jpg",
    "/banner/anp19.jpg",
  ],
  [
    "/banner/potraits/pot2.jpg",
    "/banner/anp3.jpg",
    "/banner/potraits/pot2.jpg",
    "/banner/anp9.jpg",
    "/banner/anp20.jpg",
    "/banner/anp21.jpg",
  ],
  [
    "/banner/potraits/pot3.jpg",
    "/banner/anp5.jpg",
    "/banner/anp11.jpg",
    "/banner/anp22.jpg",
  ],
  ["/banner/potraits/pot4.jpg", "/banner/anp12.jpg"],
  [
    "/banner/potraits/pot5.jpg",
    "/banner/anp6.jpg",
    "/banner/anp13.jpg",
    "/banner/anp23.jpg",
  ],
  [
    "/banner/potraits/pot6.jpg",
    "/banner/anp4.jpg",
    "/banner/potraits/pot6.jpg",
    "/banner/anp14.jpg",
    "/banner/anp24.jpg",
    "/banner/anp25.jpg",
  ],
  [
    "/banner/potraits/pot7.jpg",
    "/banner/anp3.jpg",
    "/banner/potraits/pot7.jpg",
    "/banner/anp15.jpg",
    "/banner/anp16.jpg",
    "/banner/anp26.jpg",
    "/banner/anp27.jpg",
    "/banner/anp28.jpg",
  ],
];
