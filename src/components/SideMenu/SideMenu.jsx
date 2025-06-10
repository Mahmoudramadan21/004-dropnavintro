/**
 * SideMenu component renders a mobile side navigation menu.
 * This component is designed to be visible only on screens smaller than 768px.
 * @param {Object} props - Component props.
 * @param {boolean} props.openMenu - Controls menu visibility.
 * @param {Function} props.setOpenMenu - Updates menu visibility state.
 * @returns {JSX.Element} The SideMenu component, rendered only for mobile views.
 */
import React, { useState, useCallback } from "react";
import styles from "./SideMenu.module.css";
import arrowDown from "../../Images/icon-arrow-down.svg";
import closeMenu from "../../Images/icon-close-menu.svg";
import Features from "../Features/Features";
import Company from "../Company/Company";

function SideMenu({ openMenu, setOpenMenu }) {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const toggleFeatures = useCallback((e) => {
    e.preventDefault();
    setOpenFeatures((prev) => !prev);
  }, []);
  const toggleCompany = useCallback((e) => {
    e.preventDefault();
    setOpenCompany((prev) => !prev);
  }, []);

  const closeMenuHandler = useCallback(() => {
    console.log("Closing menu");
    setOpenMenu(false);
  }, [setOpenMenu]);

  return (
    <>
      {openMenu && (
        <div
          className={styles.sidemenu__overlay}
          onClick={closeMenuHandler}
          aria-hidden={!openMenu}
        />
      )}
      <aside
        className={`${styles.sidemenu} ${
          openMenu ? styles["sidemenu--open"] : ""
        }`}
        aria-hidden={!openMenu}
      >
        <div className={styles.sidemenu__close}>
          <a
            href="#"
            onClick={closeMenuHandler}
            className={styles["sidemenu__link"]}
            tabIndex={openMenu ? 0 : -1}
          >
            <img
              src={closeMenu}
              alt="Close mobile menu"
              className={styles["sidemenu__close-icon"]}
              loading="lazy"
            />
          </a>
        </div>
        <ul
          className={styles.sidemenu__links}
          aria-label="Mobile navigation links"
        >
          <li className={styles.sidemenu__item}>
            <a
              href="#"
              className={styles.sidemenu__link}
              onClick={(e) => {
                e.stopPropagation();
                toggleFeatures();
              }}
              aria-expanded={openFeatures}
              aria-controls="features-menu"
              tabIndex={openMenu ? 0 : -1}
              onKeyDown={(e) => e.key === "Enter" && toggleFeatures(e)}
            >
              Features
            </a>
            <img
              src={arrowDown}
              alt="Toggle Features menu"
              className={styles.sidemenu__arrow}
              style={{
                transform: openFeatures ? "rotate(180deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            />
            {openFeatures && (
              <ul className={styles["sidemenu__sublist"]} id="features-menu">
                <Features />
              </ul>
            )}
          </li>
          <li className={styles.sidemenu__item}>
            <a
              href="#"
              className={styles.sidemenu__link}
              onClick={(e) => {
                e.stopPropagation();
                toggleCompany();
              }}
              aria-expanded={openCompany}
              aria-controls="company-menu"
              tabIndex={openMenu ? 0 : -1}
              onKeyDown={(e) => e.key === "Enter" && toggleCompany(e)}
            >
              Company
            </a>
            <img
              src={arrowDown}
              alt="Toggle Company menu"
              className={styles.sidemenu__arrow}
              style={{
                transform: openCompany ? "rotate(180deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            />
            {openCompany && (
              <ul className={styles["sidemenu__sublist"]} id="company-menu">
                <Company />
              </ul>
            )}
          </li>
          <li className={styles.sidemenu__item}>
            <a
              href="#"
              className={styles.sidemenu__link}
              tabIndex={openMenu ? 0 : -1}
            >
              Careers
            </a>
          </li>
          <li className={styles.sidemenu__item}>
            <a
              href="#"
              className={styles.sidemenu__link}
              tabIndex={openMenu ? 0 : -1}
            >
              About
            </a>
          </li>
        </ul>
        <div className={styles.sidemenu__auth}>
          <a
            href="#"
            className={styles["sidemenu__auth-login"]}
            tabIndex={openMenu ? 0 : -1}
          >
            Login
          </a>
          <a
            href="#"
            className={styles["sidemenu__auth-register"]}
            tabIndex={openMenu ? 0 : -1}
          >
            Register
          </a>
        </div>
      </aside>
    </>
  );
}

export default React.memo(SideMenu);
