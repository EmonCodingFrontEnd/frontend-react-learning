import React, {Fragment, useRef} from 'react';
import {useParams, useModel} from 'umi';

function Counter() {
    const {channel} = useParams();
    const {count, increment, decrement, incrementIfOdd, asyncIncrement} = useModel('counter');

    const selectNumber = useRef<HTMLSelectElement>(null)
    return (
        <Fragment>
            <h2>来源：{channel}</h2>
            <h1>当前求和为：{count}</h1>
            <select ref={selectNumber} name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={() => {
                selectNumber.current && increment(parseInt(selectNumber.current.value))
            }}>+
            </button>
            <button onClick={() => {
                selectNumber.current && decrement(parseInt(selectNumber.current.value))
            }}>-
            </button>
            <button onClick={() => {
                selectNumber.current && incrementIfOdd(parseInt(selectNumber.current.value))
            }}>当前求和为奇数时再加
            </button>
            <button onClick={
                () => {
                    selectNumber.current && asyncIncrement({data: parseInt(selectNumber.current.value), delay: 2000})
                }
            }>异步加
            </button>
        </Fragment>
    );
}

export default Counter;