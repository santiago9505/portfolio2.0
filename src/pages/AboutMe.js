import React from "react";
import About from "../components/About.js";

const AboutMe = ({ theme, setTheme }) => {
  return (
    <>
      <About theme={theme} setTheme={setTheme} />
    </>
  );
};

export default AboutMe;
