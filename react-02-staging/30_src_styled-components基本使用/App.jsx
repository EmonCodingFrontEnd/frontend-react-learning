// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: pink;
    padding: 1em;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    ul {
        display: flex;
        list-style: none;
        li {
            flex: 1;
            &:hover {
                background-color: skyblue;
            }
        }
    }
`;

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                App......
                <StyledFooter>
                    <ul>
                        <li>首页</li>
                        <li>列表</li>
                        <li>我的</li>
                    </ul>
                </StyledFooter>
            </div>
        )
    }
}