import React,{useState,useEffect} from 'react';
import './Profile.css'
import * as firebase from 'firebase';

export default function Profile() {
    let test = "my string";
    function here() { return 1 }
    // Will re-render on change of value
    const [data,setData] = useState("*");
    const [num,setNum] = useState(0);
    const [users,setUsers] = useState([]);

    useEffect(()=>{readUser()}, []);
    function increment() {
        setNum(num+1);
    }

    function writeUserData() {
        let obj = {
            name:"Commander",
            age: 90
        }
        firebase.database().ref('users/sokry').set(obj);
      }
    
    function readUser() {
        firebase.database().ref('users').on('value',(snapshot)=>{
            //console.log(snapshot.val());
            // theItems = snapshot.val();
            // console.log(theItems.sokry);
            // console.log(theItems.sokry.age);
            let temp = [];
            for (const [key, value] of Object.entries(snapshot.val())) {
                //console.log(value.name, value.age);
                temp[temp.length] = value;
              }
            setUsers(temp);
        })
    }

    console.log(users);
    return (
        <div>
            {users.map((stuff,index)=>{
                return <h1 key={index}>{stuff.name}</h1>
            })}

            <h1>{data} {num}</h1>
            <input onChange={(event)=>{setData(event.target.value)}}></input>
            <button onClick={()=>{increment()}}>THAI Force!!!</button>
            <br></br>
            HTML IN HERE {test}
            <br></br>
            Example:

            <h1>HI! My name is THAI</h1>

               BIO:
            <ul>
                <li>I like to breathe</li>
                <li>I lost too much money in the stock market please help :(</li>
                <li>IDK what to write here</li>
            </ul>

        </div>
    );
}