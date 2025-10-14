"use client";

import styles from "./index.module.css";

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
      "We have a team to skilled personnel that have years of field experience.",
  },
  { id: 3, title: "Reliability", subtitle: "We deliver what we promise" },
];

export default function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_details}>
        <div className={styles.about_details_titles}>
          <h2>About Us</h2>
          <p>
            We are dedicated to delivering exceptional creative solutions with a
            focus on quality, communication, and reliability.
          </p>
        </div>
        <div className={styles.about_strength}>
          {qualities.map((quality) => (
            <div className={styles.about_quality_box} key={quality.id}>
              <img src="/checkmark.png" alt="icon" />
              <div className={styles.about_titles}>
                <h3>{quality.title}</h3>
                <p>{quality.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.about_college}>
        <div className={styles.col1}>
          <img src="/squares/sq1.jpg" alt="square" />
        </div>
        <div className={styles.col2}>
          <img src="/squares/sq2.jpg" alt="square" />
        </div>
        <div className={styles.col3}>
          <img src="/squares/sq3.jpg" alt="square" />
        </div>
        <div className={styles.col4}>
          <video
            src="/vids/birthday_vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.vid_shell}
          ></video>
        </div>
        <div className={styles.col5}>
          <div>
            <img src="/trophy.png" alt="icon" />
          </div>
          <h3>Explore our services</h3>
          <p>Explore how we can create memorable experiences for you</p>
          <button>See more</button>
        </div>
        <div className={styles.col6}>
          <div>
            <img src="/squares/sq4.jpg" alt="square" />
          </div>
          <div>
            <img src="/squares/sq5.jpg" alt="square" />
          </div>
        </div>
      </div>
    </div>
  );
}
