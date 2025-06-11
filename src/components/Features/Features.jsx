/**
 * Features component renders a list of feature links with icons.
 * @returns {JSX.Element} The Features navigation list.
 */
import React from "react";
import styles from "./Features.module.css";
import toDoList from "../../Images/icon-todo.svg";
import calendar from "../../Images/icon-calendar.svg";
import reminders from "../../Images/icon-reminders.svg";
import planning from "../../Images/icon-planning.svg";

function Features() {
  return (
    <ul className={styles["features__list"]} aria-label="Features menu">
      <li className={styles["features__item"]}>
        <div
          className={`${styles["features__icon"]} ${styles["features__icon--todo"]}`}
        >
          <img
            src={toDoList}
            alt="ToDo List icon"
            className={styles["features__icon-img"]}
            loading="lazy"
          />
        </div>
        <a href="#" className={styles["features__link"]}>
          ToDo List
        </a>
      </li>
      <li className={styles["features__item"]}>
        <div
          className={`${styles["features__icon"]} ${styles["features__icon--calendar"]}`}
        >
          <img
            src={calendar}
            alt="Calendar icon"
            className={styles["features__icon-img"]}
            loading="lazy"
          />
        </div>
        <a href="#" className={styles["features__link"]}>
          Calendar
        </a>
      </li>
      <li className={styles["features__item"]}>
        <div
          className={`${styles["features__icon"]} ${styles["features__icon--reminders"]}`}
        >
          <img
            src={reminders}
            alt="Reminders icon"
            className={styles["features__icon-img"]}
            loading="lazy"
          />
        </div>
        <a href="#" className={styles["features__link"]}>
          Reminders
        </a>
      </li>
      <li className={styles["features__item"]}>
        <div
          className={`${styles["features__icon"]} ${styles["features__icon--planning"]}`}
        >
          <img
            src={planning}
            alt="Planning icon"
            className={styles["features__icon-img"]}
            loading="lazy"
          />
        </div>
        <a href="#" className={styles["features__link"]}>
          Planning
        </a>
      </li>
    </ul>
  );
}

export default React.memo(Features);
