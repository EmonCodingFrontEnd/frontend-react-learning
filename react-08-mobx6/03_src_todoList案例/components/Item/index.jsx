import {useCallback, useEffect, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import classNames from 'classnames';
import {useRootStore} from "../../stores/index.store";
import './index.css'

function Item({todo}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggle, setName, setEditing} = todo
    const {todoStore: {deleteTodo}} = useRootStore();

    const editInput = useRef()
    useEffect(() => {
        if (todo.isEditing) {
            editInput.current.focus();
            editInput.current.value = todo.name
        }
    }, [todo.isEditing]);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    // todo 在这里被捕获到闭包中
    const handleDelete = useCallback(() => {
        if (window.confirm("你确定要删除吗?")) {
            deleteTodo(todo.id); // ✅ 这里的 todo 是创建回调时的 todo
        }
    }, [deleteTodo, todo.id]);

    const formatTime = useCallback((date) => {
        return date.toLocaleTimeString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    }, []);

    return (
        <li
            style={{backgroundColor: isHovered ? '#ddd' : 'white'}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {
                todo.isEditing
                    ? <input className={"edit"} onBlur={() => {
                        setEditing();
                        setName(editInput.current.value);
                    }} ref={editInput}/>
                    :
                    <div className={"view"}>
                        <label>
                            <input onChange={toggle} type="checkbox" checked={todo.done}/>
                        </label>
                        <div onDoubleClick={setEditing}>
                            <span>{todo.name}</span>
                            <span style={{color: '#ccc',}}>(创建于：{formatTime(todo.createdAt)})</span>
                        </div>
                    </div>
            }
            <button onClick={handleDelete} className="btn btn-danger"
                    style={{display: isHovered ? 'block' : 'none'}}>删除
            </button>
        </li>
    );
}

export default observer(Item);