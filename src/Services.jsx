import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import SData from './SData';
const Services=()=>{
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row gy-4">
                           {
                                SData.map((obj,idx,arr)=>{
                                 return <Card
                                    key={idx}
                                    imgSrc={obj.imgSrc}
                                    title={obj.title}
                                 />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;