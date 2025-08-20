import {useReducer} from 'react';

const reducer = (preState, action) => {
    console.log('reducer', preState, action);
    switch (action.type) {
        case 'increment':
            return {count: preState.count + action.data};
        case 'decrement':
            return {count: preState.count - action.data};
        default:
            return preState;
    }
};

const initialState = {count: 0};

const init = (initialState) => {
    console.log('init', initialState);
    return {...initialState, count: 1}
}

/**
 * useReducer 的思想借鉴了 Redux 的状态管理模式。它的核心是一个“ reducer ”函数，它根据接收到的“ action ”来决定如何更新状态。
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Index() {

    /**
     * state: 当前的状态值
     * dispatch: 一个用于发送 action 的函数，触发状态更新
     * reducer: 一个函数，接收当前 state 和 action，返回新的 state
     * initialState: 状态的初始值
     * init (可选): 一个初始化函数，如果存在，初始状态会被设置为 init(initialState)
     */
    const [state, dispatch] = useReducer(reducer, initialState, init);

    return (
        <div className="parent">
            求和结果：
            <button onClick={() => dispatch({type: 'decrement', data: 1})}>-</button>&nbsp;
            <span>{state.count}</span>&nbsp;
            <button onClick={() => dispatch({type: 'increment', data: 1})}>+</button>
        </div>
    );
}