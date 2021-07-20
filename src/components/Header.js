import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import LogoDark from "../assets/static/logodark.png";
import MenuIcon from "../assets/static/menu-icon.png";

//styles
import "../assets/styles/Header.css";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
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
            menu ? "header__items--container-hide" : "header__items--container"
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
