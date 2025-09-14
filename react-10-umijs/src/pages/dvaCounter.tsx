import React, {Component, useRef} from 'react';
import {connect} from "umi";

function DvaCounter(props: any) {

    const selectNumber = useRef<HTMLSelectElement>(null)

    function increment() {
        if (selectNumber.current) {
            props.dispatch({
                type: 'dvaCounter/increment',
                payload: parseInt(selectNumber.current.value)
            })
        }
    }

    function decrement() {
        if (selectNumber.current) {
            props.dispatch({
                type: 'dvaCounter/decrement',
                payload: parseInt(selectNumber.current.value)
            })
        }
    }

    function incrementIfOdd() {
        if (selectNumber.current) {
            if (props.count % 2 !== 0) {
                props.dispatch({
                    type: 'dvaCounter/increment',
                    payload: parseInt(selectNumber.current.value)
                })
            }
        }
    }

    function incrementAsync() {
        if (selectNumber.current) {
            props.dispatch({
                type: 'dvaCounter/asyncIncrement',
                payload: {
                    data: parseInt(selectNumber.current.value),
                    delay: Math.floor(Math.random() * 3000)
                }
            })
        }
    }

    return (
        <div>
            <h2>当前求和为：{props.count}</h2>
            <select ref={selectNumber} name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementIfOdd}>当前求和为奇数时再加</button>
            <button onClick={incrementAsync}>异步加倍</button>
        </div>
    );
}

export default connect(({dvaCounter}) => {
    return dvaCounter
})(DvaCounter);
