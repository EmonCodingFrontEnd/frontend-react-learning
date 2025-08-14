// ==================================================方案一：使用Provider传递store到容器组件，并订阅store变化==================================================
// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
// 引入App组件
import App from './App';
import store from "./redux/store";
// 使用React-Redux的Provider可以自动处理store订阅，不需要手动管理渲染。
import {Provider} from 'react-redux';

// 初始渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*订阅store变化，重新渲染；还可以给容器组件传递store*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// ==================================================方案二：不使用Provider，也不订阅store，而是在App.jsx中传递store给容器组件使用，并顺便来达到监听store效果==================================================

// // 引入React核心库
// import React from 'react';
// // 引入ReactDOM
// import ReactDOM from 'react-dom/client';
// // 引入App组件
// import App from './App';
// // import store from "./redux/store";
// // 使用React-Redux的Provider可以自动处理store订阅，不需要手动管理渲染。
// // import {Provider} from 'react-redux';
//
// // 初始渲染App到页面
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         {/*订阅store变化，重新渲染*/}
// {/*<Provider store={store}>*/}
// <App/>
// {/*</Provider>*/}
// </React.StrictMode>
// );
//
// /*
// 【重点】为什么，这里不用Provider也可以？因为里面使用的事容器组件，而不是一般的UI组件！！！
//  */
