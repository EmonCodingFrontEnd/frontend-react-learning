import {INCREMENT, DECREMENT} from "../constant";

/**
 * 该文件专门为Count组件生成action对象
 */

// 同步action，就是指action的值为Object类型的一般对象
export function createIncrementAction(data) {
    return {type: INCREMENT, data}
}

export const createDecrementAction = (data) => ({type: DECREMENT, data})

/**
 * 这是一个 thunk，它返回一个函数
 *
 * 异步action，就是指action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
 * 缺点：
 * 容易变得臃肿：复杂的业务逻辑可能会让 thunk 函数变得又大又难以维护，产生“回调地狱”的变体。
 * 缺乏高级控制能力：对于取消请求、竞态条件（多个请求同时发生，只取最后一个结果）、节流/防抖等复杂场景，需要自己手动实现，非常麻烦。
 *
 * 说一个用saga而不是thunk的理由：
 * 当你的异步逻辑复杂到需要处理“竞态条件（Race Conditions）”或要求“可取消（Cancellation）”时，Redux-Saga 是唯一优雅的选择，而 Redux-Thunk 难以甚至无法有效处理。
 * 什么是竞态条件：后发起的请求比先发起的请求更早返回，导致状态错误。
 * @param data
 * @param time
 * @returns {(function(*, *): void)|*}
 */
export const createIncrementAsyncAction = (data, time) => {
    // 这个函数接收 dispatch 和 getState 作为参数
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
