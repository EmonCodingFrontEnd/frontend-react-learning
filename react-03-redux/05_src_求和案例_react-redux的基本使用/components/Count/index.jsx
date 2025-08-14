import React, {Component} from 'react';

class Count extends Component {
    state = {carName: '奔驰c63'}

    increment = () => {
        const {value} = this.selectNumber;
        this.props.add(parseInt(value))
    }
    decrement = () => {
        const {value} = this.selectNumber;
        this.props.sub(parseInt(value))
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        if (this.props.count % 2 !== 0) {
            this.props.add(parseInt(value))
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        this.props.addAsync(parseInt(value), 500)
    }

    render() {
        // console.log('UI组件从容器组件接收到的内容是：', this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
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