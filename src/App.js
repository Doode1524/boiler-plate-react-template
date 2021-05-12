import React from "react";
import history from "../history";
// a react-router dependancy that allows you to manage session history through your routes without page refresh
// dont forget to set up history.js inside src folder
import { Router, Route, Switch } from "react-router-dom";
// Use dynamic routing to handle routes in your app
import { connect } from "react-redux";
// connects react components to the store

import "./App.css";

function App() {
  return (
    <Router history={history}>     // Wrap Router in all components and add history as a prop
      <div className="app">
        <Switch>                   // Renders first child route that matches the location
          <Route
            exact                  // use exact path to ensure path matches
            path="/pathname"       // name of path
            render={(props) => (   // pass props to components
              <NameOfComponent/>   // example component
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App; // always remember to export your components
