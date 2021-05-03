import React, { useState } from "react";
import Logo from "../assets/tnff_red.png";
import { Link } from "gatsby";
import { BrowserView, MobileView } from "react-device-detect";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  const [isMenuPopoutOpen, setIsMenuPopoutOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuPopoutOpen(false);
  };
  const handleOpenMenu = () => {
    setIsMenuPopoutOpen(true);
  };

  return (
    <div className="layout wrapper">
      <div className="header">
        <div className="logo_nav">
          <MobileView>
            <div className="menu_open">
              <button className="no_appearance" onClick={handleOpenMenu}>
                <GiHamburgerMenu />
              </button>
            </div>
          </MobileView>
          <div className="logo_container">
            <Link to="/">
              <img
                src={Logo}
                alt="Toronto Nepali Film Festival Logo"
                className="logo"
              />
              <BrowserView>
                <h3>Toronto Nepali Film Festival</h3>
              </BrowserView>
            </Link>
          </div>

          <header>
            <BrowserView>
              <ul>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                <ListLink to="/films">Archive</ListLink>
              </ul>
            </BrowserView>

            <MobileView>
              <div
                className={`popout_menu ${
                  isMenuPopoutOpen ? "open" : "closed"
                }`}
              >
                <div className="menu_close">
                  <button onClick={handleCloseMenu} className="no_appearance">
                    <ImCross />
                  </button>
                </div>
                <ul>
                  <ListLink to="/about">About</ListLink>
                  <ListLink to="/contact">Contact</ListLink>
                  <ListLink to="/films">Archive</ListLink>
                </ul>
              </div>
            </MobileView>
          </header>
        </div>
      </div>
      <main>{children}</main>
      <footer>
        <p>© TNFF | Toronto Nepali Film Festival</p>
      </footer>
    </div>
  );
}
