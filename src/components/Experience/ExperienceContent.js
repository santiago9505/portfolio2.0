import React from "react";
import "../../assets/styles/Experience.css";

import Project from "./Project.js";

//assets
import ApeWebsite from "../../assets/static/ape-website.png";

const Experience = () => {
  return (
    <div className="experience__container">
      <article className="experience__title">
        <h1>Experience</h1>
      </article>
      <div className="experience__paragraphs">
        <article>
          I am a <strong className="first__type">Full-Stack Developer</strong>{" "}
          with 1 year of experience providing hight impact web solutions,
          specializes using{" "}
          <strong className="second__type">
            react, node-js, javascript tailwind and firebase
          </strong>
          , to build diferente types of websites.
        </article>
        <article>
          I know about code, but I understand that is not just to develop, is to{" "}
          <strong className="third__type">create a product for people</strong>{" "}
          and I combine my knowledge as a full-stack developer with my knwledge
          in Business Administration.
        </article>
      </div>
      <article className="experience__title">
        <h1>Projects</h1>
      </article>
      <figure className="experience__project--container">
        <Project
          img={ApeWebsite}
          project="Agencia Pública de Empleo - SENA"
          stack="React, Firebase, Javascript, Tailwind, Html5, Css3, Npm"
        />
        <Project />
        <Project />
      </figure>
    </div>
  );
};

export default Experience;
