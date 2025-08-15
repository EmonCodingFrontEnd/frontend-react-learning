// 类式组件
/*import React, {Component} from 'react';
import {root} from "../../index";

class HooksDemo extends Component {
    state = {count: 0}
    myRef = React.createRef();

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(preState => ({count: preState.count + 1}))
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    unmount = () => {
        root.unmount();
    }

    show = () => {
        console.log(this.myRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <h2>当前求和为: {this.state.count}</h2>
                <button onClick={this.add}>点我加1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>展示数据</button>
            </div>
        );
    }
}*/

// 函数式组件
import React from 'react';
import {root} from "../../index";

function HooksDemo() {
    // console.log('HooksDemo组件被渲染了')
    // 虽然会被反复调用，但React底层做了处理，不会导致count被重置
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('张三')
    const myRef = React.useRef();

    // 第一个参数，是一个函数 第二个参数，被检测的状态，默认所有状态
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        // 第一种写法
        // setCount(count + 1)

        // 第二种写法
        setCount(count => count + 1)
    }

    function unmount() {
        root.unmount()
    }

    function show() {
        console.log(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为: {count}</h2>
            <h2>我的名字是: {name}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={() => setName(name => '李四')}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>展示数据</button>
        </div>
    );
}

export default HooksDemo;