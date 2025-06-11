/**
 * Company component renders a list of company-related navigation links.
 * @returns {JSX.Element} The Company navigation list.
 */
import React from "react";
import styles from "./Company.module.css";

function Company() {
  return (
    <ul className={styles["company__list"]} aria-label="Company menu">
      <li className={styles["company__item"]}>
        <a href="#" className={styles["company__link"]}>
          History
        </a>
      </li>
      <li className={styles["company__item"]}>
        <a href="#" className={styles["company__link"]}>
          Our Team
        </a>
      </li>
      <li className={styles["company__item"]}>
        <a href="#" className={styles["company__link"]}>
          Blog
        </a>
      </li>
    </ul>
  );
}

export default React.memo(Company);
