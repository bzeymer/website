import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          Olar about!
        </Route>
        <Route path="/users">
          Olar users!
        </Route>
        <Route path="/">
          Olar home!
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;