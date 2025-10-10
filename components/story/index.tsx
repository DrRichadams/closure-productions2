"use client";

import React, { useEffect } from "react";
import styles from "./index.module.css";

export default function VideoParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector(
        `.${styles.parallaxVideo}`
      ) as HTMLVideoElement | null;
      if (video) {
        const offset = window.scrollY * 0.2;
        video.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className={styles.parallaxSection}>
      {/* Background video */}
      <video
        className={styles.parallaxVideo}
        src="/vids/cp-ad.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay (dark gradient for readability) */}
      <div className={styles.overlay}></div>

      {/* Centered content */}
      <div className={styles.textContent}>
        <h2>Capturing Moments That Inspire</h2>
        <p>Every frame tells a story — yours is waiting to be told.</p>
        <button>Explore Our Work</button>
      </div>
    </section>
  );
}
``;
