import React from "react";
import "../../assets/styles/Experience.css";

import Project from "./Project.js";

//assets
import ApeWebsite from "../../assets/static/ape-website.png";
import MoveWebsite from "../../assets/static/move-website.png";
import PortfolioWebsite from "../../assets/static/portfolio-website.png";
import RockWebsite from "../../assets/static/rock-website.png";
import GeometryWebsite from "../../assets/static/geometry-website.png";

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
          project="APE BOGOTÁ - SENA"
          stack="React, Firebase, Javascript, Tailwind, Html5, Css3, Npm"
          description="I created the website apebogota.com a website where people with disabilities can find job opportunities."
        />
        <Project
          img={MoveWebsite}
          project={`Move.tech `}
          stack="Html5, Css3, Javascript. Github(pages), Css grid"
          description="Trying to undertake in the area of ​​finance, however by laws we quickly fail"
        />
        <Project
          img={PortfolioWebsite}
          project="My Portfolio"
          stack="React, Firebase, Javascript, Html5, Css3, Nodejs"
          description="
          My portfolio is made in React, and here I show my skills in frontend and basic database management"
        />
        <Project
          img={RockWebsite}
          project="Rock, Paper, Scissors..."
          stack="Html5, Css3, Javascript, Firebase"
          description="A project from the platzi school of javascript, in which I implement an algorithm to win in rock paper or scissors"
        />
        <Project
          img={GeometryWebsite}
          project="Figuras Geométricas"
          stack="Html5, Css3, Javascript, Es6, Firebase"
          description="A project made to explain a little basic geometry to a little cousin."
        />
      </figure>
    </div>
  );
};

export default Experience;
