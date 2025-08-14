// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
// 引入App组件
import App from './App';
import store from "./redux/store";
// 使用React - Redux的Provider可以自动处理store订阅，不需要手动管理渲染。
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