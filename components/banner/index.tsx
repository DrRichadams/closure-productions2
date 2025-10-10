"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function Banner() {
  const [indices, setIndices] = useState(Array(college.length).fill(0));

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
      <Nav />
      <div className={styles.bg_img_box}>
        <img src="/banner/bg.jpg" alt="bg" className={styles.bg_img} />
        <div></div>
      </div>
      <div className={styles.banner_titles_box}>
        <img src="/cp-white.png" alt="logo" className={styles.banner_logo} />
        <h1 className={styles.main_title}>Sensational Inspirations</h1>
        <div className={styles.banner_subtitle_box}>
          <p>Home of magical moments</p>
        </div>
        <button className={styles.banner_cta}>Get in touch now</button>
        <div className={styles.banner_social_links}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.img_grid}>
        <div className={styles.overlay}></div>
        {college.map((col, colIndex) => (
          <div key={colIndex} className={styles[`col${colIndex + 1}`]}>
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
          </div>
        ))}
      </div>
      {/* <div className={styles.offset}></div> */}
    </div>
  );
}

function Nav() {
  return (
    <nav
      style={{
        // backgroundColor: "red",
        position: "absolute",
        zIndex: 500,
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        padding: "2rem 0",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          listStyle: "none",
        }}
      >
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Portifolio</Link>
        </li>
        <li>
          <Link href={"/"}>Contacts</Link>
        </li>
      </ul>
    </nav>
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
