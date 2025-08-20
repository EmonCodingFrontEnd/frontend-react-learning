import React from 'react';
import {NavLink, Outlet, useOutlet} from 'react-router-dom'

function Home(props) {
    let outlet = useOutlet();
    /*
     * 作用：用来呈现当前组件中渲染的嵌套路由
     * 如果嵌套路由没有挂载，则outlet为null，否则为嵌套的路由对象
     */
    // console.log("===>", outlet)
    return (
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="news" replace={false}>News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="message">Message</NavLink>
                    </li>
                </ul>
                {/*指定路由组件呈现的位置*/}
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Home;