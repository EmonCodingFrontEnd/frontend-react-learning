import {useState, createContext, useContext} from 'react';
import './index.css'

// 参数是默认值，当组件不在 Provider 包裹范围内时，useContext 会返回这个值
const UserContext = createContext({username: '未知'});

export default function A() {
    const [username, setUsername] = useState('张三')

    return (
        <div className="parent">
            <h3>我是A组件</h3>
            <h4>我的用户名是：{username}</h4>
            {/*向Context传递属性*/}
            <UserContext.Provider value={{username, age: 18}}>
                <B username={username + '丰'}/>
            </UserContext.Provider>
            <E></E>
        </div>
    );
}

function B(props) {

    return (
        <div className="child">
            <h3>我是B组件</h3>
            {/*通过Context传递的属性，无法通过这种方式获取到*/}
            <h4>我从A接收到的用户名是：{props.username}</h4>
            <C/>
        </div>
    );
}

function C() {
    const {username, age} = useContext(UserContext);

    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A接收到的用户名是：{username + " 我的年龄是：" + age}</h4>
            <D/>
        </div>
    );
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

function E() {
    const {username} = useContext(UserContext);
    return (
        <div className="subGrand">
            <h3>我是E组件</h3>
            <h4>我从A接收到用户名是：{username}（因为不在UserContext.Provider范围内，只能得到默认值）</h4>
            {/*也可以使用消费者标签声明接收Context属性*/}
            <UserContext.Consumer>
                {
                    (value) =>
                        <h4>我从A接收到用户名是：{value.username}（因为不在UserContext.Provider范围内，只能得到默认值）</h4>
                }
            </UserContext.Consumer>
        </div>
    );
}