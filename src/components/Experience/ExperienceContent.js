import React from "react";
import "../../assets/styles/Experience.css";

import Project from "./Project.js";

//assets
import vcc from "../../assets/static/project-vcc.png";
import ape from "../../assets/static/project-ape.png";
import thinkigrow from "../../assets/static/project-thinki.png";
import move from "../../assets/static/project-move.png";
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
        {/* I currently work as a product owner at Element 43, where we work with agile methodologies (SCRUM) to develop technological solutions for companies in the Netherlands, but I have also had experience working as a frontend developer. Developing software from different areas but that have in common the love for product development.  */}
        <article>
          I currently work as a{" "}
          <strong className="third__type">product owner</strong> at Element 43,
          where we work with agile methodologies (SCRUM) to develop
          technological solutions for companies in the Netherlands, but I have
          also had experience working as a{" "}
          <strong className="third__type">frontend developer.</strong>{" "}
          Developing software from different areas but that have in common the
          love for product development.
        </article>
      </div>
      <article
        className={
          theme
            ? "experience__title experience__title--light experience__title--projects"
            : "experience__title experience__title--projects"
        }
      >
        <h1>Projects</h1>
      </article>
      <div
        id="experience__project--container"
        className="experience__project--container"
      >
        <Project project={"vcc"} source={vcc} />
        <Project project={"ape"} source={ape} />
        <Project project={"thinki"} source={thinkigrow} />
        <Project project={"move"} source={move} />
        <div
          onClick={handleScrollLeft}
          className="project__arrow__left--container"
        >
          <img
            className="project__arrows project__arrow__left--img"
            src={Arrow}
            alt="arrow-left"
          />
        </div>
        <div
          onClick={handleScrollRight}
          className="project__arrow__right--container"
        >
          <img
            className="project__arrows project__arrow__right--img"
            src={Arrow}
            alt="arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
