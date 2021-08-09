import React from "react";
import "../assets/styles/About.css";

const About = () => {
  return (
    <div className="about__container">
      <article className="about__title">
        <h1>Who am I?</h1>
      </article>
      <div className="about__paragraphs">
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
    </div>
  );
};

export default About;
