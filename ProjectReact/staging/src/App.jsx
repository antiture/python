import React, { Component } from "react";
import "./App.scss"
import { Link, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';


export default class App extends Component {
    render() {
        return (

            <div className="App"> 
                <div className="header"> 
                <div className="logo">
                    SOFTLAW
                </div>
                    <Link className="link" to="/Page1">Page1</Link>
                    <Link className="link" to="/Page2">Page2</Link>
                    <Link className="link" to="/Page3">Page3</Link>
                    <Link className="link" to="/Page4">Page4</Link>
                    <Link className="link" to="/Page5">Page5</Link>
                    <Link className="link" to="/Page6">Page6</Link>
                </div> 
                <div className="ctn-page">
                    <Routes>
                        <Route path="/Page1" element={<Page1 />} />
                        <Route path="/Page2" element={<Page2 />} />
                        <Route path="/Page3" element={<Page3 />} />
                        <Route path="/Page4" element={<Page4 />} />
                        <Route path="/Page5" element={<Page5 />} />
                        <Route path="/Page6" element={<Page6 />} />
                    </Routes> 
                </div>
            </div>
        )
    }
} 