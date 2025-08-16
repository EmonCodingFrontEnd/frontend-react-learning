import React from 'react';
import {useNavigationType, useResolvedPath} from 'react-router-dom'

function News(props) {
    const type = useNavigationType()
    // console.log(type)
    /*
     * 作用：给定一个URL值，解析其中的：path、search、hash值。
     * {pathname: '/user', search: '?id=001& ame=tom', hash: '#qwer'}
     */
    // console.log(useResolvedPath('/user?id=001& ame=tom#qwer'))
    return (
        <div>News......</div>
    );
}

export default News;