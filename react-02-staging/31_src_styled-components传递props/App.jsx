// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: 1px solid red;
    border-radius: 10px;
    outline: none;
`;

const StyledDiv = styled.div`
    padding: 1em;
    background: ${props => props.bg || 'papayawhip'};
    width: 100px;
    height: 100px;
`;

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                App......
                <StyledInput type="password" placeholder={"请输入密码"}/>
                <StyledDiv bg={"red"}>StyledDiv</StyledDiv>
            </div>
        )
    }
}