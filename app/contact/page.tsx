"use client";

import Footer from "@/components/footer";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
      },
    },
  };

  return (
    <div className={styles.contact_container}>
      {/* NAV */}
      <motion.ul
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.contacts_nav}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </motion.ul>

      <div className={styles.spacer}></div>

      {/* TITLES */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={styles.contact_titles}
      >
        <motion.h2 variants={item}>Contact Us</motion.h2>
        <motion.p variants={item}>
          There are many ways to get in touch with us
        </motion.p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className={styles.contact_details}>
        {/* IMAGE */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="visible"
          className={styles.contact_img}
        >
          <img src="/contact/contact6.png" alt="Contact Us" />
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.contact_fields}
        >
          <div className={styles.contact_fields_combine}>
            <motion.input variants={item} placeholder="Fullname" />
            <motion.input variants={item} placeholder="Whatsapp Number" />
          </div>

          <motion.input variants={item} placeholder="Email" />

          <motion.textarea
            variants={item}
            className={styles.contact_message}
            placeholder="Leave your message here"
          />

          <motion.button
            variants={item}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className={styles.contact_submit_btn}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>

      {/* EXTRA CONTACT INFO */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={styles.contact_extra}
      >
        {/* DETAILS */}
        <motion.div variants={container} className={styles.contact_typable}>
          {[
            {
              icon: "/contact/contact2.png",
              label: "Phone",
              value: "+263 77 619 3195",
            },
            {
              icon: "/contact/email.png",
              label: "Email",
              value: "marketing@closureproductions.com",
            },
            {
              icon: "/contact/location.png",
              label: "Address",
              value: "9 Buckingham",
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className={styles.contact_detail_box}
            >
              <img src={info.icon} alt="icon" />
              <div>
                <p>{info.label}</p>
                <p>{info.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SOCIALS */}
        <motion.div variants={container} className={styles.contact_socials}>
          {["/icons/facebook.png", "/icons/instagram.png", "/icons/x.png"].map(
            (icon, i) => (
              <motion.a
                key={i}
                variants={item}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="#"
              >
                <img src={icon} alt="social" />
              </motion.a>
            ),
          )}
        </motion.div>
      </motion.div>

      {/* <Footer /> */}
    </div>
  );
}
