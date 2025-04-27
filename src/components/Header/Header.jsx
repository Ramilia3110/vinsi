import React from "react";
import styles from "./Header.module.scss";

import logo from "../../../public/vinsi.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo  of Vinsi" />
        <p>Vinsi</p>
      </div>

      <div className={styles.centerSection}>
        <form action="" className={styles.searchForm}>
          <input type="search" placeholder="Search..." />
          <button type="submit">Go</button>
        </form>

        <a href="mailto:hello@vinsi.co" className={styles.startButton}>
          Start Your Journey
        </a>
      </div>
    </header>
  );
}
