import React from "react";
import ExperienceContent from "../components/Experience/ExperienceContent.js";

const Experience = ({ theme, setTheme }) => {
  return (
    <>
      <ExperienceContent theme={theme} setTheme={setTheme} />
    </>
  );
};

export default Experience;
