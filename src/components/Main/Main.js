import React from "react";
import SkillsItems from "./CoursesItems.js";
import ReactCircleModal from "react-circle-modal";

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
                    <div style={{ backgroundColor: "#fff", padding: "1em" }}>
                      <iframe src="../../assets/static/product-management.pdf"></iframe>
                      <img src="" alt="Mi certifcado" />
                      <button onClick={onClick}>
                        Click here to close modal
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
