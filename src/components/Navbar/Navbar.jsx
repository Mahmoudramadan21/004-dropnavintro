import React, { useState } from 'react';
import './Navbar.css';
import arrowDown from '../../Images/icon-arrow-down.svg';
import Menu from '../../Images/icon-menu.svg';
import Features from '../Features/Features';
import Company from '../Company/Company';
import SideMenu from '../SideMenu/SideMenu';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openFeatures, setOpenFeatures] = useState(false);
    const [openCompany, setOpenCompany] = useState(false);

    return (
        <nav>
            <div className="container">
                <div className="logo-links-wrapper">
                    <div className="logo">
                        <h2>snap</h2>
                    </div>
                    <ul className="links">
                        <li id="features" onClick={() => setOpenFeatures(!openFeatures)}>
                            <a href="#">Features</a>
                            <img
                                src={arrowDown}
                                alt="arrow-down"
                                className="arrow-down"
                                style={{ transform: openFeatures ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            />
                            {openFeatures && <Features />}
                        </li>

                        <li id="company" onClick={() => setOpenCompany(!openCompany)}>
                            <a href="#">Company</a>
                            <img
                                src={arrowDown}
                                alt="arrow-down"
                                className="arrow-down"
                                style={{ transform: openCompany ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            />
                            {openCompany && <Company />}
                        </li>

                        <li><a href="#">Careers</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>

                <div className="nav-auth">
                    <a href="#" className="login">Login</a>
                    <a href="#" className="register">Register</a>
                </div>

                <div className="open-menu">
                    <img src={Menu} alt="Menu" onClick={() => setOpenMenu(true)} />
                </div>
            </div>

            {/* Pass setOpenMenu to SideMenu to control the menu's state */}
            <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
    );
}

export default Navbar;
