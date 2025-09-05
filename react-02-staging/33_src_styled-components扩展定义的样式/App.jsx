// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 100px;
    height: 100px;
    background: orange;
    color: white;
    font-size: 20px;
    margin-left: 10px ;
`

const StyledButton2 = styled(StyledButton)`
    background: skyblue;
`

const StyledButton3 = styled(StyledButton)`
    background: deeppink;
`

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                App......
                <StyledButton>按钮</StyledButton>
                <StyledButton2>按钮</StyledButton2>
                <StyledButton3>按钮</StyledButton3>
            </div>
        )
    }
}


