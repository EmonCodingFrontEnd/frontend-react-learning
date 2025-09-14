import {useState} from "react";
import {Link, Outlet, useNavigate} from 'umi';
import styles from './index.less';

function Message  (){
    const [messageArr, setMessageArr] = useState(
        [
            {id: "001", title: "消息001"},
            {id: "002", title: "消息002"},
            {id: "003", title: "消息003"}
        ]
    )

    const navigate = useNavigate()

    function pushShow (id, title)  {
        return () => {
            navigate(`detail/${id}/${title}`, {
                replace: false
            })
        }
    }

    function replaceShow (id, title)  {
        return () => {
            navigate(`detail/${id}/${title}`, {
                replace: true
            })
        }
    }

    return (
        <div className={styles.normal}>
            <ul>
                {
                    messageArr.map(item => (
                        <li key={item.id}>
                            {/*向路由组件传递params参数*/}
                            <Link to={`detail/${item.id}/${item.title}`}>{item.title}</Link>
                            &nbsp;&nbsp;
                            <button onClick={pushShow(item.id, item.title)}>push查看</button>
                            &nbsp;&nbsp;
                            <button onClick={replaceShow(item.id, item.title)}>replace查看</button>
                        </li>
                    ))
                }
            </ul>
            <hr/>
            {/*指定路由组件呈现的位置*/}
            <Outlet/>
        </div>
    );
}

export default Message;
