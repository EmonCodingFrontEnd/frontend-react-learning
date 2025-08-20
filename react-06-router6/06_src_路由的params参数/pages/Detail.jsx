import React from 'react';
import {useParams, useMatch} from 'react-router-dom'

function Detail(props) {
    // const {id, title, content} = useParams()
    const {id, title, content} = useMatch('/home/message/detail/:id/:title/:content').params
    return (
        <ul>
            <li>ID：{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{content}</li>
        </ul>
    );
}

export default Detail;