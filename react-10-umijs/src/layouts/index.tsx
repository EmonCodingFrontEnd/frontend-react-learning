import {Link, Outlet, NavLink} from 'umi';
import styles from './index.less';

export default function Layout() {
    return (
        <div className={styles.navs}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/docs">Docs</Link>
                </li>
                <li>
                    <a href="https://github.com/umijs/umi">Github</a>
                </li>
                <li>
                    <NavLink to="/counter/umijs">求和案例（数据流）</NavLink>
                </li>
                <li>
                    <NavLink to="/dvaCounter">求和案例(dva）</NavLink>
                </li>
                <li>
                    <NavLink to="/nesting">嵌套路由</NavLink>
                </li>
                <li>
                    <NavLink to="/globalState">全局初始状态</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}
