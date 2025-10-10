"use client";

import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <p>© 2025 Closure Productions. All rights reserved.</p> */}
      <div className={styles.footer_gallery}>
        <div
          className={`${styles.footer_gallery_item} ${styles.footer_gallery_item_1}`}
        >
          <img src="/banner/potraits/pot1.jpg" alt="Image 1" />
        </div>
        <div
          className={`${styles.footer_gallery_item} ${styles.footer_gallery_item_2}`}
        >
          <img src="/banner/potraits/pot2.jpg" alt="Image 2" />
        </div>
        <div
          className={`${styles.footer_gallery_item} ${styles.footer_gallery_item_3}`}
        >
          <img src="/banner/potraits/pot3.jpg" alt="Image 3" />
        </div>
        <div
          className={`${styles.footer_gallery_item} ${styles.footer_gallery_item_4}`}
        >
          <img src="/banner/potraits/pot4.jpg" alt="Image 4" />
        </div>
        <div
          className={`${styles.footer_gallery_item} ${styles.footer_gallery_item_5}`}
        >
          <img src="/banner/potraits/pot5.jpg" alt="Image 5" />
        </div>
        <div
          className={`${styles.footer_gallery_item} ${styles.footer_gallery_item_6}`}
        >
          <img src="/banner/potraits/pot6.jpg" alt="Image 6" />
        </div>
        <div
          className={`${styles.footer_gallery_item} ${styles.footer_gallery_item_7}`}
        >
          <img src="/banner/potraits/pot7.jpg" alt="Image 7" />
        </div>
      </div>
    </footer>
  );
}
