// 1
import React from 'react'
// 2
import ReactDOM from 'react-dom'

import App from './App'

import './index.scss' 
import {  BrowserRouter} from 'react-router-dom'; 

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById("root")
)