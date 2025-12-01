"use client";

import styles from "./page.module.css";
import panel_data from "../../data/services_panel_data.json";
import Banner_panel from "./banner-panel";
import services from "../../data/services.json";
import Footer from "@/components/footer";
import MainNav from "@/components/navigation/main-nav";
import { motion } from "framer-motion";

export default function Services() {
  // console.log("panel data: ", panel_data);
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
    <div className={styles.services_container}>
      <MainNav />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        onViewportLeave={(entry) => {
          entry?.target?.classList.add("hidden-state");
        }}
        className={styles.services_banner}
      >
        {panel_data.map((pd) => (
          <Banner_panel panel={pd} key={pd.id} variants={item} />
        ))}
      </motion.div>
      <div className={styles.services_listing_container}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          onViewportLeave={(entry) => {
            entry?.target?.classList.add("hidden-state");
          }}
          className={styles.services_listing_titles}
        >
          <motion.h2 variants={item}>Our Service Offering</motion.h2>
          <motion.p variants={item}>
            We specialize in visual storytelling for weddings, corporate events,
            and advertising campaigns. Our services include professional
            photography and videography, drone/aerial footage, event coverage,
            branded content for social media, and full post-production (color
            grading, editing, sound). Packages are tailored to each client with
            clear timelines and on-brand creative direction from concept through
            delivery.
          </motion.p>
        </motion.div>
        <div className={styles.services_listing_box}>
          {services.map((service, index) => (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              onViewportLeave={(entry) => {
                entry?.target?.classList.add("hidden-state");
              }}
              key={service.id}
              className={styles.service_box}
            >
              <motion.img
                variants={item}
                src={service.img}
                alt="service image"
                className={styles.service_img}
                style={{
                  gridColumn: index % 2 == 0 ? 1 : 2,
                  gridRow: 1,
                }}
              />
              <motion.div
                variants={item}
                className={styles.service_details}
                style={{
                  gridColumn: index % 2 == 0 ? 2 : 1,
                  gridRow: 1,
                }}
              >
                <h3 className={styles.service_details_title}>{service.name}</h3>
                <p className={styles.service_details_description}>
                  {service.description}
                </p>
                <div className={styles.service_list_container}>
                  {service.service_list.map((item) => (
                    <div key={item} className={styles.service_list_box}>
                      <img src={"/checkmark.png"} alt="list item" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <button className={styles.cta_btn}>
                  Contact to get a quote
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.custom_services}>
        <img src="/galaxy.png" alt="" />
        <div className={styles.custome_service_details}>
          <h4>In need of custome service?</h4>
          <p>
            With our wide range of expertise, we offer an option for the client
            to specify what they need and we will curate a service package that
            suits their business needs
          </p>
          <button className={styles.custome_cta_btn}>
            <div>
              <p>Request custome service</p>
            </div>
          </button>
        </div>
      </div>
      <div
        style={{
          height: "45vh",
        }}
      ></div>
      <Footer />
    </div>
  );
}
