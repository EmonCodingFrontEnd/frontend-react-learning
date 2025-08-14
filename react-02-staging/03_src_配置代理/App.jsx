// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import axios from "axios";

// 创建并暴露App组件
export default class App extends Component {
    getStudentData = () => {
        axios.get("http://localhost:3000/api1/students").then(
            res => {
                console.log('成功了', res.data)
            }, error => {
                console.log('失败了', error)
            }
        )
    }
    getCarData = () => {
        axios.get("http://localhost:3000/api2/cars").then(
            res => {
                console.log('成功了', res.data)
            }, error => {
                console.log('失败了', error)
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        )
    }

}