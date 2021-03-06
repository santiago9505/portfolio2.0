import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import LogoDark from "../assets/static/logodark.png";
import LogoLight from "../assets/static/logo.png";

import { Turn as Hamburger } from "hamburger-react";

//styles
import "../assets/styles/Header.css";

//context

const Header = ({ theme, setTheme }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="headerDark">
      <figure className="header__logo--container">
        <img src={theme ? LogoLight : LogoDark} alt="santigeek-logo" />
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
            <Link
              className={theme ? "menu__item menu__item--light" : "menu__item"}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={theme ? "menu__item menu__item--light" : "menu__item"}
              to="/about-me"
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              className={theme ? "menu__item menu__item--light" : "menu__item"}
              to="/experience"
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              className={theme ? "menu__item menu__item--light" : "menu__item"}
              to="/contactme"
            >
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
