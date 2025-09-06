// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import {NavLink, Route} from "react-router-dom";
import About from "./pages/About"; // 路由组件
import Home from "./pages/Home";
import Header from "./component/Header"; // 一般组件
import "./App.css";

// 创建并暴露App组件
export default class App extends Component {
    /*
    路由组件与一般组件
    1.写法不同：
        一般组件：<Demo/>
        路由组件：<Route path="/demo" component={Demo}/>
    2.存放位置不同：
        一般组件：components
        路由组件：pages
    3.接收到的props不同：
        一般组件：写组件标签时传递了什么，就能收到什么
        路由组件：接收到三个固定的属性
        {
            "history": {
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
            },
            "location": {
                "pathname": "/about",
                "search": "",
                "hash": "",
            },
            "match": {
                "path": "/about",
                "url": "/about",
                "isExact": true,
                "params": {}
            }
        }
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
                            <NavLink activeClassName="flyin" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="flyin" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}