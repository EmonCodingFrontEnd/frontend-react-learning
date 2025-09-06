// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import MyNavLink from "./component/MyNavLink";
import About from "./pages/About"; // 路由组件
import Home from "./pages/Home";
import Header from "./component/Header"; // 一般组件
import "./App.css";

// 创建并暴露App组件
export default class App extends Component {
    /*
    BrowserRouter与HashRouter的区别【推荐BrowserRouter】
    1.底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
        HashRouter使用的是URL的hash值。
    2.path表现形式不一样
        BrowserRouter的路径中没有 #，例如：localhost:3000/about
        HashRouter的路径包含 #，例如：localhost:3000/#/about
    3.刷新后对路由state参数的影响
        BrowserRouter没有任何影响，因为state参数保存在history对象中。
        HashRouter刷新后会导致路由state参数丢失，因为state参数只保存在location对象中（HashRouter 依赖于 window.location.hash 来管理路由）。
    4.备注：HashRouter可以用于解决一些路径错误相关的问题。
     */
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html中靠<a>标签跳转不同的页面 */}
                            {/*<a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/*在React中靠路由链接实现切换组件——编写路由链接*/}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    <Redirect to="/about"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}