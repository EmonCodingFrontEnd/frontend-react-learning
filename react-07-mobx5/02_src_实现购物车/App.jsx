// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>ReactShopping Cart Example</h1>
                <hr/>
                <Product></Product>
                <hr/>
                <Cart></Cart>
            </div>
        )
    }
}