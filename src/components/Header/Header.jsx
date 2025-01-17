import React, { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>W.</div>

      {/* Hamburger menu for smaller screens */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation links */}
      <nav className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <a href="#explore">Explore</a>
          </li>
          <li>
            <a href="#directory">Directory</a>
          </li>
          <li>
            <a href="#academy">Academy</a>
          </li>
          <li>
            <a href="#conferences">Conferences</a>
          </li>
          <li>
            <a href="#market">Market</a>
          </li>
        </ul>

        {/* Search form */}
        <form action="" className={styles.searchForm}>
          <input type="search" placeholder="Search..." />
          <button type="submit">S</button>
        </form>

        {/* Login options */}
        <ul className={styles.login}>
          <li>
            <a href="#login">Log in</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
        </ul>

        {/* Upload options */}
        <ul className={styles.upload}>
          <li>
            <a href="#be-pro">Be Pro</a>
          </li>
          <li>
            <a href="#submit-website">Submit Website</a>
          </li>
        </ul>
      </nav>
      <div className="profileIcon">👤</div>
    </header>
  );
}
