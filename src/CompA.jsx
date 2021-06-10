import React, { createContext } from 'react';
import CompB from './CompB';
const FirstName=createContext();
const LastName=createContext();
const CompA=()=>{
    return (
        <>
            <FirstName.Provider value={"NIKHIL"}>
                <LastName.provider value={"KUMAR"}>
                    <CompB/>
                </LastName.provider>
            </FirstName.Provider>
        </>
    );
};
export default CompA;
export {FirstName,LastName};