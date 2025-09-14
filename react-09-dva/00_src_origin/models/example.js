
export default {

  // 命名空间，全局 state 的 key
  namespace: 'example',

  // 初始状态，通常是数组或对象
  state: {},

  // 订阅，用于监听 history、键盘等
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步处理器，基于 redux-saga
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  // 同步处理器，用于更新 state
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
