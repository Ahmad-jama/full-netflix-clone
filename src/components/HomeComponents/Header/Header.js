import React from "react";
import styles from "./header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className={styles.overlay}></section>
      <section className={styles.header}>
        <Nav />
        <section className={styles.content}>
          <h1 className={styles.title}>
            Unlimited movies, TV shows, and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className={styles.form}>
            <input type="email" placeholder="Email address"></input>
            <Link to="/browse" type="submit">
              get started
            </Link>
          </form>
        </section>
      </section>
    </>
  );
};

export default Header;
