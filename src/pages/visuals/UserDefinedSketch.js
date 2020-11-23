import React,{useEffect} from "react";
import * as p5 from "p5";
import * as firebase from 'firebase';

const UserDefinedSketch = props => {
  function GoHome() {
    window.location.href = process.env.PUBLIC_URL + "/#/home";
    window.location.reload();
  }

  const Sketch = p5 => {
    var cnv;
    var data;
    var defs = [];
    var keys;

    var width;
    var height;
    var yScroll;
    var defsToScoll = [];

    const getData = (d) => {
      // console.log(d.val());
      data = d.val();
      keys = Object.keys(data);
      // console.log(keys);
      for(var i=0;i<keys.length;i++){
        var k = keys[i];
        // var init = data[k].age;
        // console.log(init);
        // let definition = new Definition(data[k]);
        let definition = data[k].describePersona;
        defs[i] = definition;
      }
      defsToScoll = shuffle(defs);
    }

    const errData = (err) => {
      console.log("Error!" + err);
    }

    p5.setup = () => {
      cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight);
      var x = (p5.windowWidth - p5.width) / 2;
      var y = (p5.windowHeight - p5.height) / 2;
      cnv.position(x, y);
      readDatabase();
      // console.log(p5.windowHeight);
      yScroll = p5.windowHeight;
      // defsToScoll.push(defs[p5.random(0,defs.length)]);
      // if(defsToScoll.includes(defs[0])){
      //   console.log(true);
      // }
      // console.log(defsToScoll.length);
    };
  
    p5.draw = () => {
      p5.background(255);
      
      width = p5.windowWidth;
      height = p5.windowHeight;

      p5.push();
      if(yScroll > -(height/2)*defsToScoll.length){
        // console.log(yScroll);
        yScroll--;
      }else{
        // console.log('fin');
        // defs.splice(0,1);
        yScroll = p5.windowHeight;
      }
      p5.translate(0,yScroll);
      p5.textAlign(p5.LEFT,p5.TOP);
      p5.textSize(45);
      p5.fill(0);
      // p5.text(defs[0],width-(width-50),0,width-50,height);
      for(var i=0; i<defsToScoll.length; i++) {
        p5.text(defsToScoll[i],width-(width-50),(height/2)*i,width-50,height);
      }
      p5.pop();

      p5.push();
      p5.strokeWeight(10);
      p5.rect(width-(width-10),0,width-20,height-(height-90));
      p5.textAlign(p5.LEFT,p5.TOP);
      p5.textSize(55);
      p5.text('Online Persona:',width-(width-20),height-(height-20),width);
      p5.pop();

      let button;
      button = p5.createButton('HOME');
      button.position(width-80, height-40);
      button.mousePressed(GoHome);
    };

    const readDatabase = () => {
      var ref = firebase.database().ref('responses');
      ref.on('value',getData,errData);
    };

    const shuffle = (arr) => {
      var array = arr;
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    };
  };

  
  useEffect(() => {
   new p5(Sketch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
     <></>
  );
 };
  
 export default UserDefinedSketch;
