import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from './Common';
import heroImg from "../src/images/hero.jpg";
const About=()=>{
    return (
        <>
        <Common
         name="Welcome to"
         imgSrc={heroImg}
         visitTo="/contact"
         btnName="Contact Now"
         />
        </>
    );
};

export default About;