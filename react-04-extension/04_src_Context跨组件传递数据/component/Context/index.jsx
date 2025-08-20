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
                {/*向Context传递属性*/}
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
                {/*通过Context传递的属性，无法通过这种方式获取到*/}
                <h4>我从A接收到的用户名是：{this.props.username}</h4>
                <C/>
            </div>
        );
    }
}

class C extends Component {
    // 定义了该属性，在组件内就可以使用 this.context 获取跨组件传递的属性了
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
            {/*也可以使用消费者标签声明接收Context属性*/}
            <UserContext.Consumer>
                {
                    (value) => <h4>我从A接收到用户名是：{value.username + " 我的年龄是：" + value.age}</h4>
                }
            </UserContext.Consumer>
        </div>
    );
}