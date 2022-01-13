import React from "react";

import "../../assets/styles/Project.css";

const Project = ({ source }) => {
  return (
    <div className="project__container">
      <img className="project__img" src={source} alt={source} />
      <div className="project__line"></div>
    </div>
  );
};

export default Project;
