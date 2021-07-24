import React from "react";
import { Link } from "react-router-dom";
import styles from "./not-found.module.css";
const NotFound = () => {
  return (
    <section className={styles.error}>
      <div>
        <h1>Lost your way?</h1>
        <p>
          Sorry, we can't find that  page. You'll find lots to explore on the
          home page.{" "}
        </p>
        <Link to="/">Netflix Home</Link>
        <h2>
          Error Code <span>NESES-404</span>
        </h2>
      </div>
    </section>
  );
};

export default NotFound;
