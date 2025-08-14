// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import Search from "./components/Search";
import List from "./components/List";

// 创建并暴露App组件
export default class App extends Component {
    state = {
        users: [],
        isFirst: true, // 是否首次加载页面
        isLoading: false, // 是否数据加载中
        err: '' // 存储请求错误信息
    }

    updateAppState = (newState) => {
        this.setState(newState)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>)
    }
}