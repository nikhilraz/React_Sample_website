import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Contact=()=>{
    const [details,setDetails]=useState({
        name:'',
        email:'',
        password:'',
        mobile:'',
    });
    const inputEvent=(event)=>{
        const {name,value}=event.target;

        setDetails((prevDetails)=>{
            return {
                ...prevDetails,
                [name]:value
            };
        });
    };
    const formSubmit=(event)=>{
        event.preventDefault();
        alert(`my name is ${details.name}, email address is ${details.email}, password is ${details.password} and mobile no. is ${details.mobile}`);
    };
    return (
        <>
            <div className="container-fluid  mt-5 " >
                        <div className="row">
                            <div className="col-md-6 col-10 d-flex flex-column justify-content-center align-items-center mt-5 mx-auto flex-wrap ">
                                <h1>Please fill your contact details </h1>
                                <form action="#" onSubmit={formSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" value={details.name} onChange={inputEvent} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={details.email} onChange={inputEvent} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={details.password} onChange={inputEvent} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile</label>
                                        <input type="number" className="form-control" id="mobile" name="mobile" value={details.mobile} onChange={inputEvent} required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3 py-2 px-4 ">Submit</button>
                                </form>
                            </div>
                        </div>
            </div>
        </>
    );
};

export default Contact;