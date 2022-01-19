import React, {Component} from "react";
import Item from "../Item";
import "./index.sass"

export default class List extends Component {
    render() {
        return (
            <div className="List-To-do-list">
                <Item/>
            </div>
        )
    }
} 