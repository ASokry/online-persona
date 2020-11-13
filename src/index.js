import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './pages/home/Home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// Import all Pages
import AboutPage from './pages/about/About';
import MyForm from './pages/form/Form.js';
import CompassPage from './pages/visuals/Compass.js';
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
const url = process.env.PUBLIC_URL;
//Generating routes
const routing = (
  <BrowserRouter basename="/pages/home">
    <Switch>
      <Route path= {url + "/about"} component={AboutPage} />
      <Route path= {url + "/form"} component={MyForm} />
      {/* <Route path= {url + "/compass"} component={CompassPage}/> */}
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routing,
  document.getElementById('root')
);
