import React, { Component } from "react";  
import "./App.scss" 
import ToDoList from "./components/screens/ToDoList";
import Header from "./components/blocks/Header";
import Button from "./components/elements/Button";
import CheckBox from "./components/elements/CheckBox";
import Navigation from "./components/blocks/Navigation";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <CheckBox/>
                <Button/>
                <Header/>
                <Navigation/>
                <ToDoList/>
            </div>
        )
    }
} 