import React, { useRef, useEffect } from "react";

import styles from "./previw.module.css";
const Previw = ({ imgUrl, videoUrl, titleOrder, title, subTitle }) => {
  const video = useRef(null);
  useEffect(() => {
    window.addEventListener("onload", () => {
      video.current.play();
    });
  }, []);
  return (
    <section className={styles.box}>
      <section className={styles.container}>
        <section className={styles.title_box} style={{ order: titleOrder }}>
          <h1 className={styles.title}> {title} </h1>
          <h2 className={styles.sub_title}>{subTitle}</h2>
        </section>
        <section className={styles.img_container}>
          <img src={imgUrl} alt="Netflix vidoe or imgae" />
          <section className={styles.video}>
            <video
              style={
                {
                  // position: "absolute",
                  // top: "-28px",
                  // left: "36px",
                  // width: "82%",
                }
              }
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Previw;
