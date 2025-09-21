import {useState, useEffect} from 'react';
import {root} from "../../index";

/**
 * 场景           useEffect写法	                类组件等效实现	                                            说明
 * 挂载+依赖更新	 useEffect(() => { ... },[xx])	    componentDidMount()+componentDidMount(中进行条件判断)         是一种浅监听；若是对象地址不变，不会引起响应
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Index(props) {
    // 虽然会被反复调用，但React底层做了处理，不会导致count被重置
    const [count, setCount] = useState(0)
    const [userInfo, setUserInfo] = useState({name: '张三', age: 18})

    // 第一个参数，是一个函数 第二个参数，被检测的状态，默认所有状态
    useEffect(() => {
        console.log('useEffect被调用了')
    }, [userInfo])

    return (
        <div>
            <h2>当前计数为: {count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>点我加1
            </button>
            <h2>我的名字是: {userInfo.name}，我的年龄是：{userInfo.age}</h2>
            <button onClick={() => setUserInfo((userInfo) => {
                // 监听是一种浅比较，若地址不变，只是内容变，不会被监听到。
                /*userInfo.age = 1 + Math.floor(Math.random() * 30)
                console.log(userInfo)
                return userInfo*/
                return {name: userInfo.name, age: 1 + Math.floor(Math.random() * 30)}
            })}>点我更新个人信息
            </button>
            <hr/>
            <button onClick={() => {
                root.unmount()
            }}>卸载组件
            </button>
        </div>
    );
}

export default Index;