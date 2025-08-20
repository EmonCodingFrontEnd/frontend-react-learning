import {useMemo, useState} from 'react';

/**
 * useMemo 的作用是「缓存计算结果的值」，避免组件重新渲染时进行重复的复杂计算，从而优化渲染性能。
 *
 * 在 React 函数组件中，每次渲染时，其内部的所有逻辑（包括变量声明、复杂计算等）都会重新执行。
 *  useMemo 通过依赖数组 (deps) 来缓存一个计算成本很高的值：
 *      只有当依赖数组中的值发生变化时，useMemo 才会重新执行计算函数，返回新的值。
 *      如果依赖项没有变化，它就直接返回上一次缓存的计算结果，跳过昂贵的计算过程。
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Index(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('张三')

    // 可以模拟Vue中的计算属性
    const add = useMemo(() => {
        console.log('useMemo被执行了 count=>', count)
        return (num) => {
            console.log('add被执行了 count=>', count)
            setCount(count + num)
        }
    }, [count]) // 只有当count变化时，才会重新执行useMemo得到新的add函数

    return (
        <div>
            <h2>当前计数为: {count}</h2>
            <button onClick={() => add(1)}>点我加1
            </button>
            <h2>我的名字是: {name}</h2>
            <button onClick={() => setName(name => name + Math.floor(Math.random() * 10))}>点我改名</button>
        </div>
    );
}

export default Index;