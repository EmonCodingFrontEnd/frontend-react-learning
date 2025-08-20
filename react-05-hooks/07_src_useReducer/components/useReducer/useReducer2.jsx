import React, {createContext, useContext, useReducer} from 'react';

const initialState = {a: 0, b: 1};

const reducer = (preState, action) => {
    console.log(preState, action);
    switch (action.type) {
        case 'change-a': 
            return {...preState, a: action.payload};
        case 'change-b':
            return {...preState, b: action.payload};
        default:
            return preState;
    }
};

const GlobalContext = createContext({username: '未知'});

export default function Index(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            <Child1></Child1>
            <Child2></Child2>
            <Child3></Child3>
        </GlobalContext.Provider>
    );
}

function Child1(props) {
    const {state, dispatch} = useContext(GlobalContext);
    return (
        <div style={{background: 'orange'}}>
            <h1>当前值：{JSON.stringify(state)}</h1>
            <button
                onClick={() => dispatch({type: 'change-a', payload: Math.floor(Math.random() * 10)})}>改变Child2的值a
            </button>
            <button
                onClick={() => dispatch({type: 'change-b', payload: Math.floor(Math.random() * 10)})}>改变Child3的值b
            </button>
        </div>
    );
}

function Child2(props) {
    const {state} = useContext(GlobalContext);
    return (
        <div style={{background: 'skyblue'}}>
            <div className="child">Child2-{state.a}</div>
        </div>
    );
}

function Child3(props) {
    return (
        <div style={{background: 'pink'}}>
            <GlobalContext.Consumer>
                {
                    value => <div className="child">Child3-{value.state.b}</div>
                }
            </GlobalContext.Consumer>
        </div>
    );
}
