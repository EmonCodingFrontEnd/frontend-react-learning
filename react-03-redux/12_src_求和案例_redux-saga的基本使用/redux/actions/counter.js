import {INCREMENT, ASYNC_INCREMENT, DECREMENT} from "../constant";

/**
 * 该文件专门为Count组件生成action对象
 */

// 同步action，就是指action的值为Object类型的一般对象
export function createIncrementAction(data) {
    return {type: INCREMENT, data}
}

export const createDecrementAction = (data) => ({type: DECREMENT, data})

export const createIncrementAsyncAction = (data, time) => ({type: ASYNC_INCREMENT, data, time})