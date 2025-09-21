import React from 'react';
import {Outlet} from "umi";
import Header from "@/components/Header";
import MyNavLink from "@/components/MyNavLink";

function Nesting() {
    return (
        <div>
            <link rel="stylesheet" href="/css/bootstrap.css"/>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header></Header>
                </div>
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
                        <MyNavLink to="about">About</MyNavLink>
                        <MyNavLink to="home">Home</MyNavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/*指定路由组件呈现的位置*/}
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nesting;