import {useRef, useState} from 'react';

function Index(props) {
    const [count, setCount] = useState(0)
    const myCount = useRef(0)
    const selectNumber = useRef()

    return (
        <div>
            <h2>当前计数为：{myCount.current}</h2>
            <h2>当前求和为：{count}</h2>
            <select ref={selectNumber} name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={() => {
                setCount(count + Number(selectNumber.current.value))
                myCount.current++
            }}>点我+
            </button>
        </div>
    );
}

export default Index;