"use client";

import styles from "./page.module.css";
import panel_data from "../../data/services_panel_data.json";
import Banner_panel from "./banner-panel";
import services from "../../data/services.json";
import { div } from "motion/react-client";

export default function Services() {
  // console.log("panel data: ", panel_data);
  return (
    <div className={styles.services_container}>
      <div className={styles.services_banner}>
        {panel_data.map((pd) => (
          <Banner_panel panel={pd} key={pd.id} />
        ))}
      </div>
      <div className={styles.services_listing_container}>
        <div className={styles.services_listing_titles}>
          <h2>Our Service Offering</h2>
          <p>
            We specialize in visual storytelling for weddings, corporate events,
            and advertising campaigns. Our services include professional
            photography and videography, drone/aerial footage, event coverage,
            branded content for social media, and full post-production (color
            grading, editing, sound). Packages are tailored to each client with
            clear timelines and on-brand creative direction from concept through
            delivery.
          </p>
        </div>
        <div className={styles.services_listing_box}>
          {services.map((service) => (
            <div key={service.id} className={styles.service_box}>
              <img
                src={service.img}
                alt="service image"
                className={styles.service_img}
              />
              <div className={styles.service_details}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className={styles.service_list_container}>
                  {service.service_list.map((item) => (
                    <div key={item} className={styles.service_list_box}>
                      <img src={"/checkmark.png"} alt="list item" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <button>Contact to get a quote</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
