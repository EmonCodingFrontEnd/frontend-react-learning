import {useParams} from "react-router-dom";

const data = [
  {id: "001", content: "你好，中国！"},
  {id: "002", content: "你好，Flyin！"},
  {id: "003", content: "你好，我的青春！"}
]

function Detail() {
    const {id, title} = useParams()
    const item = data.find(e => e.id === id);
    const content = item && item.content;
    return (
        <ul>
            <li>ID：{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{content}</li>
        </ul>
    );
}

export default Detail;