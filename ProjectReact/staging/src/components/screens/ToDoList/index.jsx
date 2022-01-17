import React, {Component} from "react";
import "./index.sass"
import Header from './Header'
import List from "./List";

export default class ToDoList extends Component {
    render() {
        return (
            <div className="To-do-list">
                todolist
                <Header/>
                <List/>
            </div>
        )
    }
} 