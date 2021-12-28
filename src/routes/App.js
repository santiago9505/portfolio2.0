import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import AboutMe from "../pages/AboutMe.js";
import Experience from "../pages/Experience.js";
import ContactMe from "../pages/ContactMe.js";

import DarkMode from "../assets/static/darkmode-icon.png";
import LightMode from "../assets/static/logolight.png";

function App() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? "App__light" : App}>
      <Router>
        <Header theme={theme} setTheme={setTheme} />
        <Switch>
          <Route exact path="/">
            <Home theme={theme} setTheme={setTheme} />
          </Route>
          <Route exact path="/home">
            <Home theme={theme} setTheme={setTheme} />
          </Route>
          <Route exact path="/about-me">
            <AboutMe theme={theme} setTheme={setTheme} />
          </Route>
          <Route exact path="/experience">
            <Experience theme={theme} setTheme={setTheme} />
          </Route>
          <Route exact path="/contactme">
            <ContactMe theme={theme} setTheme={setTheme} />
          </Route>
          <Route component={Home} />
        </Switch>
        <Footer theme={theme} setTheme={setTheme} />
      </Router>
      <figure onClick={handleTheme} className="darkMode__button">
        <img src={theme ? LightMode : DarkMode} alt="darkmode/lightmode" />
      </figure>
    </div>
  );
}

export default App;
