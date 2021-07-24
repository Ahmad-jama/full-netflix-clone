import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import {
  Header,
  Footer,
  Previw,
  Accordion,
} from "../../components/HomeComponents";
import { previwData, accordionData } from "../../data";
import Start from "../startPage/Start";

const Home = () => {
  const [startPage, setStartPage] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setStartPage(false);
    }, 4000);
    return () => clearTimeout(interval);
  }, []);
  if (startPage) return <Start />;
  return (
    <section className={styles.home}>
      <Header />

      {previwData.map(
        ({ title, videoUrl, subTitle, desc, imgUrl, titleOrder }) => (
          <Previw
            title={title}
            videoUrl={videoUrl}
            subTitle={subTitle}
            desc={desc}
            imgUrl={imgUrl}
            titleOrder={titleOrder}
          />
        )
      )}

      <section className={styles.acoordion_container}>
        <h1>Frequently Asked Questions</h1>
        {accordionData.map(({ title, desc }) => {
          return <Accordion key={title} title={title} desc={desc} />;
        })}
      </section>

      <h3 className={styles.form_title}>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form className={styles.form}>
        <input type="email" required placeholder="Email address"></input>
        <button type="submit">get started</button>
      </form>
      <Footer />
    </section>
  );
};

export default Home;
