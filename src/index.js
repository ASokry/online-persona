import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Profile from './pages/profile/Profile.js';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBe3frfm83ziBBzwjb5U8taGHxavs6KpmU",
  authDomain: "testing-8fda4.firebaseapp.com",
  databaseURL: "https://testing-8fda4.firebaseio.com",
  projectId: "testing-8fda4",
  storageBucket: "testing-8fda4.appspot.com",
  messagingSenderId: "496920794938",
  appId: "1:496920794938:web:7b8b79a13b32fd9ee52203",
  measurementId: "G-Q3C0W21C3R"
};

firebase.initializeApp(firebaseConfig);

//Generating routes
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);
