import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Common=(props)=>{
    return (
        <>
           <section id="header" className="d-flex flex-column align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                    <div className="col-md-6 mt-5 pt-lg-0 order-lg-1 order-2 d-flex flex-column  justify-content-center">
                                        <h1> {props.name} <strong className="brand-name">Servicenow</strong></h1>
                                        <h2 className="my-3">We make the world of work, work better for <strong className="people">people</strong> </h2>
                                        <div className="mt-3">
                                            <NavLink to={props.visitTo} className="btn-get-started">{props.btnName}</NavLink>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-5 pt-lg-0 order-lg-2 order-1 d-flex flex-column align-items-center justify-content-center header-img">
                                        <img src={props.imgSrc} className="img-fluid animated" alt="home"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;