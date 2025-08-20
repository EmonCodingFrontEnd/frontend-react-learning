import {useState, useEffect} from 'react';
import {root} from "../../index";

/**
 * 场景           useEffect写法	                                    类组件等效实现	           说明
 * 挂清理副作用	 useEffect(() => { return () => {...} }, [])	    componentWillUnmount()      若return语句之前有代码，也还是会执行的，相当于componentDidMount()
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Index(props) {
    // 虽然会被反复调用，但React底层做了处理，不会导致count被重置
    const [count, setCount] = useState(0)

    // 第一个参数，是一个函数 第二个参数，被检测的状态，默认所有状态
    useEffect(() => {
        console.log('useEffect被调用了')
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            console.log('组件销毁了')
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h2>当前计数为: {count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>点我加1
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