/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux'
// 引入redux-saga
import createSagaMiddleware from 'redux-saga'

// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Count组件服务的saga
import watchSaga from "./saga/saga";

// 创建sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

// 暴露store
export default createStore(countReducer, applyMiddleware(sagaMiddleware))

// 运行saga
sagaMiddleware.run(watchSaga)