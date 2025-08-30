// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
// 引入RootStoreProvider
import {RootStoreProvider} from "./stores/index.store";
// 引入App组件
import App from './App';

// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RootStoreProvider>
            <App/>
        </RootStoreProvider>
    </React.StrictMode>
);