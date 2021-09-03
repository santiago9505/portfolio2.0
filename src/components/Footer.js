import React from "react";
import "../assets/styles/Footer.css";

//assets
import Linkedin from "../assets/static/linkedin-icon.png";
import Github from "../assets/static/github-icon.png";
import Twitter from "../assets/static/twitter-icon.png";

const Footer = ({ theme, setTheme }) => {
  return (
    <footer className={theme ? "footer footer__dark" : "footer"}>
      <article
        className={
          theme
            ? "footer__text--container footer__text--container-dark"
            : "footer__text--container"
        }
      >
        <p>© Santiago Guáqueta Angarita 2021</p>
        <p>
          Design collaborator:{" "}
          <a href="https://www.behance.net/castroscar">Oscar Castro</a>
        </p>
      </article>
      <ul className="footer__items--container">
        <li
          className={
            theme
              ? "contactme--container-dark contactme--container"
              : "contactme--container"
          }
        >
          <h3
            className={
              theme ? "footer__title footer__title-dark" : "footer__title"
            }
          >
            CONTENT
          </h3>
          <a href="https://blog-fb45f.web.app/">Blog</a>
        </li>
        <li
          className={
            theme
              ? "contactme--container-dark contactme--container"
              : "contactme--container"
          }
        >
          <h3
            className={
              theme ? "footer__title footer__title-dark" : "footer__title"
            }
          >
            COURSES
          </h3>
          <a href="https://platzi-courses.web.app/">Platzi</a>
        </li>
        <li
          className={
            theme
              ? "contactme--container-dark contactme--container"
              : "contactme--container"
          }
        >
          <h3
            className={
              theme ? "footer__title footer__title-dark" : "footer__title"
            }
          >
            CONTACT ME
          </h3>
          <div className="contactme--data">
            <a href="santigeek@hotmail.com">santigeek@hotmail.com</a>
            <a href="https://wa.me/qr/XCYPFO7562ULM1">+57 3195619977</a>
          </div>
        </li>
      </ul>
      <div className="social__media--container">
        <figure className="icon__container">
          <a href="https://www.linkedin.com/in/santiago-gu%C3%A1queta/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </figure>
        <figure className="icon__container">
          <a href="https://github.com/santiago9505">
            <img src={Github} alt="github" />
          </a>
        </figure>
        <figure className="icon__container">
          <a href="https://twitter.com/santigeek">
            {" "}
            <img src={Twitter} alt="twitter" />
          </a>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
