import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './pages/home/Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// Import all Pages
import About from './pages/about/About.js';
import Form from './pages/form/Form.js';
import Visuals from './pages/visuals/Visuals.js';
import Compass from './pages/visuals/Compass.js';
//
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

//Generating routes
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/form" component={Form} />
      <Route path="/visuals" component={Visuals} />
      <Route path="/compass" component={Compass}/>
    </div>
  </Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);
