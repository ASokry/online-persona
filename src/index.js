import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import MyRoute from './route';
// Import Firebase
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
// const routing = (
//   <Router>
//     <Switch>
//       <Route path= "/about" component={AboutPage} />
//       <Route path= "/form" component={MyForm} />
//       {/* <Route path= {url + "/compass"} component={CompassPage}/> */}
//       <Route path="/" component={HomePage} />
//     </Switch>
//   </Router>
// )

ReactDOM.render(
  <MyRoute></MyRoute>,
  document.getElementById('root')
);
