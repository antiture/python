import React, { Component } from "react";  
import "./App.scss" 
import ToDoList from "./components/screens/ToDoList";
import Header from "./components/blocks/Header"; 
// import Navigation from "./components/blocks/Navigation";

export default class App extends Component {
    render() {
        return (
            <div className="App"> 
                <Header/>
                {/* <Navigation/> */}
                <ToDoList/>
            </div>
        )
    }
} 