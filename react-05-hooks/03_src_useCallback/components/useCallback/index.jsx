import {useCallback, useState} from 'react';

/**
 * useCallback 的作用是「缓存函数本身」，避免组件重新渲染时函数被重复创建，从而优化子组件的渲染性能。
 *
 * 在 React 函数组件中，每次渲染时，其内部的函数都会被重新创建。这意味着即使函数的内容一模一样，每次渲染时它也是一个新的函数引用。
 *  useCallback 通过依赖数组 (deps) 来解决这个问题：
 *      只有当依赖数组中的值发生变化时，useCallback 才会返回一个新的函数引用。
 *      如果依赖项没有变化，它就返回上一次缓存的同一个函数。
 *
 *      页面加载完成后，并不会触发执行，直到add被调用
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Index(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('张三')

    const add = useCallback(num => {
        console.log('add被执行了 count=>', count)
        setCount(count + num)
    }, [count]) // 只有当count变化时，才会重新创建add函数

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