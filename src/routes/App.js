import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home.js";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
