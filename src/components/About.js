import React from "react";
import "../assets/styles/About.css";

const About = ({ theme, setTheme }) => {
  return (
    <div className="about__container">
      <article
        className={theme ? "about__title about__title--light" : "about__title"}
      >
        <h1 className="about__title--h1">Who am I?</h1>
      </article>
      <div
        className={
          theme
            ? "about__paragraphs about__paragraphs--light"
            : "about__paragraphs"
        }
      >
        <article>
          <strong className="first__type">Scrum Master</strong>{" "}
           with over a year of experience leading agile development teams, helping teams drive relentless improvement and progress towards goals. 
           Knowledge in {" "}
          <strong
            className={
              theme ? "second__type second__type--light" : "second__type"
            }
          >
            requirements analysis, agile project management {" "}
          </strong>
          conducting agile ceremonies and working as a team to achieve results.
        </article>
        <article>
          Some of my strengths are leadership, teamwork, decision making, {" "}
          <strong
            className={theme ? "third__type third__type--light" : "third__type"}
          >
            working under pressure, results analysis 
          </strong>{" "}
          and attention to detail.
        </article>
      </div>
    </div>
  );
};

export default About;
