import React, {Component} from 'react';
import './index.css'

const UserContext = React.createContext();

export default class A extends Component {
    state = {username: '张三'}

    render() {
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是：{this.state.username}</h4>
                <UserContext.Provider value={{username: this.state.username, age: 18}}>
                    <B/>
                </UserContext.Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <h4>我从A接收到的用户名是：</h4>
                <C/>
            </div>
        );
    }
}

class C extends Component {
    static contextType = UserContext;

    render() {
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我从A接收到的用户名是：{this.context.username + " 我的年龄是：" + this.context.age}</h4>
                <D/>
            </div>
        );
    }
}

function D() {
    return (
        <div className="subGrand">
            <h3>我是D组件</h3>
            <UserContext.Consumer>
                {
                    (value) => <h4>我从A接收到用户名是：{value.username + " 我的年龄是：" + value.age}</h4>
                }
            </UserContext.Consumer>
        </div>
    );
}