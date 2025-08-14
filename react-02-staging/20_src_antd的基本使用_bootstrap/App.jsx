// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import {Button, DatePicker} from 'antd';
import {WechatOutlined, WeiboOutlined, SearchOutlined} from '@ant-design/icons';
import './App.less'

const {RangePicker} = DatePicker;

// 创建并暴露App组件
export default class App extends Component {
    render() {
        const onChange = (date, dateString) => {
            console.log(date, dateString);
        };
        return (
            <div>
                App......
                <button>点我</button>
                <Button type="primary">按钮1</Button>
                <Button>按钮2</Button>
                <Button type="link">按钮3</Button>
                <WechatOutlined/>
                <WeiboOutlined/>
                <Button type="primary" icon={<SearchOutlined/>}>
                    Search
                </Button>
                <DatePicker onChange={onChange}/>
                <RangePicker/>
            </div>
        )
    }
}