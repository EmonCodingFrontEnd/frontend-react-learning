import {delay, call, put} from "redux-saga/effects";
// 引入redux的action
import {createIncrementAction} from "../actions/counter";

export function* asyncAddSaga(action) {
    const {data, time} = action
    console.log('异步处理中...', data, time)

    // delay延迟指定时间
    yield delay(time);
    // call函数发异步请求，阻塞执行
    let addRes = yield call(() => asyncAdd(data)); // asyncAdd是一个返回Promise对象的函数
    let res = yield call(() => asyncAddCorrect(data, addRes));
    console.log('异步处理完成', res)
    // put函数发出新的action，立即执行
    yield put(createIncrementAction(res));
}

function asyncAdd(data) {
    console.log('异步加法开始执行...', data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data * 2);
        }, 1000);
    });
}

/**
 * 纠正asyncAdd的错误
 * @param data
 * @returns {Promise<unknown>}
 */
function asyncAddCorrect(data, addRes) {
    console.log('异步减法开始执行...', data, addRes)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(addRes - data);
        }, 1000);
    });
}