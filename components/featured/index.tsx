"use client";

import styles from "./index.module.css";
import { motion } from "framer-motion";
import AnimatedContainer from "../Animations/AnimatedContainer";
import Link from "next/link";

export default function Featured() {
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
    <AnimatedContainer>
      <div className={styles.featured_container}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          onViewportLeave={(entry) => {
            entry?.target?.classList.add("hidden-state");
          }}
          className={styles.featured_titles}
        >
          <motion.div variants={item} className={styles.main_title_box}>
            <img src="/icons/jigsaw.png" alt="" />
            <h3>Featured Services</h3>
          </motion.div>
          <motion.p variants={item} className={styles.subtitle}>
            Explore our highlighted services designed to elevate your
            experience. Discover top-rated solutions tailored to meet your
            unique needs and achieve your goals.
          </motion.p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          onViewportLeave={(entry) => {
            entry?.target?.classList.add("hidden-state");
          }}
          className={styles.features_listing}
        >
          {featured.map((feature) => (
            <motion.div
              variants={item}
              key={feature.id}
              className={styles.feature_box}
            >
              <img src={feature.img} alt="feature image" />
              <h4>{feature.name}</h4>
              <p>{feature.description}</p>
              <div className={styles.feature_btn_box}>
                {/* <button className={styles.feature_btn}>
                  <img src="/icons/uptrend.png" alt="" />
                </button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className={styles.more_services_box}>
          <Link href={"/services"}>
            <button>Explore more services</button>
          </Link>
        </div>
      </div>
    </AnimatedContainer>
  );
}

const featured = [
  {
    id: 1,
    name: "Photography",
    description:
      "Capture life's precious moments with our expert photography services. From portraits to events, we deliver stunning images that tell your story.",
    img: "/featured/feat1.jpg",
  },
  {
    id: 2,
    name: "Weddings",
    description:
      "Make your special day unforgettable with our comprehensive wedding services. We handle every detail, from venue selection to floral arrangements, ensuring a seamless and magical celebration.",
    img: "/featured/feat2.jpg",
  },
  {
    id: 3,
    name: "Advertisement",
    description:
      "Boost your brand's visibility with our strategic advertisement solutions. We create impactful campaigns that reach your target audience and drive results.",
    img: "/featured/feat3.jpg",
  },
  {
    id: 4,
    name: "Filming",
    description:
      "Bring your vision to life with our professional filming services. Whether it's a corporate video or a creative project, we provide top-quality production from start to finish.",
    img: "/featured/feat4.jpg",
  },
];
