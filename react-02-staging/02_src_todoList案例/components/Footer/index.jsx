import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodos: PropTypes.func.isRequired,
        clearAllDoneTodos: PropTypes.func.isRequired,
    }

    handleCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked);
    }

    handleClearAllDone = () => {
        this.props.clearAllDoneTodos();
    }

    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((prev, curr) => {
            return prev + (curr.done ? 1 : 0);
        }, 0)
        const totalCount = todos.length;
        return (<div className="todo-footer">
            <label>
                <input type="checkbox" checked={doneCount === totalCount && totalCount > 0}
                       onChange={this.handleCheckAll}/>
            </label>
            <span>已完成{doneCount}</span> / 全部{totalCount}
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>);
    }
}

export default Footer;