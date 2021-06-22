import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import App from "./app";
import Progress from "./progress/progress";
import FAQ from "./faq/faq";
import About from "./about/about";
import Functions from "./functions/functions";
import Discoveries from "./discoveries/discoveries";

function getBasePath() {
  return process.env.NODE_ENV === "development" ? "" : "bfbb";
}

// Router Switch renders the first page which matches
// the current url, therefore the default page must be last.
const page = (
  <Router basename={getBasePath()}>
    <Switch>
      <Route path="/about">
        <App page={About} />
      </Route>
      <Route path="/progress">
        <App page={Progress} />
      </Route>
      <Route path="/functions">
        <App page={Functions} />
      </Route>
      <Route path="/discoveries">
        <App page={Discoveries} />
      </Route>
      <Route path="/faq">
        <App page={FAQ} />
      </Route>
      <Route path="/">
        <Redirect to="/progress" />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(page, document.querySelector("#app"));
