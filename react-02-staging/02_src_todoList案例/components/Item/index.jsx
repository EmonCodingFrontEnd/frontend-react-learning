import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Item extends Component {
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            done: PropTypes.bool,
            createdAt: PropTypes.instanceOf(Date),
        }).isRequired
    }

    state = {mouseHanging: false};

    handleMouse = (flag) => {
        return () => {
            this.setState({mouseHanging: flag});
        }
    }

    handleCheck = (id) => {
        return (event) => {
            const {changeTodo} = this.props;
            changeTodo(id, event.target.checked);
        }
    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm("你确定要删除吗?")) {
                const {deleteTodo} = this.props;
                deleteTodo(id);
            }
        }
    }

    render() {
        const {mouseHanging} = this.state;
        const {todo} = this.props;
        return (<li style={{backgroundColor: mouseHanging ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
            <label>
                <input onChange={this.handleCheck(todo.id)} type="checkbox" checked={todo.done}/>
                <span>{todo.name}</span>
                <span style={{
                    color: '#ccc',
                }}>(创建于：{todo.createdAt.toTimeString()})</span>
            </label>
            <button onClick={this.handleDelete(todo.id)} className="btn btn-danger"
                    style={{display: mouseHanging ? 'block' : 'none'}}>删除
            </button>
        </li>);
    }
}

export default Item;