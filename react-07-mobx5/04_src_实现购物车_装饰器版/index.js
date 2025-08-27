// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
import {Provider} from "mobx-react";
import RootStore from "./stores";
// 引入App组件
import App from './App';

// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Provider {...new RootStore()}>
            <App/>
        </Provider>
    // </React.StrictMode>
);