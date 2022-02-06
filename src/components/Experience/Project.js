import React from "react";

import "../../assets/styles/Project.css";

const Project = ({ source, project, link }) => {
  const openUrl = () => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={openUrl} className="project__section">
      <div className="project__container">
        <img id={project} className="project__img" src={source} alt={source} />
        <div className="project__line"></div>
      </div>
    </div>
  );
};

export default Project;
