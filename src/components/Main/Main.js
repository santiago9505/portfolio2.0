import React from "react";
import SkillsItems from "./CoursesItems.js";
import ReactCircleModal from "react-circle-modal";

//assets-static
import ProfileImage from "../../assets/static/img-santigeek.png";
import Arrow from "../../assets/static/arrow-left.png";

//assets-styles
import "../../assets/styles/Main.css";

const Main = () => {
  const handleScrollRight = () => {
    handleChange(500);
  };
  const handleScrollLeft = () => {
    handleChange(-500);
  };
  const handleChange = (number) => {
    document.getElementById("main__courses--container").scrollLeft += number;
  };
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
        <div onClick={handleScrollLeft} className="arrow__left--container">
          <img className="arrows arrow__left--img" src={Arrow} alt="" />
        </div>
        <div onClick={handleScrollRight} className="arrow__right--container">
          <img className="arrows arrow__right--img" src={Arrow} alt="" />
        </div>

        <div id="main__courses--container" className="main__courses--container">
          {SkillsItems.map((item, index) => {
            return (
              <figure key={index} className="course">
                <ReactCircleModal
                  backgroundColor="#99aecc"
                  toogleComponent={(onClick) => (
                    <img onClick={onClick} src={item.img} alt="" />
                  )}
                  // Optional fields and their default values
                  offsetX={0}
                  offsetY={0}
                >
                  {(onClick) => (
                    <div className="modal__container">
                      <iframe
                        title={item.name}
                        className="certificates__pdfs"
                        src={item.certificate}
                        frameborder="0"
                      ></iframe>
                      <button className="modal__button" onClick={onClick}>
                        Close
                      </button>
                    </div>
                  )}
                </ReactCircleModal>
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
