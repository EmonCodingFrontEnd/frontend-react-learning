import {Navigate} from 'react-router-dom'
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

export default [
    {path: '/about', element: <About></About>},
    {
        path: '/home', element: <Home></Home>,
        children: [
            {path: 'news', element: <News></News>},
            {
                path: 'message', element: <Message></Message>, children: [
                    // 声明接收params参数
                    // {path: 'detail/:id/:title/:content', element: <Detail></Detail>}

                    // search参数无需声明接收，正常注册路由即可
                    // {path: 'detail', element: <Detail></Detail>}

                    // state参数无需声明接收，正常注册路由即可
                    {path: 'detail', element: <Detail></Detail>}
                ]
            },
        ]
    },
    {path: '/', element: <Navigate to="/about"></Navigate>}
]