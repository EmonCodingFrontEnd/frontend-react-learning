import React, {Component} from 'react';
import {Route} from "dva/router";
import {Redirect, Switch} from "react-router-dom";
import Header from "../components/Header";
import MyNavLink from "../components/MyNavLink";
import About from "./About";
import Home from "./Home";
import Count from "./Count";

class App extends Component {
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
              {/*在React中靠路由链接实现切换组件——编写路由链接*/}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
              <MyNavLink to="/count">Count</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由*/}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/count" component={Count}/>
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
