"use client";
import styles from "./index.module.css";

export default function Partnerships() {
  return (
    <div className={styles.partnerships_container}>
      <h3 className={styles.main_title}>Our Partners</h3>
      <div className={styles.partners_box}>
        {partners.map((item, index) => (
          <img key={index} src={item} alt="partner" />
        ))}
      </div>
    </div>
  );
}

const partners = [
  "/partners/pat1.png",
  "/partners/pat2.png",
  //   "/partners/pat3.png",
  "/partners/pat4.png",
  "/partners/pat5.png",
  "/partners/pat6.avif",
  "/partners/pat7.avif",
  "/partners/pat8.avif",
  "/partners/pat9.avif",
  "/partners/pat10.avif",
  "/partners/pat11.avif",
  "/partners/pat12.avif",
  "/partners/pat13.avif",
  "/partners/pat14.avif",
  "/partners/pat15.avif",
  "/partners/pat16.avif",
];
