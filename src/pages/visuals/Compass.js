import React,{useState,useEffect} from "react";
import Sketch from "react-p5";
import * as firebase from 'firebase';

export default (props) => {
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
    
    // console.log(users[users.length-1] && users[users.length-1].id);
    var cnv;
    var data = users;
    var dots = [];
    let gXrange = [];
    let gYrange = [];
    let size = 30;
 
    const centerCanvas = (p5) => {
        var x = (p5.windowWidth - p5.width) / 2;
        var y = (p5.windowHeight - p5.height) / 2;
        cnv.position(x, y);
    };
    
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        centerCanvas(p5);
        cnv.parent(canvasParentRef);
        p5.noStroke();
    };
 
    const draw = (p5) => {
        p5.background(254,222,168);
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        var width = p5.windowWidth;
        var height = p5.windowHeight;

        //Grid
        p5.push();
        p5.rectMode(p5.CENTER);
        p5.strokeWeight(4);
        p5.stroke(0);
        p5.rect(width/2, height/2, 0, height-size);
        p5.rect(width/2, height/2, p5.dist(width/2,size,width/2,height-size), 0);
        p5.pop();

        //Points
        /*p5.ellipse(width/2-p5.dist(width/2,size,width/2,height/2), height/2,size,size);
        p5.ellipse(width/2, height/2,size,size);
        p5.ellipse(width/2+p5.dist(width/2,size,width/2,height/2), height/2,size,size);
        p5.ellipse(width/2,size,size,size);
        p5.ellipse(width/2,height-size,size,size);*/
        
        //Calculate Range for X and Y axis
        let xRange = [width/2-p5.dist(width/2,size,width/2,height/2),width/2+p5.dist(width/2,size,width/2,height/2)];
        //let mapX = p5.map(x,-10,10,xRange[0],xRange[1]);
        let yRange = [size, height-size];
        //let mapY = p5.map(y,-10,10,yRange[0],yRange[1]);
        gXrange = xRange;
        gYrange = yRange;
        
        //Grid Text
        p5.push();
        p5.fill(0);
        p5.textSize(size);
        p5.textAlign(p5.RIGHT, p5.CENTER);
        p5.text('MASK',width/2-p5.dist(width/2,size,width/2,height/2), height/2);
        p5.text('SPIRITUAL ',width/2,size);
        p5.textAlign(p5.LEFT, p5.CENTER);
        p5.text('MIRROR',width/2+p5.dist(width/2,size,width/2,height/2), height/2);
        p5.text(' SECULAR',width/2,height-size);
        p5.textAlign(p5.LEFT, p5.TOP);
        p5.pop();

        for(var i=0; i<data.length; i++){
            //p5.ellipse(i*50+100,i*50+100,50,50);
            let dot = new Dot(p5,data[i],i);
        }
    };

    const Dot = (p5,arr,i) => {
        let x = 0;
        let y = 0;
        let color = p5.color(0,0,0);

        if(arr.age == 'youth'){
            color = p5.color(157,7,7);
        }else if(arr.age == 'young adult'){
            color = p5.color(18,153,221);
        }else if(arr.age == 'middle age'){
            color = p5.color(184,205,88);
        }else if(arr.age == 'older age'){
            color = p5.color(222,114,43);
        }

        let genderNum = 0;
        let isGenderSame = false;
        for(var g=0; g<arr.genderPersonas.length; g++){
            if(arr.genderPersonas[g] != ""){
                genderNum++;
            }
            if(arr.genderPersonas[g] == arr.gender){
                isGenderSame = true;
            }
        }

        if(genderNum > 1){
            x-=1;
        }else if(genderNum==1 && isGenderSame){
            x+=1;
        }

        let thinkAmount = 0;
        if(arr.thinking >= 5){
            thinkAmount = p5.abs(p5.map(arr.thinking,5,10,1,6));
            if(thinkAmount == 6){
                thinkAmount = 5;
            }
            x+=thinkAmount;
        }else{
            thinkAmount = p5.abs(p5.map(arr.thinking,0,4,5,1));
            x-=thinkAmount;
        }

        if(arr.speech){
            x+=2;
        }else{
            x-=2;
        }

        if(arr.numberOfPersona > 1){
            y+=1;
        }else if(arr.numberOfPersona <= 1){
            y-=1;
        }

        let digiRep = 0;
        if(arr.digitalRepresentation >= 5){
            digiRep = p5.abs(p5.map(arr.digitalRepresentation,5,10,1,6));
            if(digiRep == 6){
                digiRep = 5;
            }
            y+=digiRep;
        }else{
            digiRep = p5.abs(p5.map(arr.digitalRepresentation,0,4,5,1));
            y-=digiRep;
        }

        if(arr.place){
            y+=2;
        }else{
            y-=2;
        }

        if(arr.version == 'same'){
            y-=2;
            x+=2;
        }else if(arr.version == ''){
            y+=0;
            x+=0;
        }else{
            y+=2;
            x-=2;
        }

        p5.fill(color);
        let mapX = p5.map(x,-10,10,gXrange[0],gXrange[1]);
        let mapY = p5.map(y,-10,10,gYrange[0],gYrange[1]);
        p5.ellipse(mapX,mapY,size,size);
    }
 
    return <Sketch setup={setup} draw={draw} />;
};