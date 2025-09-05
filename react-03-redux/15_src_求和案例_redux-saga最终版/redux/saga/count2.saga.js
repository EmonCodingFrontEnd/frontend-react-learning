import {delay, call, put} from "redux-saga/effects";
// 引入redux的action
import {createDecrementAction} from "../actions/counter";

export function* asyncMinusSaga(action) {
    const {data, time} = action
    console.log('异步处理中...', data, time)

    // delay延迟指定时间
    yield delay(time);
    // call函数发异步请求，阻塞执行
    let res = yield call(() => asyncMinus(data)); // asyncMinus是一个返回Promise对象的函数
    console.log('异步处理完成', res)
    // put函数发出新的action，立即执行
    yield put(createDecrementAction(res));
}

function asyncMinus(data) {
    console.log('异步减法开始执行...', data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data * 2);
        }, 1000);
    });
}