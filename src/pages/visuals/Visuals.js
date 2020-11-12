import React,{useState,useEffect} from 'react';
import './Visuals.css';
import * as firebase from 'firebase';

function AboutPage() {
  let demo = "ss";
  const [users,setUsers] = useState([]);

  useEffect(()=>{readUserData()}, []);
  function readUserData() {
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

  return (
    <div className="home">
      <div className="home-header">
        <h1>Online <b style={{color: "#435de9"}}>Persona</b></h1>
        <div className="home-description">
            {users && users.map((stuff,index)=>{
                return <h1 key={index}> 
                    {stuff.name} {stuff.number}
                </h1>
            })}
        </div>
        <nav><a href="./">Home</a></nav>
        <nav><a href="./about">ABOUT</a> | <a href="./form">FORM</a> | <a href="./visuals">VISUALS</a></nav>
      </div>
    </div>
  );
}

export default AboutPage;
