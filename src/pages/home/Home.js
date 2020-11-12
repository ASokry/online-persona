import React,{useState,useEffect} from 'react';
// import './Home.css';
import './customHome.css';
import CompassImg from './img/compass.png';
import * as firebase from 'firebase';

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
          Participants complete a survey, answering some questions pertaining to their opinions and views of their online personas. Responses will be archived and used to generate real-time data visualizations. It is recommended to take the survey first before viewing the resulting data visualization as some questions are intentionally left open-ended and abstract to prompt a response that best reflects your interpretation of the question and purest reaction.
        </div>
        <nav><a href="/">HOME</a> | <a href="/form">TAKE THE SURVEY</a> | <a href="/about">ABOUT</a></nav>
      </div>

      <div className="home-visuals">
        <div className="visual">
          <h4><a href="/compass">Compass</a></h4>
          <div>
            <a href="/compass"><img src={CompassImg} className="visual-img"></img></a>
          </div>
        </div>
        <div className="visual">
          <h4>Word Scrolling</h4>
          <div>
            (Coming Soon)
          </div>
        </div>
        <div className="visual">
          <h4>The Crossing</h4>
          <div>
            (Coming Soon)
          </div>
        </div>
      </div>
    </div>
  );
  ////
}
