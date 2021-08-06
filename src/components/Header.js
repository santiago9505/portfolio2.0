import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import LogoDark from "../assets/static/logodark.png";
import DarkMode from "../assets/static/darkmode-icon.png";
import LightMode from "../assets/static/logolight.png";
import { Turn as Hamburger } from "hamburger-react";

//styles
import "../assets/styles/Header.css";

//context

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleTheme = () => {
    setDarkMode(!darkMode);
    setTheme(!theme);
  };

  return (
    <header className="header">
      <figure onClick={handleTheme} className="darkMode__button">
        <img src={theme ? DarkMode : LightMode} alt="darkmode/lightmode" />
      </figure>
      <figure className="header__logo--container">
        <img src={LogoDark} alt="santigeek-logo" />
      </figure>
      <div className="menu">
        <div onClick={handleClick} className="header__menu--container">
          <Hamburger size={50} color="#4CA4D3" />
        </div>
        <ul
          id="menu"
          className={
            isOpen
              ? "header__items--container"
              : "header__items--container-hide"
          }
        >
          <li>
            <Link className="menu__item" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/">
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
