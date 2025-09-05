import {takeEvery, takeLatest} from 'redux-saga/effects'
import {asyncAddSaga} from "./count1.saga";
import {asyncMinusSaga} from "./count2.saga";
import {ASYNC_DECREMENT, ASYNC_INCREMENT} from "../constant";

/*
 * takeEvery - 监听每次 Action
 * takeLatest - 只处理最新 Action
 * takeLeading - 只处理第一个 Action
 * takeMaybe - 可取消的等待；类似 take，但如果任务被取消会返回 undefined 而不是抛出错误
 */
function* rootSaga() {
    yield takeEvery(ASYNC_INCREMENT, asyncAddSaga); // 等效于 take+fork
    yield takeLatest(ASYNC_DECREMENT, asyncMinusSaga); // 等效于 take+fork
}

export default rootSaga;