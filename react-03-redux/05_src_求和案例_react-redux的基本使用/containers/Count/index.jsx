// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件和redux
import {connect} from 'react-redux'
// 引入redux的action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/counter'

/**
 * 这就是状态
 *
 * 1.mapStateToProps 函数返回的是一个对象；
 * 2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value————这是操作状态的方法
 * 3.mapStateToProps 函数用于传递状态
 * @param state
 * @returns {{add: *}}
 */
function mapStateToProps(state) {
    return {
        count: state
    }
}

/**
 * 这是操作状态的方法
 *
 * 1.mapDispatchToProps 函数返回的是一个对象；
 * 2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value————这是操作状态的方法
 * 3.mapDispatchToProps 函数用于传递操作状态的方法
 * @param dispatch
 * @returns {{add: *}}
 */
function mapDispatchToProps(dispatch) {
    return {
        add: function (value) {
            // 通知redux执行方法
            dispatch(createIncrementAction(value))
        },
        sub: value => dispatch(createDecrementAction(value)),
        addAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)