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
    向路由组件传递参数
    1.params参数
        路由链接（携带参数）：<Link to={`/home/message/${id}/${title}`}>详情</Link>
        注册路由（声明接收）：<Route path="/home/message/:id/:title" component={Message}></Route>
        接收参数：const {id,title} = this.props.match.params;
    2.search参数
        路由链接（携带参数）：<Link to={`/home/message?id=${id}&title=${title}`}>详情</Link>
        注册路由（声明接收）：<Route path="/home/message" component={Message}></Route>  （无需声明，正常注册即可）
        接收参数：const {id, title} = qs.parse(this.props.location.search.slice(1));
        备注：获取到的search时urlencoded编码字符串，需要借助querystring（qs）解析
    3.state参数
        路由传参：<Link to={{pathname: "/home/message/detail", state: {id: 1, title: 'Hello World'}}}>跳转到详情页面</Link>
        注册路由（声明接收）：<Route path="/home/message/detail" component={Detail}/>
        接收参数：const {id, title} = this.props.location.state;
        备注：刷新也可以保留参数，除非清空缓存！！！
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