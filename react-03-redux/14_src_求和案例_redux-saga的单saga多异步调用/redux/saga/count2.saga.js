import {take, fork, cancel, delay, call, put} from "redux-saga/effects";
import {ASYNC_DECREMENT} from "../constant";
// 引入redux的action
import {createDecrementAction} from "../actions/counter";

let task;

/*
 * takeEvery - 监听每次 Action
 * takeLatest - 只处理最新 Action
 * takeLeading - 只处理第一个 Action
 * takeMaybe - 可取消的等待；类似 take，但如果任务被取消会返回 undefined 而不是抛出错误
 */
function* watchSaga() {
    /*
     * 等效于 take+fork
     */
    // yield takeEvery(ASYNC_INCREMENT, asyncMinusSaga);

    while (true) {
        // take监听组件发来的action
        const action = yield take(ASYNC_DECREMENT);

        if (task) {
            console.log("取消之前的任务")
            yield cancel(task); // 取消之前的任务
        }

        // fork同步执行异步处理函数
        task = yield fork(asyncMinusSaga, action);
    }
}

function* asyncMinusSaga(action) {
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

export default watchSaga;