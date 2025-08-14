import {INCREMENT, DECREMENT} from "../constant";

/**
 * 该文件专门为Count组件生成action对象
 */
export function createIncrementAction(data) {
    return {type: INCREMENT, data}
}

export const createDecrementAction = (data) => ({type: DECREMENT, data})
