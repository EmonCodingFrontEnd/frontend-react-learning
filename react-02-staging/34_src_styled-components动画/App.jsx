// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import styled, {keyframes} from "styled-components";

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const StyledDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: skyblue;
    animation: ${rotate360} 1s infinite;
`

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                App......
                <StyledDiv></StyledDiv>
            </div>
        )
    }
}


