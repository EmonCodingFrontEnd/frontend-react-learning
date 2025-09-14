import React, {Component} from 'react';
import {connect} from "dva";

class Index extends Component {

  increment = () => {
    const {value} = this.selectNumber;
    this.props.dispatch({
      type: 'counter/increment',
      payload: parseInt(value)
    })
  }

  decrement = () => {
    const {value} = this.selectNumber;
    this.props.dispatch({
      type: 'counter/decrement',
      payload: parseInt(value)
    })
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.dispatch({
        type: 'counter/increment',
        payload: parseInt(value)
      })
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber;
    this.props.dispatch({
      type: 'counter/asyncIncrement',
      payload: {
        data: parseInt(value),
        delay: Math.floor(Math.random() * 3000)
      }
    })
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={c => this.selectNumber = c} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数时再加</button>
        <button onClick={this.incrementAsync}>异步加倍</button>
      </div>
    );
  }
}

export default connect(({counter}) => {
  return counter
})(Index);
