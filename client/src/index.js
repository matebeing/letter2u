import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.css';
import Home from './pages/Home/Home.jsx';
import ReadLetter from './pages/ReadLetter/ReadLetter.jsx';
import WriteLetter from './pages/WriteLetter/WriteLetter.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/read">
          <ReadLetter />
        </Route>
        <Route path="/write">
          <WriteLetter />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

