import {Navigate} from 'react-router-dom'
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

const routes = [
    {path: '/about', element: <About></About>},
    {
        path: '/home', element: <Home></Home>,
        children: [
            {path: 'news', element: <News></News>},
            {
                path: 'message', element: <Message></Message>, children: [
                    {path: 'detail/:id/:title/:content', element: <Detail></Detail>}
                ]
            },
        ]
    },
    {path: '/', element: <Navigate to="/about"></Navigate>}
]

export default routes;