import React from 'react';
// import {useParams, useMatch} from 'react-router-dom'
import {uuseSearchParams, useLocation} from 'react-router-dom'
import qs from "qs";

function Detail(props) {
    // 接收params参数
    // const {id, title, content} = useParams()
    // const {id, title, content} = useMatch('/home/message/detail/:id/:title/:content').params

    // 接收search参数
    // const [searchParams, setSearchParams] = useSearchParams()
    // const id = searchParams.get('id')
    // const title = searchParams.get('title')
    // const content = searchParams.get('content')
    const {id, title, content} = qs.parse(useLocation().search.slice(1))
    return (
        <ul>
            <li>ID：{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{content}</li>
            {/*<li>*/}
            {/*    <button onClick={() => setSearchParams({id: 1, title: 'hello', content: 'world'})}>修改search参数*/}
            {/*    </button>*/}
            {/*</li>*/}
        </ul>
    );
}

export default Detail;