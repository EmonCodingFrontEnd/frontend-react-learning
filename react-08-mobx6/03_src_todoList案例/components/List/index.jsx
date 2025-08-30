import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/index.store";
import './index.css'
import Item from "../Item";


function List() {

    const {todoStore: {todos}} = useRootStore();

    return (
        <ul className="todo-main">
            {
                todos.map((todo) => {
                    return <Item todo={todo} key={todo.id}/>
                })
            }
        </ul>
    );
}

export default observer(List);