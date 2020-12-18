import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./features/Home";
import Answers from "./features/Answer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/answer/:qId">
          <Answers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
