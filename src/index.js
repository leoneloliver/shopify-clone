import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Homepage from "./Homepage";
import Gallery from "./Gallery";
import Error404 from "./Error404";

ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/adm" component={App} />
        <Route path="/gallery" component={Gallery} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
