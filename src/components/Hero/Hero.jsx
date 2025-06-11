/**
 * Hero component renders the main hero section with content and image.
 * @returns {JSX.Element} The Hero section.
 */
import React from "react";
import styles from "./Hero.module.css";
import databiz from "../../Images/client-databiz.svg";
import audiophile from "../../Images/client-audiophile.svg";
import meet from "../../Images/client-meet.svg";
import maker from "../../Images/client-maker.svg";
import heroBgDesktop from "../../Images/image-hero-desktop.png";
import heroBgMobile from "../../Images/image-hero-mobile.png";

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`${styles.hero__container} container`}>
        <div className={styles.hero__content}>
          <h1 id="hero-title" className={styles.hero__title}>
            Make remote work
          </h1>
          <p className={styles.hero__description}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className={styles.hero__button} type="button">
            Learn more
          </button>
          <div className={styles.hero__logos}>
            <img
              src={databiz}
              alt="Databiz client logo"
              className={styles.hero__logo}
              loading="lazy"
              width="100"
              height="30"
            />
            <img
              src={audiophile}
              alt="Audiophile client logo"
              className={styles.hero__logo}
              loading="lazy"
              width="100"
              height="30"
            />
            <img
              src={meet}
              alt="Meet client logo"
              className={styles.hero__logo}
              loading="lazy"
              width="100"
              height="30"
            />
            <img
              src={maker}
              alt="Maker client logo"
              className={styles.hero__logo}
              loading="lazy"
              width="100"
              height="30"
            />
          </div>
        </div>
        <div className={styles["hero__image-section"]}>
          <picture>
            <source media="(min-width: 768px)" srcSet={heroBgDesktop} />
            <img
              src={heroBgMobile}
              alt="Person working remotely with laptop"
              className={styles.hero__image}
              width="456"
              height="608"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
