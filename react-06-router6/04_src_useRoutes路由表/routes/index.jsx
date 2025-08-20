import {Navigate} from 'react-router-dom'
import About from "../pages/About";
import Home from "../pages/Home";

const routes = [
    {path: '/about', element: <About></About>},
    {path: '/home', element: <Home></Home>},
    {path: '/', element: <Navigate to="/about"></Navigate>}
]
export default routes;