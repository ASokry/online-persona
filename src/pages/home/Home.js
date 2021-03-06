import React,{useState,useEffect} from 'react';
import './customHome.css';
import CompassImg from './img/compass.png';
import UserDefinedImg from './img/userDefined.png';
import TheCrossingImg from './img/theCrossing.png';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{readUser()}, []);
  function readUser() {
    firebase.database().ref('responses').on('value',(snapshot)=>{
        let temp = [];
        if(snapshot.val() != null) {
            for (const [key, value] of Object.entries(snapshot.val())) {
                temp[temp.length] = value;
              }
            setUsers(temp);
        }
    })
  }

  //// Return HTML
  return (
    <div className="home">
      <div className="home-header">
        <h1>Online <b style={{color: "#9900ff"}}>Persona</b></h1>
        <div className="header-description">
          Participants complete a survey, answering some questions pertaining to their opinions and views of their online personas. Responses will be archived and used to generate real-time data visualizations. It is recommended to take the survey first before viewing the resulting data visualization as some questions are intentionally left open-ended and abstract to prompt a response that best reflects one's interpretation of the question and purest reaction.
        </div>
        <nav><Link to="/">HOME</Link> | <Link to="/form">TAKE THE SURVEY</Link> | <Link to="/about">ABOUT</Link></nav>
      </div>

      <div className="home-visuals">
        <div className="visual">
          <h4><Link to="/compass">Compass</Link></h4>
          <div className="img-container">
            <Link to="/compass"><img src={CompassImg} className="visual-img"></img></Link>
          </div>
        </div>
        <div className="visual">
          <h4><Link to="/user-defined">User Defined</Link></h4>
          <div className="img-container">
            <Link to="/user-defined"><img src={UserDefinedImg} className="visual-img"></img></Link>
          </div>
        </div>
        <div className="visual">
          <h4><Link to="/the-crossing">The Crossing</Link></h4>
          <div>
            <Link to="/the-crossing"><img src={TheCrossingImg} className="visual-img"></img></Link>
          </div>
        </div>
      </div>
    </div>
  );
  ////
}
