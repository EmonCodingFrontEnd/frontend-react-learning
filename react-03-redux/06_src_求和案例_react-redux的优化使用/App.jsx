import React, {Component} from 'react';
import Count from "./containers/Count";

// import store from "./redux/store";

class App extends Component {
    /*
    react-redux优化：
    1.容器组件和UI组件整合一个文件
    2.无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}></Provider>即可
    3.使用了react-redux后也不再自己检测redux中的状态变化了，容器组件可以自动完成这个工作
    4.mapDispatchToProps也可以简单的写成一个对象
    5.一个组件要和redux“打交道”要经过哪几步？
        第一步：定义好UI组件————不暴露
        第二步：引入connect生成一个容器组件，并暴露，写法如下：
            connect(state=>({key:value}),{key:xxxAction})(UI组件)
        第三步：在UI组件中通过this.props.xxx读取和操作状态
     */
    render() {
        return (
            <div>
                哈哈
                {/*给容器组件（要区分容器组件与UI组件）传递store*/}
                {/*<Count store={store}></Count>*/}

                {/* 若index.jsx中引入了Provider组件，则不需要在App.jsx中传递store了*/}
                <Count></Count>
            </div>
        );
    }
}

export default App;