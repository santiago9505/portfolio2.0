import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import AboutMe from "../pages/AboutMe.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-me" component={AboutMe} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
