import React from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const SingUp = ({ change }) => {

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>sign up</h1>
      <form className={styles.login_form}>
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />

        <input placeholder="Email or phone number" type="email" />
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <Link to="/browse" className={styles.submit_btn} type="submit">
          sing in
        </Link>
        <section>
          <section>
            <input type="checkbox" id="check" />{" "}
            <label htmlFor="check">Rememper me</label>
          </section>{" "}
          <button>Need help?</button>
        </section>
      </form>
      <button className={styles.facebook_btn}>Login with Facebook</button>
      <p>
        already have acoont <span onClick={() => change(true)}>login now</span>
      </p>
      <p>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <strong>learn more</strong>
      </p>
    </section>
  );
};

export default SingUp;
