import React from "react";
import CourseItems from "./CoursesItems.js";

//assets-static
import ProfileImage from "../../assets/static/img-santigeek.png";

//assets-styles
import "../../assets/styles/Main.css";

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="main__title--container">
          <h1>Hello,</h1>
          <h1>this is</h1>
          <h1>
            <strong>Santiago</strong>{" "}
          </h1>
        </div>
        <figure className="image__container">
          <img
            className="profile__image"
            src={ProfileImage}
            alt="foto-santiago"
          />
        </figure>
        <div className="main__paragraph--container">
          <h3>
            Business Administration, passionate about IT, Lifelong Learning
          </h3>
        </div>
        <div className="main__courses--container">
          {CourseItems.map((item, index) => {
            return (
              <figure key={index} className="course">
                <img src={item.img} alt="" />
                <figcaption>{item.title}</figcaption>
              </figure>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Main;
