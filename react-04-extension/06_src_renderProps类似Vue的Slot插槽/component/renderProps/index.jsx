import React, {Component} from 'react';
import './index.css'

export default class Parent extends Component {
    render() {
        return (
            <div className={'parent'}>
                <h3>我是Parent组件</h3>
                <A render={(name) => <B name={name}></B>}></A>
            </div>
        );
    }
}

class A extends Component {
    state = {name: '张三'}

    render() {
        const {name} = this.state
        return (
            < div
                className={'a'}>
                < h3> 我是A组件 < /h3>
                {
                    this.props.render(name)
                }
                <button onClick={() => {
                    this.setState({name: '李四'})
                }}>点击我更新A的名字
                </button>
            </div>
        );
    }
}


class B extends Component {
    render() {
        return (
            <div className={'b'}>
                <h3>我是B组件</h3>
                <div>{this.props.name}</div>
            </div>
        );
    }
}