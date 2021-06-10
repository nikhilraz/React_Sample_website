import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import {BrowserRouter} from 'react-router-dom';
import CompA from './CompA';
ReactDOM.render(
<>
    <BrowserRouter>
        <App2/>
    </BrowserRouter>
</>,
document.getElementById('root')
);