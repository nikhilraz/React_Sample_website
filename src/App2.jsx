import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch,Route,Redirect } from "react-router-dom";
const App2=()=>{
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Redirect to="/" />
            </Switch>
            <Footer/>
        </>
    );
};

export default App2;