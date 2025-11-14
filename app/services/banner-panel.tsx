"use client";

import styles from "./page.module.css";

export default function Banner_panel({ panel }: any) {
  return (
    <div className={styles.banner_pannel}>
      <img src={`/banner/potraits/${panel.img}`} alt="panel" />
      <div className={styles.pannel_text_box}>
        <p>{panel.letter}</p>
      </div>
    </div>
  );
}
