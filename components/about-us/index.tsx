"use client";

import styles from "./index.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

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

const qualities = [
  {
    id: 1,
    title: "Quality Work",
    subtitle: "We provide quality work to our clients",
  },
  {
    id: 2,
    title: "Skilled Personnel",
    subtitle:
      "We have a team of skilled personnel that have years of field experience.",
  },
  { id: 3, title: "Reliability", subtitle: "We deliver what we promise" },
];

export default function About() {
  return (
    <div className={styles.about_container} id="about">
      <div className={styles.about_details}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          onViewportLeave={(entry) => {
            entry?.target?.classList.add("hidden-state");
          }}
          className={styles.about_details_titles}
        >
          <motion.h2 variants={item}>About Us</motion.h2>
          <motion.p variants={item}>
            We are dedicated to delivering exceptional creative solutions with a
            focus on quality, communication, and reliability.
          </motion.p>
        </motion.div>
        {/* <div className={styles.about_strength}> */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          onViewportLeave={(entry) => {
            entry?.target?.classList.add("hidden-state");
          }}
          className={styles.about_strength}
        >
          {qualities.map((quality) => (
            <motion.div
              variants={item}
              className={styles.about_quality_box}
              key={quality.id}
            >
              <img src="/checkmark.png" alt="icon" />
              <div className={styles.about_titles}>
                <h3>{quality.title}</h3>
                <p>{quality.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        onViewportLeave={(entry) => {
          entry?.target?.classList.add("hidden-state");
        }}
        className={styles.about_college}
      >
        <motion.div variants={item} className={styles.col1}>
          <img src="/squares/sq1.jpg" alt="square" />
        </motion.div>
        <motion.div variants={item} className={styles.col2}>
          <img src="/squares/sq2.jpg" alt="square" />
        </motion.div>
        <motion.div variants={item} className={styles.col3}>
          <img src="/squares/sq3.jpg" alt="square" />
        </motion.div>
        <motion.div variants={item} className={styles.col4}>
          <video
            src="/vids/birthday_vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.vid_shell}
          ></video>
        </motion.div>
        <motion.div variants={item} className={styles.col5}>
          <div>
            <img src="/trophy.png" alt="icon" />
          </div>
          <h3>Explore our services</h3>
          <p>Explore how we can create memorable experiences for you</p>
          <Link href={"/services"}>
            <button className={styles.about_btn}>See more</button>
          </Link>
        </motion.div>
        <motion.div variants={item} className={styles.col6}>
          <div>
            <img
              src="/squares/sq4.jpg"
              alt="square"
              className={styles.col6_img1}
            />
          </div>
          <div>
            <img src="/squares/sq5.jpg" alt="square" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
