import React from "react";
import "../../assets/styles/Experience.css";

import Project from "./Project.js";

//assets
import ApeWebsite from "../../assets/static/ape-website.png";
import MoveWebsite from "../../assets/static/move-website.png";
import PortfolioWebsite from "../../assets/static/portfolio-website.png";
import RockWebsite from "../../assets/static/rock-website.png";
import GeometryWebsite from "../../assets/static/geometry-website.png";
import Arrow from "../../assets/static/arrow-left.png";

const Experience = ({ theme, setTheme }) => {
  const handleScrollRight = () => {
    handleChange(500);
  };
  const handleScrollLeft = () => {
    handleChange(-500);
  };
  const handleChange = (number) => {
    document.getElementById("experience__project--container").scrollLeft +=
      number;
  };
  return (
    <div className="experience__container">
      <article
        className={
          theme
            ? "experience__title experience__title--light"
            : "experience__title"
        }
      >
        <h1>Experience</h1>
      </article>
      <div
        className={
          theme
            ? "experience__paragraphs experience__paragraphs--light"
            : "experience__paragraphs"
        }
      >
        <article>
          I have had experience as a{" "}
          <strong className="third__type">frontend developer,</strong>{" "}
          management and counselor, my last position was as a frontend developer
          and professional counselor, It was a great experience to work with a
          huge team of talented employees and together we achieved our{" "}
          <strong className="third__type">company goals,</strong> due to the
          website, I talked with whole the team to find out their needs, and
          talk with the users to get feedback. I worked there for 2 years and
          also we helped people with disabilities to get a job.
        </article>
      </div>
      <article
        className={
          theme
            ? "experience__title experience__title--light"
            : "experience__title"
        }
      >
        <h1>Projects</h1>
      </article>
      <div
        id="experience__project--container"
        className="experience__project--container"
      >
        <Project
          img={ApeWebsite}
          project="APE BOGOTÁ - SENA"
          stack="React, Firebase, Javascript, Tailwind, Html5, Css3, Npm"
          description="I created the website apebogota.com a website where people with disabilities can find job opportunities."
          link="https://apebogota.com"
        />
        <Project
          img="https://firebasestorage.googleapis.com/v0/b/portfolio-2-47ec2.appspot.com/o/move.store%20(1).png?alt=media&token=0d688d39-bc8e-4113-b251-1fa708b144c0"
          project="MOVE.STORE"
          stack="React, Firebase, Javascript, React-hooks, Html5, Css3, Npm"
          description="An easy ecommerce to practice React hooks, and itegrating Paypal API."
          link="https://move-store-4852d.web.app/"
        />
        <Project
          img={MoveWebsite}
          project={`Move.tech `}
          stack="Html5, Css3, Javascript. Github(pages), Css grid"
          description="Trying to undertake in the area of ​​finance, however by laws we quickly fail"
          link="https://santiago9505.github.io/move.tech/"
        />
        <Project
          img={PortfolioWebsite}
          project="My Portfolio"
          stack="React, Firebase, Javascript, Html5, Css3, Nodejs"
          description="
          My portfolio is made in React, and here I show my skills in frontend and basic database management"
          link="https://santigeek.com"
        />
        <Project
          img={RockWebsite}
          project="Rock, Paper, Scissors..."
          stack="Html5, Css3, Javascript, Firebase"
          description="A project from the platzi school of javascript, in which I implement an algorithm to win in rock paper or scissors"
          link="https://rock-paper-scissors-338b4.web.app/"
        />
        <Project
          img={GeometryWebsite}
          project="Figuras Geométricas"
          stack="Html5, Css3, Javascript, Es6, Firebase"
          description="A project made to explain a little basic geometry to a little cousin."
          link="https://figuras-geometricas-db29b.web.app/"
        />
        <div
          onClick={handleScrollLeft}
          className="arrows__container arrow__experience--left-container"
        >
          <img
            className="arrows arrow__experience--left-img"
            src={Arrow}
            alt="arrow-left"
          />
        </div>
        <div
          onClick={handleScrollRight}
          className="arrows__container arrow__experience--right-container"
        >
          <img
            className="arrows arrow__experience--right-img"
            src={Arrow}
            alt="arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
