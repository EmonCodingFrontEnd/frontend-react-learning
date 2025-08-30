// 创建“外壳”组件
import React, {Component} from "react";
import Counter from "./components/Counter";
import CounterStore from "./stores/counter.store";

const counterStore = new CounterStore()

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Counter counterStore={counterStore}/>
            </div>
        )
    }
}