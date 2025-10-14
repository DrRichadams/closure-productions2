import Banner from "@/components/banner";
import styles from "./page.module.css";
import Footer from "@/components/footer";
import Partnerships from "@/components/partnerships";
import VideoParallax from "@/components/story";
import Statistics from "@/components/statistics";
import About from "@/components/about-us";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
      <VideoParallax />
      <Partnerships />

      <Statistics />
      <About />
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "50vh",
          backgroundColor: "#000015",
        }}
      ></div>
      <Footer />
    </div>
  );
}
