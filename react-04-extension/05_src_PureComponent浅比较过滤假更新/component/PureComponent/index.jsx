import React, {PureComponent} from 'react';
import './index.css'


export default class Parent extends PureComponent {
    state = {carName: '奔驰c36'}

    changeCar = () => {
        // this.setState({carName: '保时捷911'})
        const obj = this.state;
        obj.carName = '保时捷911'
        this.setState(obj) // PureComponent浅比较，不会触发更新
    }

    // 这种逻辑，可以被PureComponent替代，但PureComponent是识别的对象地址，并非深度识别
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.carName !== nextState.carName;
    }*/

    render() {
        console.log('Parent render')
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{carName}</span>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName}/>
            </div>
        );
    }
}

class Child extends PureComponent {
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.carName !== nextProps.carName;
    }*/

    render() {
        console.log('Child render')
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        );
    }
}
