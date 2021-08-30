import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import AboutMe from "../pages/AboutMe.js";
import Experience from "../pages/Experience.js";
import ContactMe from "../pages/ContactMe.js";
import ThemeContext from "../context/ThemeContext";
// import DarkMode from "../assets/static/darkmode-icon.png";
// import LightMode from "../assets/static/logolight.png";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(false);
  // const handleTheme = () => {
  //   setDarkMode(!darkMode);
  //   setTheme(!theme);
  // };
  return (
    <div className="App">
      <Router>
        <ThemeContext.Provider>
          <Header value={theme ? "headerDark" : "black"} />
        </ThemeContext.Provider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={ContactMe} />
        </Switch>
        <Footer />
      </Router>
      {/* <figure onClick={handleTheme} className="darkMode__button">
        <img src={theme ? DarkMode : LightMode} alt="darkmode/lightmode" />
      </figure> */}
    </div>
  );
}

export default App;
