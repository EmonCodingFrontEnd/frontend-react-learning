/**
 * 汇总所有的reducer，生成一个总的reducer
 */
import count from '../reducers/count'
import persons from '../reducers/person'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

/*
【重点】请注意 count 这个 reducer 的初始值不允许是基本值！！！
为什么对象类型可以而基本类型不行？
因为redux-persist在处理基本类型时可能会遇到序列化和反序列化的问题。对象类型则会被正常序列化为JSON字符串，然后在反序列化时恢复为对象。
 */
const countPersistConfig = {
    key: 'count',
    storage: storageSession
}
export default combineReducers({
    count: persistReducer(countPersistConfig, count),
    persons
})