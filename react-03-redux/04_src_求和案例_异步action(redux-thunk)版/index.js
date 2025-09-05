// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
// 引入App组件
import App from './App';
import store from "./redux/store";

// 初始渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// 订阅store变化，重新渲染
store.subscribe(() => {
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
})
