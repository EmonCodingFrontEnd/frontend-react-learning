import {ADD_PERSON, ADD_PERSON_HOBBY, MODIFY_AGE} from "../constant";

const initState = [{id: '001', name: 'tom', age: 18, hobbies: ['football', 'basketball']}]
export default function personReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case ADD_PERSON:
            // 此处不允许这样写，会导致preState被改写，但数组地址不变，导致react-redux中的state没有更新；【【redux的reducer函数必须是一个纯函数】】
            /*preState.unshift(data)
            return preState*/
            return [data, ...preState]
        case MODIFY_AGE: {
            const newState = [...preState]
            newState.find(person => person.id === data.id).age = data.age
            return newState
        }
        case ADD_PERSON_HOBBY: {
            const newState = [...preState]
            newState.find(person => person.id === data.id)?.hobbies.unshift(data.hobby)
            return newState;
        }
        default:
            return preState;
    }
}