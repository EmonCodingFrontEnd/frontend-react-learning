import React, {Component} from 'react';

class StateDemo extends Component {
    state = {count: 0}

    add = () => {
        const {count} = this.state;
        // 对象式更新
        /*this.setState({count: count + 1}, () => {
            console.log(this.state.count);
        })*/
        // 函数式更新
        this.setState((preState, props) => ({count: preState.count + 1}), () => console.log(this.state.count))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default StateDemo;