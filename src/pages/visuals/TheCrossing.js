import React, { Component } from "react";
// import ReactDOM from "react-dom";
import * as THREE from "three";
import { OrbitControls } from './OrbitControls.js';
import { GUI } from './dat.gui.module.js';
import * as firebase from 'firebase';

class ThreeScene extends Component {
    componentDidMount() {
        const params = {
            goHome: GoHome
        };

        let genderCol = [
            {gender: 'male', color: new THREE.MeshBasicMaterial({color: 0x5a12a3, wireframe:false})},
            {gender: 'female', color: new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:false})},
            {gender: 'nonbinary', color: new THREE.MeshBasicMaterial({color: 0xffe500, wireframe:false})},
            {gender: 'trans', color: new THREE.MeshBasicMaterial({color: 0xa62e8, wireframe:false})},
            {gender: 'genderqueer', color: new THREE.MeshBasicMaterial({color: 0x2a9346, wireframe:false})},
            {gender: 'agender', color: new THREE.MeshBasicMaterial({color: 0xe0822b, wireframe:false})},
            {gender: 'other', color: new THREE.MeshBasicMaterial({color: 0xf6b6d1, wireframe:false})},
            {gender: '', color: new THREE.MeshBasicMaterial({color: 0x924900, wireframe:true})}
        ];
        let spheres = [];
        let isEmpty = true;
        var ref = firebase.database().ref('responses');
        
        const getData = (d) => {
            var data = d.val();
            var keys = Object.keys(data);

            for(var i=0;i<keys.length;i++){
                var k = keys[i];
                addSphere(data[k],i);
            }
            isEmpty = false;
        };

        const errData = (err) => {console.log("Error!" + err);};

        var addSphere = function(arr,num) {
            // console.log("new");
            var sphere, color, newColor;
            var sphereGeom = new THREE.SphereGeometry( 5, 32, 32 );
            var personaGenders = [];

            if(arr.gender != '') {
                for(var i=0; i<genderCol.length; i++) {
                    if(arr.gender == genderCol[i].gender) {
                        color = genderCol[i].color;
                    }
                }
            }
            else {
                color = genderCol[7].color;
            }
            // console.log(arr.genderPersonas.objects[0].val);
            for(var i=0; i<arr.genderPersonas.objects.length; i++) {
                if(arr.genderPersonas.objects[i].val != '' && arr.genderPersonas.objects[i].val != ' ' && arr.genderPersonas.objects[i].val != undefined) {
                    // console.log(i, arr.genderPersonas.objects[i].val);
                    personaGenders.push(arr.genderPersonas.objects[i].val);
                }
            }

            var randomIndex = Math.round(Math.random() * ((personaGenders.length-1) - 0) + 0 );
            // console.log(randomIndex);
            for(var i=0; i<genderCol.length; i++) {
                if(personaGenders[randomIndex] == genderCol[i].gender) {
                    newColor = genderCol[i].color;
                }
            }

            if (personaGenders === undefined || personaGenders.length == 0) {
                newColor = genderCol[7].color;
            }
            // console.log(personaGenders, newColor);

            sphere = new THREE.Mesh( sphereGeom, color );
            sphere.visible = false;
            sphere.position.z = Math.round(Math.random() * (-350 + -300) + -300);
            var angle = Math.random()*Math.PI*2;
            var radius = 35;
            var r = radius * Math.sqrt(Math.random());
            var x = Math.cos(angle)*r;
            var y = Math.sin(angle)*r;
            sphere.position.x = x;
            sphere.position.y = y;
            spheres.push({Sphere:sphere, val:color, newVal:newColor});
        };

        function GoHome() {
            window.location.href = process.env.PUBLIC_URL + "/#/home";
            window.location.reload();
        };

        let scene, camera, renderer, light, 
        gate, onlineGate, irlGate, 
        circle, circle1, circleOnline,circleOnline1, circleIRL, circleIRL1,
        controls;

        var init = function () {
            const gui = new GUI();
            gui.add(params, 'goHome').name('CLICK HERE');
            ref.on('value',getData,errData);
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
            renderer = new THREE.WebGLRenderer({ antialias:true });
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            light = new THREE.AmbientLight(0xffffff, 5.0);
            scene.add(light);
            
            var torusGeom = new THREE.TorusGeometry( 50, 3, 16, 100 );
            var torusMat = new THREE.MeshNormalMaterial( { color: 0x2194ce, transparent:true, opacity:0.8 } );
            gate = new THREE.Mesh( torusGeom, torusMat );
            scene.add( gate );
            var circleGeom = new THREE.CircleGeometry( 49, 32 );
            var circleMat = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent:true, opacity:0.3 } );
            circle = new THREE.Mesh( circleGeom, circleMat );
            circle1 = new THREE.Mesh( circleGeom, circleMat );
            circle.rotation.x = THREE.Math.degToRad(180);
            scene.add(circle1, circle);

            var torusGeom1 = new THREE.TorusGeometry( 45, 10, 16, 100 );
            var torusMat1 = new THREE.MeshLambertMaterial( { color: 0x2194ce, wireframe:true, wireframeLinewidth:0.05 } );
            onlineGate = new THREE.Mesh( torusGeom1, torusMat1 );
            onlineGate.position.z = 300;
            scene.add( onlineGate );
            var circleGeom1 = new THREE.CircleGeometry( 44, 32 );
            var circleMat1 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
            circleOnline = new THREE.Mesh( circleGeom1, circleMat1 );
            circleOnline.position.z = 300;
            scene.add( circleOnline );
            circleOnline1 = new THREE.Mesh( circleGeom1, circleMat1 );
            circleOnline1.position.z = 300;
            circleOnline1.rotation.x = THREE.Math.degToRad(180);
            scene.add( circleOnline1 );

            var torusGeom2 = new THREE.TorusGeometry( 50, 3, 16, 100 );
            var torusMat2 = new THREE.MeshLambertMaterial( { color: 0xf7f700, emissive:0xffffff, emissiveIntensity:0.5 } );
            irlGate = new THREE.Mesh( torusGeom2, torusMat2 );
            irlGate.position.z = -300;
            scene.add( irlGate );
            var circleGeom2 = new THREE.CircleGeometry( 49, 32 );
            circleIRL = new THREE.Mesh( circleGeom2, circleMat1 );
            circleIRL.position.z = -300;
            scene.add( circleIRL );
            circleIRL1 = new THREE.Mesh( circleGeom2, circleMat1 );
            circleIRL1.position.z = -300;
            circleIRL1.rotation.x = THREE.Math.degToRad(180);
            scene.add( circleIRL1 );

            camera.position.z = 100;
            // camera.position.set(1000,50,1500);

            // Allows camera movement with mouse click
            controls = new OrbitControls( camera, renderer.domElement );
            controls.minDistance = 100;
            controls.maxDistance = 500;

            // scene.background = new THREE.Color( 0xffffff );
        };
        
        var animate = function () {
            requestAnimationFrame( animate );
            controls.update();
            console.log(isEmpty);
            if(spheres.length <= 0){
                // console.log('empty');
                isEmpty = true;
            }

            if(isEmpty == false) {
                for(var i=0; i<spheres.length; i++){
                    scene.add(spheres[i].Sphere);
                    if(spheres[i].Sphere.position.z >= -300) {
                        spheres[i].Sphere.visible = true;
                    }
    
                    if(spheres[i].Sphere.position.z > 0){
                        spheres[i].Sphere.material = spheres[i].newVal;
                    }
    
                    if(spheres[i].Sphere.position.z < 300){
                        spheres[i].Sphere.position.z += 2.5;
                    }
                    else {
                        scene.remove(spheres[i].Sphere);
                        spheres.splice(i,1);
                        // console.log(spheres);
                    }
                }
            }
            else {
                ref.on('value',getData,errData);
            }

            renderer.render( scene, camera );
        };

        var onWindowResize = function() {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
        
        window.addEventListener('resize', onWindowResize, false);
        init();
        animate();
    }

    render() {
      return (<div 
    //   style={{ width: "800px", height: "800px" }}
      ref={ref => { this.mount = ref}}
      />)
    }
}

export default ThreeScene;