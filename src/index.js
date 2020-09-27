import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Profile from './pages/profile/Profile.js';

//Generating routes
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);
