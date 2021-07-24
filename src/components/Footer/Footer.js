import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3> Questions? Call 800-850-1262 </h3>
      <ul className={styles.links}>
        <li>FAQ</li>
        <li>help center</li>
        <li>acoount</li>
        <li>media center</li>
        <li>Investor Relations</li>
        <li>jobs</li>
        <li>redeem gift cards</li>
        <li>buy gift cards</li>
        <li>ways to watch</li>
        <li>Terms of Use</li>
        <li>Privacy </li>
        <li>Cookie Preferences</li>
        <li>Corporate Information </li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices </li>
        <li>Only on Netflix</li>
      </ul>
    </footer>
  );
};

export default Footer;
