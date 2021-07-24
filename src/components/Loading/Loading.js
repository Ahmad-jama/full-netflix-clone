import React from "react";
import styles from "./loading.module.css";
const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <div className={styles.bulletouter}>
          <div className={styles.bulletinner}></div>
          <div className={styles.mask}></div>
          <div className={styles.dot}></div>
        </div>
        <p>loading!</p>
      </div>
    </div>
  );
};

export default Loading;
