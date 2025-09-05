import {INCREMENT, DECREMENT} from "../constant";

/**
 * 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * @param {*} preState  之前的状态
 * @param {*} action  动作对象，包含type属性
 */
const initState = 0
export default function countReducer(preState = initState, action) {
    // 从action对象中获取：type、data
    const {type, data} = action;
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState;
    }
}