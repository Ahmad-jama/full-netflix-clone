import React, { useState } from "react";
import styles from "./accordion.module.css";
const Accordion = ({ title, desc }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.accordion}>
      <section>
        <section className={styles.title_box} onClick={() => setOpen(!open)}>
          <h3 className={styles.tilte}>{title}</h3>
          <section className={styles.symbol}>{open ? "-" : "+"}</section>
        </section>

        <section
          className={styles.content}
          style={{
            maxHeight: open && "1100px",
          }}
        >
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        </section>
      </section>
    </section>
  );
};

export default Accordion;
