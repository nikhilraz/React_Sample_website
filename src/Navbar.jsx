import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { NavLink } from 'react-router-dom';
import logo from "../src/images/servicenow.png";

const Navbar=()=>{
    return (
        <>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                            <NavLink  className="navbar-brand" to="/">
                                <img src={logo} alt="img" width="300px" height="80px"/>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                </ul>
                            </div>
                            </nav>
                   </div>
               </div>
           </div>
        </>
    );
};

export default  Navbar;