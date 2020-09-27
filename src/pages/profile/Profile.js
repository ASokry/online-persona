import React,{useState} from 'react';
import './Profile.css'

export default function Profile() {
    let test = "my string";
    function here() { return 1 }
    const [data,setData] = useState("*");
    const [num,setNum] = useState(0);
    function increment() {
        setNum(num+1);
    }

    console.log("once");
    return (
        <div>
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