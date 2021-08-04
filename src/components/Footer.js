import React from "react";
import "../assets/styles/Footer.css";

//assets
import Linkedin from "../assets/static/linkedin-icon.png";
import Github from "../assets/static/github-icon.png";
import Twitter from "../assets/static/twitter-icon.png";

const Footer = () => {
  return (
    <footer>
      <article className="footer__text--container">
        <p>© Santiago Guáqueta Angarita 2021</p>
        <p>
          Design collaborator: <a href="">Oscar Castro</a>
        </p>
      </article>
      <ul className="footer__items--container">
        <li className="contactme--container">
          <h3 className="footer__title">CONTENT</h3>
          <a href="">Blog</a>
        </li>
        <li className="contactme--container">
          <h3 className="footer__title">COURSES</h3>
          <a href="">Platzi</a>
        </li>
        <li className="contactme--container">
          <h3 className="footer__title">CONTACT ME</h3>
          <div className="contactme--data">
            <a href="">santigeek@hotmail.com</a>
            <a href="">+57 3195619977</a>
          </div>
        </li>
      </ul>
      <div className="social__media--container">
        <figure className="icon__container">
          <img src={Linkedin} alt="intagram" />
        </figure>
        <figure className="icon__container">
          <img src={Github} alt="twitter" />
        </figure>
        <figure className="icon__container">
          <img src={Twitter} alt="github" />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
