import React from 'react';
import {useModel} from "@@/exports";

function GlobalState() {
    const {initialState, loading, error, refresh, setInitialState} =
        useModel('@@initialState');
    console.log('initialState', initialState);
    return (
        <>全局初始状态：{initialState.name}</>
    );
}

export default GlobalState;