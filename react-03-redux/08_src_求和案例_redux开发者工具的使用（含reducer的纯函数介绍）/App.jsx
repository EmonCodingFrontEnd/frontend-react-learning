import React, {Component} from 'react';
import Count from "./containers/Count";
import Person from "./containers/Person";

class App extends Component {
    /*
    纯函数：
    1.一类特别的函数：只要是同样的输入（实参），必定得到同样的输出（返回）
    2.必须遵守以下一些约束
        1.不得改写参数数据
        2.不会产生任何副作用，例如网络请求，输入和输出设备
        3.不能调用Date.now()或者Math.random()等不纯的方法
    3.redux的reducer函数必须是一个纯函数
     */
    render() {
        return (
            <div>
                <Count></Count>
                <hr/>
                <Person></Person>
            </div>
        );
    }
}

export default App;