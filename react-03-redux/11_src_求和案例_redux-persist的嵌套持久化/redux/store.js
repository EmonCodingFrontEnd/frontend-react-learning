/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入汇总之后的reducer
import rootReducer from './reducers'
// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux'
// 引入redux-thunk，用于支持异步action
import {thunk} from 'redux-thunk'
// 引入@redux-devtools/extension（针对redux5+；若是redux4-，请使用redux-devtools-extension)
import {composeWithDevTools} from '@redux-devtools/extension';
// 引入redux-persist，用于持久化数据
import {persistStore, persistReducer} from 'redux-persist'
// 存储类，默认到本地localStorage for web
import storage from 'redux-persist/lib/storage'
// 状态协调器
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ['persons']
}
// 返回一个增强型 reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 暴露store
export default (initialState = {}) => {
    // 将传入的 initialState 作为 createStore 的第二个参数（或第三个，如果用了enhancer）
    const store = createStore(
        persistedReducer,
        initialState, // 使用传入的初始状态
        composeWithDevTools(applyMiddleware(thunk))
    );
    // 持久化的 Redux store。
    const persistor = persistStore(store)
    return {store, persistor}
}

