// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

// 创建并暴露App组件
export default class App extends Component {
    /*
    路由的基本使用：
    1.明确好界面中的导航区、展示区
    2.导航区的a标签改为Link标签
        <Link to="/demo">Demo</Link>
    3.展示区写Route标签进行路由的匹配
        <Route path='/demo' component={Demo}/>
    4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>
     */
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html中靠<a>标签跳转不同的页面 */}
                            {/*<a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/*在React中靠路由链接实现切换组件——编写路由链接*/}
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item active" to="/home">Home</Link>
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