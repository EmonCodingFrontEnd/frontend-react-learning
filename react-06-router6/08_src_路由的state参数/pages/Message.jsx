import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';

function Message(props) {
    const [messages, setMessages] = useState([
        {id: "001", title: "消息001", content: "锄禾日当午"},
        {id: "002", title: "消息002", content: "汗滴禾下土"},
        {id: "003", title: "消息003", content: "谁知盘中餐"},
        {id: "004", title: "消息004", content: "粒粒皆辛苦"},
    ])
    return (
        <div>
            <ul>
                {messages.map(item => (
                    <li key={item.id}>
                        {/*向路由组件传递params参数*/}
                        {/*<Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link>*/}

                        {/*向路由组件传递search参数*/}
                        {/*<Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link>*/}

                        {/*向路由组件传递state参数*/}
                        <Link to={"detail"}
                              state={{id: item.id, title: item.title, content: item.content}}
                        >{item.title}</Link>
                    </li>
                ))}
            </ul>
            {/*指定路由组件呈现的位置*/}
            <Outlet/>
        </div>
    );
}

export default Message;