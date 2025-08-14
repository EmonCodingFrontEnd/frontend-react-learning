import React, {Component} from 'react';
// 引入store，用于获取redux中保存的状态
import store from "../../redux/store";

class Count extends Component {
    state = {carName: '奔驰c63'}

    increment = () => {
        const {value} = this.selectNumber;
        store.dispatch({type: 'increment', data: parseInt(value)})
    }
    decrement = () => {
        const {value} = this.selectNumber;
        store.dispatch({type: 'decrement', data: parseInt(value)})
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        if (store.getState() % 2 !== 0) {
            store.dispatch({type: 'increment', data: parseInt(value)})
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        setTimeout(() => {
            store.dispatch({type: 'increment', data: parseInt(value)})
        }, 500)
    }

    /*componentDidMount() {
        // 检测rendux中状态的变化，只要变化，就调用render
        store.subscribe(
            () => {
                this.setState({})
            }
        )
    }*/

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数时再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;