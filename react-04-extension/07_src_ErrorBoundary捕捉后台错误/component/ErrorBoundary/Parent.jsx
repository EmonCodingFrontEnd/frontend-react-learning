import React, {Component} from 'react';
import Child from "./Child";

class Parent extends Component {
    state = {hasError: false}

    // 当Parent的子组件出现报错的时候，会触发 getDerivedStateFromError 方法，并携带错误信息
    // 只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
    static getDerivedStateFromError(error, info) {
        console.log(error, info);
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('渲染组件时出错，统计错误次数，并发送给后台')
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <div>当前网络不稳定，请稍后再试！</div> : <Child/>}
            </div>
        );
    }
}

export default Parent;