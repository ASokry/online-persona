(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/compass.79fdd1f5.png"},34:function(e,a,t){e.exports=t(58)},40:function(e,a,t){},41:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),o=t.n(r),c=(t(39),t(40),t(12)),i=t(9),s=t(8),u=(t(41),t(29)),m=t.n(u),d=t(17);function E(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)(function(){d.database().ref("responses").on("value",function(e){var a=[];if(null!=e.val()){for(var n=0,l=Object.entries(e.val());n<l.length;n++){var r=l[n],o=Object(s.a)(r,2),c=(o[0],o[1]);a[a.length]=c}t(a)}})},[]),l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home-header"},l.a.createElement("h1",null,"Online ",l.a.createElement("b",{style:{color:"#9900ff"}},"Persona")),l.a.createElement("div",{className:"header-description"},"Participants complete a survey, answering some questions pertaining to their opinions and views of their online personas. Responses will be archived and used to generate real-time data visualizations. It is recommended to take the survey first before viewing the resulting data visualization as some questions are intentionally left open-ended and abstract to prompt a response that best reflects your interpretation of the question and purest reaction."),l.a.createElement("nav",null,l.a.createElement(c.b,{to:"/"},"HOME")," | ",l.a.createElement(c.b,{to:"/form"},"TAKE THE SURVEY")," | ",l.a.createElement(c.b,{to:"/about"},"ABOUT"))),l.a.createElement("div",{className:"home-visuals"},l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,l.a.createElement(c.b,{to:"/compass"},"Compass")),l.a.createElement("div",null,l.a.createElement(c.b,{to:"/compass"},l.a.createElement("img",{src:m.a,className:"visual-img"})))),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"Word Scrolling"),l.a.createElement("div",null,"(Coming Soon)")),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"The Crossing"),l.a.createElement("div",null,"(Coming Soon)"))))}t(56);function h(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-header"},l.a.createElement("h1",null,"Online ",l.a.createElement("b",{style:{color:"#9900ff"}},"Persona")),l.a.createElement("div",{className:"about-description"},"A project serving as an exploration of how people interpret and associate with their online identities and internet personas to reveal hidden connections within the collective unconscious."),l.a.createElement("nav",null,l.a.createElement(c.b,{to:"/"},"HOME")," | ",l.a.createElement(c.b,{to:"/form"},"TAKE THE SURVEY")," | ",l.a.createElement(c.b,{to:"/about"},"ABOUT"))),l.a.createElement("div",{className:"about-visuals"},l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"Compass"),l.a.createElement("div",null,"A dot is placed on a grid-like chart for every user who has completed the survey. The dot represents every user and is placed on the chart based on their responses. Along each axis represents a pair of opposing views towards the idea of the online persona. On the X-axis is the idea of the Mask vs the Mirror where the Mask represents the online persona as another person or entity and the Mirror represents the same person or a reflection of self. On the Y-axis is the idea of the spiritual vs the secular, where the spiritual side views the online persona as something more than just a digital representation of self and the secular side views it as having no special significance. The colors of the dots are based on what age group the users are from. Youths being red, young adults are blue, middle age is green, and older age is orange.")),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"Word Scrolling"),l.a.createElement("div",null,"Personal definitions of what is an online persona scroll from the right side to the left. A way to truly best witness any underlying connections that we all have in how we view and define online personas.")),l.a.createElement("div",{className:"visual"},l.a.createElement("h4",null,"The Crossing"),l.a.createElement("div",null,"(Coming Soon)"))))}var b=t(33),p=t(32),v=t(60),f=t(61),g=t(62),y=t(63),k=t(65),w=t(64);t(57);function O(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),i=Object(s.a)(o,2),u=(i[0],i[1]),m=Object(n.useState)(["youth","young adult","middle age","older age"]),E=Object(s.a)(m,1)[0],h=Object(n.useState)(""),O=Object(s.a)(h,2),q=O[0],j=O[1],C=Object(n.useState)(["male","female","nonbinary","trans","genderqueer","agender","other",""]),N=Object(s.a)(C,1)[0],S=Object(n.useState)(""),x=Object(s.a)(S,2),A=x[0],T=x[1],P=Object(n.useState)(""),R=Object(s.a)(P,2),M=R[0],H=R[1],I=Object(n.useState)(0),W=Object(s.a)(I,2),U=W[0],Y=W[1],B=Object(n.useState)({objects:[{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""},{id:0,val:""}]}),z=Object(s.a)(B,2),L=z[0],D=z[1],F=Object(n.useState)(5),G=Object(s.a)(F,2),K=G[0],V=G[1],J=Object(n.useState)(""),Q=Object(s.a)(J,2),Z=Q[0],X=Q[1],$=Object(n.useState)(0),_=Object(s.a)($,2),ee=_[0],ae=_[1],te=Object(n.useState)(""),ne=Object(s.a)(te,2),le=ne[0],re=ne[1],oe=Object(n.useState)(5),ce=Object(s.a)(oe,2),ie=ce[0],se=ce[1],ue=Object(n.useState)(!1),me=Object(s.a)(ue,2),de=me[0],Ee=me[1],he=Object(n.useState)(""),be=Object(s.a)(he,2),pe=be[0],ve=be[1],fe=Object(n.useState)(""),ge=Object(s.a)(fe,2),ye=ge[0],ke=ge[1],we=Object(n.useState)(!1),Oe=Object(s.a)(we,2),qe=Oe[0],je=Oe[1];function Ce(e,a,t,n){var l=Object(p.a)(a.objects);l[t].val=e?n:null,D(Object(b.a)({},a,{objects:l}))}function Ne(){d.database().ref("responses").on("value",function(e){var a=[];if(null!=e.val()){for(var t=0,n=Object.entries(e.val());t<n.length;t++){var l=n[t],o=Object(s.a)(l,2),c=(o[0],o[1]);a[a.length]=c}u(a),r(a.length+function(e){for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}())}})}function Se(e){e.preventDefault(),function(){Ne();var e={age:q,gender:A,describePersona:M,numberOfPersona:U,genderPersonas:L,digitalRepresentation:K,platforms:Z,online:ee+le,thinking:ie,speech:de,conduct:pe,version:ye,place:qe};d.database().ref("responses/user"+t).set(e)}(),window.location.href="/online-persona/#/about"}Object(n.useEffect)(function(){Ne()},[]);return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-header"},l.a.createElement("h1",null,"Online ",l.a.createElement("b",{style:{color:"#9900ff"}},"Persona")),l.a.createElement("div",{className:"form-description"},"Take your time filling out this form. After the form has been filled out completely, please click on the Submit button at the bottom of the page."),l.a.createElement("nav",null,l.a.createElement(c.b,{to:"/"},"HOME")," | ",l.a.createElement(c.b,{to:"/form"},"TAKE THE SURVEY")," | ",l.a.createElement(c.b,{to:"/about"},"ABOUT"))),l.a.createElement("div",{className:"form-questions"},l.a.createElement(v.a,{onSubmit:function(e){Se(e)}},l.a.createElement(f.a,{tag:"fieldset"},l.a.createElement(g.a,{className:"question-title"},"What is your age group?"),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-0",value:E[0],onClick:function(e){j(e.target.value)}}),"17 or lower")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-1",value:E[1],onClick:function(e){j(e.target.value)}}),"18 - 35")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-2",value:E[2],onClick:function(e){j(e.target.value)}}),"36 - 55")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio1",id:"q1-3",value:E[3],onClick:function(e){j(e.target.value)}}),"56 or older"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{tag:"fieldset"},l.a.createElement(g.a,{className:"question-title"},"What gender do you identify with?"),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-0",value:N[0],onClick:function(e){T(e.target.value)}}),"Male")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-1",value:N[1],onClick:function(e){T(e.target.value)}}),"Female")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-2",value:N[2],onClick:function(e){T(e.target.value)}}),"Nonbinary")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-3",value:N[3],onClick:function(e){T(e.target.value)}}),"Trans")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-4",value:N[4],onClick:function(e){T(e.target.value)}}),"Genderqueer")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-5",value:N[5],onClick:function(e){T(e.target.value)}}),"Agender")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-6",value:N[6],onClick:function(e){T(e.target.value)}}),"Other")),l.a.createElement(f.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(y.a,{type:"radio",name:"radio2",id:"q2-7",value:N[7],onClick:function(e){T(e.target.value)}}),"Prefer Not to Answer"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"In your own words, please briefly describe what an ",l.a.createElement("b",null,"online persona")," is."),l.a.createElement(y.a,{type:"textarea",name:"text1",id:"q3",onChange:function(e){H(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"How many ",l.a.createElement("b",null,"online personas")," do you think you have?"),l.a.createElement(y.a,{type:"number",name:"number1",id:"q4",onChange:function(e){Y(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"What gender(s) does your ",l.a.createElement("b",null,"online persona(s)")," identify with?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"checkbox",id:"q5-0",label:"Male",value:N[0],onClick:function(e){Ce(e.target.checked,L,0,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-1",label:"Female",value:N[1],onClick:function(e){Ce(e.target.checked,L,1,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-2",label:"Nonbinary",value:N[2],onClick:function(e){Ce(e.target.checked,L,2,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-3",label:"Trans",value:N[3],onClick:function(e){Ce(e.target.checked,L,3,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-4",label:"Genderqueer",value:N[4],onClick:function(e){Ce(e.target.checked,L,4,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-5",label:"Agender",value:N[5],onClick:function(e){Ce(e.target.checked,L,5,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-6",label:"Other",value:N[6],onClick:function(e){Ce(e.target.checked,L,6,e.target.value)}}),l.a.createElement(k.a,{type:"checkbox",id:"q5-7",label:"Prefer Not to Answer",value:N[7],onClick:function(e){Ce(e.target.checked,L,7,e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"How much do you view your ",l.a.createElement("b",null,"online persona(s)")," as something more than a digital representation?"),l.a.createElement(k.a,{type:"range",id:"q6",name:"range1",min:0,max:10,step:1,defaultValue:5,onChange:function(e){V(e.target.value)}}),l.a.createElement("h1",{className:"numeric-rep"},K)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},'On what online platforms, or "digital ecosystems", does your ',l.a.createElement("b",null,"online persona(s)")," exist? (social media, video games, text, forums, video etc.) Be specific."),l.a.createElement(y.a,{type:"textarea",name:"text2",id:"q7",onChange:function(e){X(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"Generally, how often do you stay online per day as your ",l.a.createElement("b",null,"online persona(s)"),"?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"number",id:"q8-0",min:"0",placeholder:"number",onChange:function(e){ae(Math.abs(e.target.value))},inline:!0})," ",l.a.createElement(k.a,{type:"radio",id:"q8-1",name:"radio3",label:"Seconds",value:"sec",onClick:function(e){re(e.target.value)},inline:!0}),l.a.createElement(k.a,{type:"radio",id:"q8-2",name:"radio3",label:"Minutes",value:"min",onClick:function(e){re(e.target.value)},inline:!0}),l.a.createElement(k.a,{type:"radio",id:"q8-3",name:"radio3",label:"Hours",value:"hr",onClick:function(e){re(e.target.value)},inline:!0}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"When you're offline, how often do you think of your ",l.a.createElement("b",null,"online persona(s)"),"? (0=never,10=all the time)"),l.a.createElement(k.a,{type:"range",id:"q9",name:"range2",min:0,max:10,step:1,defaultValue:5,onChange:function(e){se(e.target.value)}}),l.a.createElement("h1",{className:"numeric-rep"},ie)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"Does your ",l.a.createElement("b",null,"online persona(s)")," have a different way of speaking than you?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"radio",id:"q10-0",name:"radio4",label:"Yes",onClick:function(){Ee(!0)}}),l.a.createElement(k.a,{type:"radio",id:"q10-1",name:"radio4",label:"No",onClick:function(){Ee(!1)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"In one or two words, how does your ",l.a.createElement("b",null,"online persona(s)")," conduct themselves when communicating or interacting with others?"),l.a.createElement(y.a,{type:"textarea",name:"text3",id:"q11",onChange:function(e){ve(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"Overall, is your ",l.a.createElement("b",null,"online persona(s)"),":"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"radio",id:"q12-0",name:"radio5",label:"A more ideal version of you ",onClick:function(){ke("more")}}),l.a.createElement(k.a,{type:"radio",id:"q12-1",name:"radio5",label:"Nearly identical to you",onClick:function(){ke("same")}}),l.a.createElement(k.a,{type:"radio",id:"q12-2",name:"radio5",label:"A lesser version of you",onClick:function(){ke("lesser")}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(g.a,{className:"question-title"},"Do you ever feel like you are in two different places at once when you are online?"),l.a.createElement("div",null,l.a.createElement(k.a,{type:"radio",id:"q13-0",name:"radio6",label:"Yes",onClick:function(){je(!0)}}),l.a.createElement(k.a,{type:"radio",id:"q13-1",name:"radio6",label:"No",onClick:function(){je(!1)}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w.a,null,"Submit"))))}var q=t(31),j=function(e){var a=function(e){var a,t,n,l,r,o=function(e){t=e.val(),n=Object.keys(t);for(var a=0;a<n.length;a++){var l=n[a];new i(t[l])}},c=function(e){console.log("Error!"+e)};e.setup=function(){a=e.createCanvas(e.windowWidth,e.windowHeight);var t=(e.windowWidth-e.width)/2,n=(e.windowHeight-e.height)/2;a.position(t,n),e.noStroke()},e.mouseClicked=function(){console.log("hi")},e.draw=function(){e.background(0);var a=d.database().ref("responses"),t=e.windowWidth,n=e.windowHeight;e.push(),e.rectMode(e.CENTER),e.strokeWeight(4),e.stroke(0),e.rect(t/2,n/2,0,n-30),e.rect(t/2,n/2,e.dist(t/2,30,t/2,n-30),0),e.pop(),l=[t/2-e.dist(t/2,30,t/2,n/2),t/2+e.dist(t/2,30,t/2,n/2)],r=[30,n-30],e.push(),e.fill(0),e.textSize(30),e.textAlign(e.RIGHT,e.CENTER),e.text("MASK",t/2-e.dist(t/2,30,t/2,n/2),n/2),e.text("SPIRITUAL ",t/2,30),e.textAlign(e.LEFT,e.CENTER),e.text("MIRROR",t/2+e.dist(t/2,30,t/2,n/2),n/2),e.text(" SECULAR",t/2,n-30),e.textAlign(e.LEFT,e.TOP),e.pop(),a.on("value",o,c)};var i=function(a){var t=0,n=0,o=e.color(0,0,0);"youth"==a.age?o=e.color(157,7,7):"young adult"==a.age?o=e.color(18,153,221):"middle age"==a.age?o=e.color(184,205,88):"older age"==a.age&&(o=e.color(222,114,43));for(var c=0,i=!1,s=0;s<a.genderPersonas.length;s++)""!=a.genderPersonas[s]&&c++,a.genderPersonas[s]==a.gender&&(i=!0);c>1?t-=1:1==c&&i&&(t+=1);var u=0;a.thinking>=5?(6==(u=e.abs(e.map(a.thinking,5,10,1,6)))&&(u=5),t+=u):t-=u=e.abs(e.map(a.thinking,0,4,5,1)),a.speech?t+=2:t-=2,a.numberOfPersona>1?n+=1:a.numberOfPersona<=1&&(n-=1);var m=0;a.digitalRepresentation>=5?(6==(m=e.abs(e.map(a.digitalRepresentation,5,10,1,6)))&&(m=5),n+=m):n-=m=e.abs(e.map(a.digitalRepresentation,0,4,5,1)),a.place?n+=2:n-=2,"same"==a.version?(n-=2,t+=2):""==a.version?(n+=0,t+=0):(n+=2,t-=2),e.fill(o);var d=e.map(t,-10,10,l[0],l[1]),E=e.map(n,-10,10,r[0],r[1]);e.ellipse(d,E,30,30)}};return Object(n.useEffect)(function(){new q(a)},[]),l.a.createElement(l.a.Fragment,null)},C=function(){return l.a.createElement(j,null)};function N(e){var a=[{path:"/about",component:h},{path:"/form",component:O},{path:"/compass",component:C}];return l.a.createElement(c.a,null,l.a.createElement(i.c,null,a.map(function(e,a){return l.a.createElement(i.a,{exact:!0,key:a,path:e.path,component:e.component})}),l.a.createElement(i.a,{component:E})))}d.initializeApp({apiKey:"AIzaSyB16oLZzyqhD1WSEdQZ2P86cYt1v7crf90",authDomain:"online-persona.firebaseapp.com",databaseURL:"https://online-persona.firebaseio.com",projectId:"online-persona",storageBucket:"online-persona.appspot.com",messagingSenderId:"897908280883",appId:"1:897908280883:web:627ed8fb27ee9a27571d46",measurementId:"G-NWSQSEMN2C"}),o.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f70dc0de.chunk.js.map