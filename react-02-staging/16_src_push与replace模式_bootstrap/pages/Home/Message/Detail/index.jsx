import React, {Component} from 'react';
// import qs from "qs";

const data = [
    {id: "001", content: "你好，中国！"},
    {id: "002", content: "你好，Flyin！"},
    {id: "003", content: "你好，我的青春！"}
]

class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        // const {id, title} = this.props.match.params;
        // const content = data.find(e => e.id === id)?.content;

        // 接收search参数
        // const {id, title} = qs.parse(this.props.location.search.slice(1));
        // const content = data.find(e => e.id === id)?.content;

        // 接收state参数
        const {id, title} = this.props.location.state;
        const content = data.find(e => e.id === id)?.content;
        return (
            <ul>
                <li>ID：{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{content}</li>
            </ul>
        );
    }
}

export default Detail;