import React, {Component} from 'react';

const data = [
    {id: "001", content: "你好，中国！"},
    {id: "002", content: "你好，Flyin！"},
    {id: "003", content: "你好，我的青春！"}
]

class Detail extends Component {
    render() {
        // 接收sarams参数
        const {id, title} = this.props.match.params;
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