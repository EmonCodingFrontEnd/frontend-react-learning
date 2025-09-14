import * as countService from '../services/count'

export default {

  // 命名空间，全局 state 的 key
  namespace: 'counter',

  // 初始状态，通常是数组或对象
  state: {
    count: 10,
    todos: []
  },

  // 订阅，用于监听 history、键盘等
  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      console.log('counter subscriptions 初始化')
    },
  },

  // 异步处理器，基于 redux-saga
  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    * asyncIncrement({payload}, {call, put}) {
      let addRes = yield call(() => countService.asyncAdd(payload));
      yield put({type: 'increment', payload: addRes});
    },
  },

  // 同步处理器，用于更新 state
  reducers: {
    increment(state, action) {
      return {...state, count: state.count + action.payload};
    },
    decrement(state, action) {
      return {...state, count: state.count - action.payload};
    },
  },

};
