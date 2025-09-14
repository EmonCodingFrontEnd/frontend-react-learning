import * as counterService from '../services/counter'

export default {

    // 命名空间，全局 state 的 key
    namespace: 'dvaCounter',

    // 初始状态，通常是数组或对象
    state: {
        count: 10
    },

    // 异步处理器，基于 redux-saga
    effects: {
        * fetch({payload}, {call, put}) {  // eslint-disable-line
            yield put({type: 'save'});
        },
        * asyncIncrement({payload}, {call, put}) {
            let addRes = yield call(() => counterService.asyncAdd(payload));
            yield put({type: 'increment', payload: addRes});
        },
    },

    // 同步处理器，用于更新 state
    reducers: {
        increment(state, {payload}) {
            return {...state, count: state.count + payload};
        },
        decrement(state, {payload}) {
            return {...state, count: state.count - payload};
        },
    },

};
