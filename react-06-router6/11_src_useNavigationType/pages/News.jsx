import React from 'react';
import {useNavigationType} from 'react-router-dom'

function News(props) {
    const type = useNavigationType()
    // console.log(type)
    return (
        <div>News......</div>
    );
}

export default News;