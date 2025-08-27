// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import Count from "./components/Count";

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                App......
                <Count></Count>
            </div>
        )
    }
}