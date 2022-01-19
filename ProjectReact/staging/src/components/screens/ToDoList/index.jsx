import React, {Component} from "react";
import "./index.scss"
import Header from './Header'
import List from "./List";
import Footer from "./Footer";
import axios from "axios";

export default class ToDoList extends Component {
    render() {
        return (
            <div className="To-do-list">
                todolist
                <Header/>
                <List/>
                <Footer/> 
                <button onClick={this.getStudentData}>点我获取学生数据</button>
				<button onClick={this.getCarData}>点我获取汽车数据</button>

            </div>
        )
    }

    getStudentData = ()=>{
		axios.get('http://localhost:3000/api1/students').then(
			response => {console.log('成功了',response.data);},
			error => {console.log('失败了',error);}
		)
	}

	getCarData = ()=>{
		axios.get('http://localhost:3000/api2/cars').then(
			response => {console.log('成功了',response.data);},
			error => {console.log('失败了',error);}
		)
	}
} 