import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import Home from './pages/home/Home'
import About from './pages/about/About';
import Form from './pages/form/Form';
import Compass from './pages/visuals/Compass'

export default function Routes(props) {

    const URL = process.env.PUBLIC_URL

    //Adding route-path to components
    const routes = [
        {
            path: '/about',
            component: About
        },{
            path: '/form',
            component: Form
        },{
            path: '/compass',
            component: Compass
        }
    ]
    // console.log(URL);
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
                <Route component={Home} />
            </Switch>
        </Router>
    )
}