import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from './Common';
import homeImg from '../src/images/home.jpg';



const Home=()=>{
    return (
        <>
        <Common 
            name="Grow your business with"
            imgSrc={homeImg}
            visitTo="/services"
            btnName="Get Started"
            />
        </>
    );
};

export default Home;