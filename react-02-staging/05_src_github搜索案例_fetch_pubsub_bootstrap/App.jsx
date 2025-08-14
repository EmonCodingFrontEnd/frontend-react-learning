// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import Search from "./components/Search";
import List from "./components/List";

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        )
    }
}