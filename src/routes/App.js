import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home.js";

import styled from "styled-components";

import ThemeContext from "../context/ThemeContext.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
