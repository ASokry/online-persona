(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/compass.79fdd1f5.png"},34:function(e,a,t){e.exports=t(58)},40:function(e,a,t){},41:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),o=(t(39),t(40),t(12)),i=t(9),s=t(5),u=(t(41),t(29)),m=t.n(u),d=t(17);function E(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)(function(){d.database().ref("responses").on("value",function(e){var a=[];if(null!=e.val()){for(var n=0,l=Object.entries(e.val());n<l.length;n++){var r=l[n],c=Object(s.a)(r,2),o=(c[0],c[1]);a[a.length]=o}t(a)}})},[]),l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home-header"},l.a.createElement("h1",null,"Online ",l.a.createElement("b",{style:{color:"#9900ff"}},"Persona")),l.a.createElement("div",{className:"header-description"},"Participants complete a survey, answering some questions pertaining to their opinions and views of their online personas. Responses will be archived and used to generate real-time data visualizations. It is recommended to take the survey first before viewing the resulting data visualization as some questions are intentionally left open-ended and abstract to prompt a response that best reflects your interpretation of the question and purest reaction."),l.a.createElement("nav",null,l.a.createElement(o.b,{to:"/"},"HOME")," | ",l.a.createElement(o.b,{to:"/form"},"TAKE THE SURVEY")," | ",l.a.createElement(o.b,{to:"/about"},"ABOUT"))),l.a.createElement("div",{className:"home-visuals"},l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,l.a.createElement(o.b,{to:"/compass"},"Compass")),l.a.createElement("div",null,l.a.createElement(o.b,{to:"/compass"},l.a.createElement("img",{src:m.a,className:"visual-img"})))),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"Word Scrolling"),l.a.createElement("div",null,"(Coming Soon)")),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"The Crossing"),l.a.createElement("div",null,"(Coming Soon)"))))}t(56);function h(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-header"},l.a.createElement("h1",null,"Online ",l.a.createElement("b",{style:{color:"#9900ff"}},"Persona")),l.a.createElement("div",{className:"about-description"},"A project serving as an exploration of how people interpret and associate with their online identities and internet personas to reveal hidden connections within the collective unconscious."),l.a.createElement("nav",null,l.a.createElement(o.b,{to:"/"},"HOME")," | ",l.a.createElement(o.b,{to:"/form"},"TAKE THE SURVEY")," | ",l.a.createElement(o.b,{to:"/about"},"ABOUT"))),l.a.createElement("div",{className:"about-visuals"},l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"Compass"),l.a.createElement("div",null,"A dot is placed on a grid-like chart for every user who has completed the survey. The dot represents every user and is placed on the chart based on their responses. Along each axis represents a pair of opposing views towards the idea of the online persona. On the X-axis is the idea of the Mask vs the Mirror where the Mask represents the online persona as another person or entity and the Mirror represents the same person or a reflection of self. On the Y-axis is the idea of the spiritual vs the secular, where the spiritual side views the online persona as something more than just a digital representation of self and the secular side views it as having no special significance. The colors of the dots are based on what age group the users are from. Youths being red, young adults are blue, middle age is green, and older age is orange.")),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"Word Scrolling"),l.a.createElement("div",null,"Personal definitions of what is an online persona scroll from the right side to the left. A way to truly best witness any underlying connections that we all have in how we view and define online personas.")),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"The Crossing"),l.a.createElement("div",null,"(Coming Soon)"))))}var b=t(33),v=t(32),f=t(60),p=t(61),g=t(62),y=t(63),k=t(65),O=t(64);t(57);function w(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)([]),c=Object(s.a)(r,2),i=(c[0],c[1]),u=Object(n.useState)(["youth","young adult","middle age","older age"]),m=Object(s.a)(u,1)[0],E=Object(n.useState)(""),h=Object(s.a)(E,2),w=(h[0],h[1]),j=Object(n.useState)(["male","female","nonbinary","trans","genderqueer","agender","other",""]),q=Object(s.a)(j,1)[0],C=Object(n.useState)(""),N=Object(s.a)(C,2),S=(N[0],N[1]),x=Object(n.useState)(""),A=Object(s.a)(x,2),T=(A[0],A[1]),M=Object(n.useState)(0),H=Object(s.a)(M,2),W=(H[0],H[1]),I=Object(n.useState)({objects:[{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""}]}),P=Object(s.a)(I,2),Y=P[0],B=P[1],U=Object(n.useState)(5),z=Object(s.a)(U,2),D=z[0],R=z[1],V=Object(n.useState)(""),G=Object(s.a)(V,2),K=(G[0],G[1]),F=Object(n.useState)(0),J=Object(s.a)(F,2),L=(J[0],J[1]),Q=Object(n.useState)(""),Z=Object(s.a)(Q,2),X=(Z[0],Z[1]),$=Object(n.useState)(5),_=Object(s.a)($,2),ee=_[0],ae=_[1],te=Object(n.useState)(!1),ne=Object(s.a)(te,2),le=(ne[0],ne[1]),re=Object(n.useState)(""),ce=Object(s.a)(re,2),oe=(ce[0],ce[1]),ie=Object(n.useState)(""),se=Object(s.a)(ie,2),ue=(se[0],se[1]),me=Object(n.useState)(!1),de=Object(s.a)(me,2),Ee=(de[0],de[1]);function he(e,a,t,n){var l=Object(v.a)(a.objects);l[t].val=e?n:null,B(Object(b.a)({},a,{objects:l}))}function be(){d.database().ref("responses").on("value",function(e){var a=[];if(null!=e.val()){for(var n=0,l=Object.entries(e.val());n<l.length;n++){var r=l[n],c=Object(s.a)(r,2),o=(c[0],c[1]);a[a.length]=o}i(a),t(a.length+function(e){for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}())}})}Object(n.useEffect)(function(){be()},[]);return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-header"},l.a.createElement("h1",null,"Online ",l.a.createElement("b",{style:{color:"#9900ff"}},"Persona")),l.a.createElement("div",{className:"form-description"},"Take your time filling out this form. After the form has been filled out completely, please click on the Submit button at the bottom of the page."),l.a.createElement("nav",null,l.a.createElement(o.b,{to:"/"},"HOME")," | ",l.a.createElement(o.b,{to:"/form"},"TAKE THE SURVEY")," | ",l.a.createElement(o.b,{to:"/about"},"ABOUT"))),l.a.createElement("div",{className:"form-questions"},l.a.createElement(f.a,{onSubmit:function(e){!function(e){e.preventDefault(),window.location.href="/online-persona/#/about"}(e)}},l.a.createElement(p.a,{tag:"fieldset"},l.a.createElement(g.a,{className:"question-title"},"What is your age group?"),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-0",value:m[0],onClick:function(e){w(e.target.value)}}),"17 or lower")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-1",value:m[1],onClick:function(e){w(e.target.value)}}),"18 - 35")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-2",value:m[2],onClick:function(e){w(e.target.value)}}),"36 - 55")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-3",value:m[3],onClick:function(e){w(e.target.value)}}),"56 or older"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{tag:"fieldset"},l.a.createElement(g.a,{className:"question-title"},"What gender do you identify with?"),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-0",value:q[0],onClick:function(e){S(e.target.value)}}),"Male")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-1",value:q[1],onClick:function(e){S(e.target.value)}}),"Female")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-2",value:q[2],onClick:function(e){S(e.target.value)}}),"Nonbinary")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-3",value:q[3],onClick:function(e){S(e.target.value)}}),"Trans")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-4",value:q[4],onClick:function(e){S(e.target.value)}}),"Genderqueer")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-5",value:q[5],onClick:function(e){S(e.target.value)}}),"Agender")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-6",value:q[6],onClick:function(e){S(e.target.value)}}),"Other")),l.a.createElement(p.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-7",value:q[7],onClick:function(e){S(e.target.value)}}),"Prefer Not to Answer"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"In your own words, please briefly describe what an ",l.a.createElement("b",null,"online persona")," is."),l.a.createElement(y.a,{type:"textarea",name:"text1",id:"q3",onChange:function(e){T(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"How many ",l.a.createElement("b",null,"online personas")," do you think you have?"),l.a.createElement(y.a,{type:"number",name:"number1",id:"q4",onChange:function(e){W(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"What gender(s) does your ",l.a.createElement("b",null,"online persona(s)")," identify with?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"checkbox",id:"q5-0",label:"Male",value:q[0],onClick:function(e){he(e.target.checked,Y,0,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-1",label:"Female",value:q[1],onClick:function(e){he(e.target.checked,Y,1,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-2",label:"Nonbinary",value:q[2],onClick:function(e){he(e.target.checked,Y,2,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-3",label:"Trans",value:q[3],onClick:function(e){he(e.target.checked,Y,3,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-4",label:"Genderqueer",value:q[4],onClick:function(e){he(e.target.checked,Y,4,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-5",label:"Agender",value:q[5],onClick:function(e){he(e.target.checked,Y,5,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-6",label:"Other",value:q[6],onClick:function(e){he(e.target.checked,Y,6,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-7",label:"Prefer Not to Answer",value:q[7],onClick:function(e){he(e.target.checked,Y,7,e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"How much do you view your ",l.a.createElement("b",null,"online persona(s)")," as something more than a digital representation?"),l.a.createElement(k.a,{type:"range",id:"q6",name:"range1",min:0,max:10,step:1,defaultValue:5,onChange:function(e){R(e.target.value)}}),l.a.createElement("h1",{className:"numeric-rep"},D)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},'On what online platforms, or "digital ecosystems", does your ',l.a.createElement("b",null,"online persona(s)")," exist? (social media, video games, text, forums, video etc.) Be specific."),l.a.createElement(y.a,{type:"textarea",name:"text2",id:"q7",onChange:function(e){K(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"Generally, how often do you stay online per day as your ",l.a.createElement("b",null,"online persona(s)"),"?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"number",id:"q8-0",min:"0",placeholder:"number",onChange:function(e){L(Math.abs(e.target.value))},inline:!0})," ",l.a.createElement(k.a,{type:"radio",id:"q8-1",name:"radio3",label:"Seconds",value:"sec",onClick:function(e){X(e.target.value)},inline:!0}),l.a.createElement(k.a,{type:"radio",id:"q8-2",name:"radio3",label:"Minutes",value:"min",onClick:function(e){X(e.target.value)},inline:!0}),l.a.createElement(k.a,{type:"radio",id:"q8-3",name:"radio3",label:"Hours",value:"hr",onClick:function(e){X(e.target.value)},inline:!0}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"When you're offline, how often do you think of your ",l.a.createElement("b",null,"online persona(s)"),"? (0=never,10=all the time)"),l.a.createElement(k.a,{type:"range",id:"q9",name:"range2",min:0,max:10,step:1,defaultValue:5,onChange:function(e){ae(e.target.value)}}),l.a.createElement("h1",{className:"numeric-rep"},ee)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"Does your ",l.a.createElement("b",null,"online persona(s)")," have a different way of speaking than you?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"radio",id:"q10-0",name:"radio4",label:"Yes",onClick:function(){le(!0)}}),l.a.createElement(k.a,{type:"radio",id:"q10-1",name:"radio4",label:"No",onClick:function(){le(!1)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"In one or two words, how does your ",l.a.createElement("b",null,"online persona(s)")," conduct themselves when communicating or interacting with others?"),l.a.createElement(y.a,{type:"textarea",name:"text3",id:"q11",onChange:function(e){oe(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"Overall, is your ",l.a.createElement("b",null,"online persona(s)"),":"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"radio",id:"q12-0",name:"radio5",label:"A more ideal version of you ",onClick:function(){ue("more")}}),l.a.createElement(k.a,{type:"radio",id:"q12-1",name:"radio5",label:"Nearly identical to you",onClick:function(){ue("same")}}),l.a.createElement(k.a,{type:"radio",id:"q12-2",name:"radio5",label:"A lesser version of you",onClick:function(){ue("lesser")}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:"question-title"},"Do you ever feel like you are in two different places at once when you are online?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"radio",id:"q13-0",name:"radio6",label:"Yes",onClick:function(){Ee(!0)}}),l.a.createElement(k.a,{type:"radio",id:"q13-1",name:"radio6",label:"No",onClick:function(){Ee(!1)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(O.a,null,"Submit"))))}var j=t(31),q=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=(a[0],a[1]);Object(n.useEffect)(function(){d.database().ref("responses").on("value",function(e){var a=[];if(null!=e.val()){for(var n=0,l=Object.entries(e.val());n<l.length;n++){var r=l[n],c=Object(s.a)(r,2),o=(c[0],c[1]);a[a.length]=o}t(a)}})},[]);var r=function(e){var a;e.setup=function(){var a=e.createCanvas(e.windowWidth,e.windowHeight),t=(e.windowWidth-e.width)/2,n=(e.windowHeight-e.height)/2;a.position(t,n),e.noStroke()},e.draw=function(){e.background(254,222,168),e.ellipse(e.width/2,e.height/2,a,a),a++}};return Object(n.useEffect)(function(){new j(r)},[]),l.a.createElement(l.a.Fragment,null)},C=function(){return l.a.createElement(q,{id:"sketch-holder"})};function N(e){var a=[{path:"/about",component:h},{path:"/form",component:w},{path:"/compass",component:C}];return l.a.createElement(o.a,null,l.a.createElement(i.c,null,a.map(function(e,a){return l.a.createElement(i.a,{exact:!0,key:a,path:e.path,component:e.component})}),l.a.createElement(i.a,{component:E})))}d.initializeApp({apiKey:"AIzaSyB16oLZzyqhD1WSEdQZ2P86cYt1v7crf90",authDomain:"online-persona.firebaseapp.com",databaseURL:"https://online-persona.firebaseio.com",projectId:"online-persona",storageBucket:"online-persona.appspot.com",messagingSenderId:"897908280883",appId:"1:897908280883:web:627ed8fb27ee9a27571d46",measurementId:"G-NWSQSEMN2C"}),c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.36fe9f9e.chunk.js.map