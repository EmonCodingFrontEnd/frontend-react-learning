// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import styled from "styled-components";

const StyledChild = styled(Child)`
    color: red;
    font-size: 20px;
    background-color: #f4f1f1;
`;

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                App......
                <StyledChild></StyledChild>
            </div>
        )
    }
}

function Child(props) {
    return (
        <div className={props.className}>child</div>
    );
}

