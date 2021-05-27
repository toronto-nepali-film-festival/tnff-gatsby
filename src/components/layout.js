import React, { useState } from "react";
import TnffFullLogo from "../assets/tnff-full-logo.svg";
import { Link } from "gatsby";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Menu = () => (
  <ul>
    <ListLink to="/films">Archive</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
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
          <div className="logo_container">
            <Link to="/">
              <img
                src={TnffFullLogo}
                alt="Toronto Nepali Film Festival Logo"
                className="logo"
              />
            </Link>
          </div>

          <header>
            <div className="desktop_nav">
              <Menu />
            </div>

            <div className="mobile_nav">
              <div className="menu_open">
                <button className="no_appearance" onClick={handleOpenMenu}>
                  <GiHamburgerMenu />
                </button>
              </div>
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
                <Menu />
              </div>
            </div>
          </header>
        </div>
      </div>
      <main>{children}</main>
      <footer>
        <p>© TNFF | Toronto Nepali Film Festival</p>
        <div className="socials">
          <a
            href="https://www.instagram.com/tnffcanada/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://twitter.com/tnffcanada"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.facebook.com/TorontoNepaliFilmFestival"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook />
          </a>
        </div>
      </footer>
    </div>
  );
}
