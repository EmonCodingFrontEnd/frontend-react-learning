import React from 'react';
import {NavLink, useRoutes, useInRouterContext} from "react-router-dom";
import routes from "./routes";
import './App.css'
import Header from "./comonents/Header";

/*
useNavigationType：返回当前导航的类型
POP：是指在浏览器中直接打开了这个路由组件（刷新页面）
PUSH：可前进退回
REPLACE：替换当前页面
 */
function App(props) {
    // 根据路由表生成对应的路由规则
    const element = useRoutes(routes);
    const isRouter = useInRouterContext();
    console.log("isRouter", isRouter)
    return (
        <div>
            <div className="row">
                <Header></Header>
            </div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/*路由链接*/}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/*注册路由*/}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;