import {Outlet} from 'umi';
import MyNavLink from "@/components/MyNavLink";

function Home() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="message">Message</MyNavLink>
                    </li>
                </ul>
                {/*指定路由组件呈现的位置*/}
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Home;