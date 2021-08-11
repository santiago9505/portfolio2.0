import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import AboutMe from "../pages/AboutMe.js";
import Experience from "../pages/Experience.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/experience" component={Experience} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
