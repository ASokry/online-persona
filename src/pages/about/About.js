import React,{useState} from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Online <b style={{color: "#9900ff"}}>Persona</b></h1>
        <div className="about-description">
          A project serving as an exploration of how people interpret and associate with their online identities and internet personas to reveal hidden connections within the collective unconscious.
        </div>
        <nav><Link to="/">HOME</Link> | <Link to="/form">TAKE THE SURVEY</Link> | <Link to="/about">ABOUT</Link></nav>
      </div>

      <div className="about-visuals">
        <div className="visual">
          <h4>Compass</h4>
          <div>
          A dot is placed on a grid-like chart for every user who has completed the survey. The dot represents every user and is placed on the chart based on their responses. Along each axis represents a pair of opposing views towards the idea of the online persona. On the X-axis is the idea of the Mask vs the Mirror where the Mask represents the online persona as another person or entity and the Mirror represents the same person or a reflection of self. On the Y-axis is the idea of the spiritual vs the secular, where the spiritual side views the online persona as something more than just a digital representation of self and the secular side views it as having no special significance. The colors of the dots are based on what age group the users are from. Youths being red, young adults are blue, middle age is green, and older age is orange.
          </div>
        </div>
        <div className="visual">
          <h4>Word Scrolling</h4>
          <div>
          Personal definitions of what is an online persona scroll from the right side to the left. A way to truly best witness any underlying connections that we all have in how we view and define online personas.
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
}
