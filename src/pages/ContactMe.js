import React from "react";
import Contact from "../components/Contact.js";

const ContactMe = ({ theme, setTheme }) => {
  return (
    <>
      <Contact theme={theme} setTheme={setTheme} />
    </>
  );
};

export default ContactMe;
