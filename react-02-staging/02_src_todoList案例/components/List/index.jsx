import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import PropTypes from "prop-types";

class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    render() {
        const {todos, changeTodo, deleteTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item todo={todo} key={todo.id} changeTodo={changeTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

export default List;