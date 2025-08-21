// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
// 使用React - Redux的Provider可以自动处理store订阅，不需要手动管理渲染。
import {Provider} from 'react-redux';
// 引入持久化库
import createStore from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react';
// 引入App组件
import App from './App';
import LoadingSpinner from "./components/LoadingSpinner";

// 调用函数，获取 store 和 persistor 实例
const {store, persistor} = createStore();

// 初始渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*订阅store变化，重新渲染；还可以给容器组件传递store*/}
        <Provider store={store}>
            {/*加入持久化功能：
            PersistGate 组件会阻塞<App /> 的渲染，直到它成功从本地存储（如 localStorage）中读取到持久化的数据（如用户token、设置等），并将其“水合”（hydrate）回 Redux store。*/}
            <PersistGate loading={<LoadingSpinner/>} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);