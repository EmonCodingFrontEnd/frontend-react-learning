import React from 'react';
import {useInRouterContext} from 'react-router-dom'

function Demo(props) {
    const inRouter = useInRouterContext();
    console.log(inRouter);
    return (
        <div>Demo</div>
    );
}

export default Demo;