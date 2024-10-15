import React, { useState } from 'react';
import arrowDown from '../../Images/icon-arrow-down.svg';
import closeMenu from '../../Images/icon-close-menu.svg';
import './SideMenu.css';
import Features from '../Features/Features';
import Company from '../Company/Company';

function SideMenu({ openMenu, setOpenMenu }) {
    const [openFeatures, setOpenFeatures] = useState(false);
    const [openCompany, setOpenCompany] = useState(false);

    return (
        <div className={`side-menu ${openMenu ? 'open' : ''}`}>
            <div className="close-icon">
                <img src={closeMenu} alt="Close Menu" onClick={() => setOpenMenu(false)} />
            </div>

            <ul className="links">
                <li onClick={() => setOpenFeatures(!openFeatures)}>
                    <a href="#">Features</a>
                    <img
                        src={arrowDown}
                        alt="arrow-down"
                        className="arrow-down"
                        style={{ transform: openFeatures ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                    {openFeatures && <Features />}
                </li>

                <li onClick={() => setOpenCompany(!openCompany)}>
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

            <div className="nav-auth">
                <a href="#" className="login">Login</a>
                <a href="#" className="register">Register</a>
            </div>
        </div>
    );
}

export default SideMenu;
