"use client";

import styles from "./index.module.css";

export default function Newsletter() {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.newsletter_inner_container}>
        <div className={styles.letter_left}>
          <img src="/newsletter/news.webp" alt="newsletter_image" />
        </div>
        <div className={styles.letter_right}>
          <div className={styles.letter_titles}>
            <h3>Sign up to our newsletter.</h3>
            <p>Be the first to know about our latest updates and offers.</p>
          </div>
          <form className={styles.letter_form}>
            <input type="text" placeholder="Enter your email" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
