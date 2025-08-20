import {useState, useRef} from 'react';
import {nanoid} from "nanoid";

function Index(props) {

    const [userInfo, setUserInfo] = useState({name: '张三', age: 18})
    const [list, setList] = useState([])
    const inputRef = useRef();

    function addTodo() {
        return () => setList([...list, {id: nanoid(), content: inputRef.current.value}]);
    }

    function removeTodo(id) {
        return () => setList(list.filter(item => item.id !== id));
    }

    return (
        <div>
            <h3>姓名：{userInfo.name} 年龄：{userInfo.age}</h3>
            <hr/>
            <h3>我的待办事项：</h3>
            <input ref={inputRef} type="text"/>
            <button onClick={addTodo()}>添加</button>
            <ul>
                {
                    list.map((item) => (
                        <li key={item.id}>{item.content}
                            <button onClick={removeTodo(item.id)}>删除</button>
                        </li>
                    ))
                }
            </ul>
            {list.length === 0 && <span style={{backgroundColor: 'red'}}>暂无待办事项</span>}
        </div>
    );
}

export default Index;