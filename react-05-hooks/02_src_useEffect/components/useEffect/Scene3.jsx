import {useState, useEffect} from 'react';
import {root} from "../../index";

/**
 * 场景           useEffect写法	                类组件等效实现	                                            说明
 * 挂载+依赖更新	 useEffect(() => { ... })	    componentDidMount()+componentDidMount(中进行条件判断)         挂载后执行，被监听的属性变化后也会执行，其他属性变化不会执行
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Index(props) {
    // 虽然会被反复调用，但React底层做了处理，不会导致count被重置
    const [count, setCount] = useState(0)
    const [name, setName] = useState('张三')

    // 第一个参数，是一个函数 第二个参数，被检测的状态，默认所有状态
    useEffect(() => {
        console.log('useEffect被调用了')
    }, [count])

    return (
        <div>
            <h2>当前计数为: {count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>点我加1
            </button>
            <h2>我的名字是: {name}</h2>
            <button onClick={() => setName(name => name + Math.floor(Math.random() * 10))}>点我改名</button>
            <hr/>
            <button onClick={() => {
                root.unmount()
            }}>卸载组件
            </button>
        </div>
    );
}

export default Index;