import styles from "./page.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <ul className={styles.contacts_nav}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/services"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact us</Link>
        </li>
      </ul>
      <div style={{ height: "80px" }}></div>
      <div className={styles.contact_titles}>
        <h2>Contact Us</h2>
        <p>There are many ways to get in touch with us</p>
      </div>
      <div className={styles.contact_details}>
        <div className={styles.contact_img}>
          <img src="/contact/contact.png" alt="Contact Us" />
        </div>
        <form className={styles.contact_fields}>
          <div className={styles.contact_fields_combine}>
            <input type="text" placeholder="Fullname" />
            <input type="text" placeholder="Whatsapp Number" />
          </div>
          <input type="text" placeholder="Email" />
          <textarea
            name=""
            id=""
            className={styles.contact_message}
            placeholder="Leave your message here"
          ></textarea>
          <button className={styles.contact_submit_btn}>Submit</button>
        </form>
      </div>
    </div>
  );
}
