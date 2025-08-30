import {observer} from "mobx-react-lite";
import {useCallback} from "react";
import {useRootStore} from "../../stores/index.store";
import './index.css'

function Header() {

    const {todoStore: {addTodo}} = useRootStore();

    const handleKeyUp = useCallback(event => {
        const {key, keyCode, target} = event;
        const {value} = target;

        if (key !== 'Enter' && keyCode !== 13) return;
        if (!value.trim()) return;

        addTodo(value.trim());
        target.value = '';
    }, [addTodo]);

    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    );
}

export default observer(Header);