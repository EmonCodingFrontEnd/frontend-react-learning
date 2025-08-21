/**
 * 汇总所有的reducer，生成一个总的reducer
 */
import count from '../reducers/count'
import persons from '../reducers/person'
import {combineReducers} from 'redux'

export default combineReducers({
    count,
    persons
})