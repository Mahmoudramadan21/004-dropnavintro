/**
 * Header component renders the main navigation bar with dropdown menus.
 * This component manages a mobile side menu that appears only on screens smaller than 768px.
 * @returns {JSX.Element} The Header component.
 */
import React, { useState, useCallback, useEffect } from "react";
import styles from "./Header.module.css";
import arrowDown from "../../Images/icon-arrow-down.svg";
import menu from "../../Images/icon-menu.svg";
import Features from "../Features/Features";
import Company from "../Company/Company";
import SideMenu from "../SideMenu/SideMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleFeatures = useCallback((e) => {
    e.preventDefault();
    setOpenFeatures((prev) => !prev);
  }, []);
  const toggleCompany = useCallback((e) => {
    e.preventDefault();
    setOpenCompany((prev) => !prev);
  }, []);
  const toggleMenu = useCallback((e) => {
    e.preventDefault();
    setOpenMenu(true);
  }, []);

  // Handle window resize to update mobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header} aria-label="Main navigation">
      <div className={`${styles.header__container} container`}>
        <div className={styles["header__logo-links"]}>
          {/* Logo wrapped in a link to the homepage */}
          <a href="#" className={styles.header__logo}>
            <h2>snap</h2>
          </a>
          <ul className={styles.header__links}>
            <li className={styles.header__item}>
              <a
                href="#"
                className={styles.header__link}
                onClick={toggleFeatures}
                aria-expanded={openFeatures}
                aria-controls="features-menu"
                onKeyDown={(e) => e.key === "Enter" && toggleFeatures(e)}
              >
                Features
              </a>
              <img
                src={arrowDown}
                alt="Toggle Features menu"
                className={styles.header__arrow}
                style={{
                  transform: openFeatures ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              />
              {openFeatures && (
                <ul className={styles["header__sublist"]} id="features-menu">
                  <Features />
                </ul>
              )}
            </li>
            <li className={styles.header__item}>
              <a
                href="#"
                className={styles.header__link}
                onClick={toggleCompany}
                aria-expanded={openCompany}
                aria-controls="company-menu"
                onKeyDown={(e) => e.key === "Enter" && toggleCompany(e)}
              >
                Company
              </a>
              <img
                src={arrowDown}
                alt="Toggle Company menu"
                className={styles.header__arrow}
                style={{
                  transform: openCompany ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              />
              {openCompany && (
                <ul className={styles["header__sublist"]} id="company-menu">
                  <Company />
                </ul>
              )}
            </li>
            <li className={styles.header__item}>
              <a href="#" className={styles.header__link}>
                Careers
              </a>
            </li>
            <li className={styles.header__item}>
              <a href="#" className={styles.header__link}>
                About
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.header__auth}>
          <a href="#" className={styles["header__auth-login"]}>
            Login
          </a>
          <a href="#" className={styles["header__auth-register"]}>
            Register
          </a>
        </div>
        <div className={styles["header__menu-toggle"]}>
          {/* Menu icon wrapped in a link to trigger mobile menu */}
          <a
            href="#"
            onClick={toggleMenu}
            className={styles["header__menu-link"]}
          >
            <img
              src={menu}
              alt="Open mobile menu"
              className={styles["header__menu-icon"]}
              loading="lazy"
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
      {isMobile && <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </header>
  );
}

export default React.memo(Header);
