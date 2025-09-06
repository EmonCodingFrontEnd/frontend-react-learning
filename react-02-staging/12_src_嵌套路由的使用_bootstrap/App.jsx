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
    嵌套路由
    1.注册子路由时要协商父路由的path值
    2.路由的匹配是按照注册路由的顺序进行的
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