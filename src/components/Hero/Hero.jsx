import React from 'react';
import databiz from "../../Images/client-databiz.svg"
import audiophile from "../../Images/client-audiophile.svg"
import meet from "../../Images/client-meet.svg"
import maker from "../../Images/client-maker.svg"
import heroBgDesktop from "../../Images/image-hero-desktop.png"
import heroBgMobile from "../../Images/image-hero-mobile.png"
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="content">
                    <h1>Make remote work</h1>
                    <p>
                        Get your team in sync, no matter your location. Streamline processes,
                        create team rituals, and watch productivity soar.
                    </p>
                    <button className="learn-more">Learn more</button>
                    <div className="logos">
                        <img src={databiz} alt="Databiz" />
                        <img src={audiophile} alt="Audiophile" />
                        <img src={meet} alt="Meet" />
                        <img src={maker} alt="Maker" />
                    </div>
                </div>
                <div className="image-section">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={heroBgDesktop} />
                        <img src={heroBgMobile} alt="Person with laptop" />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default Hero;
