import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import LogoDark from "../assets/static/logodark.png";
import MenuIcon from "../assets/static/menu-icon.png";
import DarkMode from "../assets/static/darkmode-icon.png";
import LightMode from "../assets/static/logolight.png";

//styles
import "../assets/styles/Header.css";

//context

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
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
        <div className="header__menu--container">
          <img src={MenuIcon} alt="menu-icon" onClick={handleClick} />
        </div>
        <ul
          id="menu"
          className={
            menu ? "header__items--container" : "header__items--container-hide"
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
