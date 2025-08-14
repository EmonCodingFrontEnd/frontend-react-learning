// 创建“外壳”组件
// 引入默认暴露的React和单独暴露的Component
import React, {Component} from "react";
import Header from "./components/Header";
import './App.css'
import List from "./components/List";
import Footer from "./components/Footer";

// 创建并暴露App组件
export default class App extends Component {
    /*
    状态在哪里，操作状态的方法就应该在哪里！！！

    todoList案例相关知识点：
    1.拆分组件、实现静态组件，注意：className、style的写法。
    2.动态初始化列表，如何确定将数据放在哪个组件的state中？
        ——某个组件使用：放在其自身的state中
        ——某些组件使用：放在他们共同的父组件state中（官方称此操作位：状态提升）
    3.关于父子之间通信：
        1.【父组件】给【子组件】传递数据：通过props传递
        2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4.注意defaultChecked和checked的区别，类似的还有：defaultValue和value
    5.状态在哪里，操作状态的方法就在哪里！！！
     */

    // 初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true, createdAt: new Date("2025-08-09T14:30:45.123Z")},
            {id: '002', name: '睡觉', done: true, createdAt: new Date("2025-08-09T10:36:25.123Z")},
            {id: '003', name: '写代码', done: false, createdAt: new Date("2025-08-09T12:30:45.123Z")},
            {id: '004', name: '逛街', done: true, createdAt: new Date("2025-08-10T14:30:45.123Z")},
        ]
    }

    addTodo = (todo) => {
        const {todos} = this.state;
        todos.unshift(todo)
        this.setState({todos: todos})
    }

    changeTodo = (id, done) => {
        const {todos} = this.state;
        todos.forEach((todo) => {
            if (todo.id === id) {
                todo.done = done;
            }
        })
        this.setState({todos: todos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(e => e.id === id);
        if (index > -1) {
            todos.splice(index, 1);
            this.setState({todos: todos})
        }
    }

    checkAllTodos = (flag) => {
        const {todos} = this.state;
        const newTodos = todos.map(todo => {
            return {...todo, done: flag}
        });
        this.setState({todos: newTodos})
    }

    clearAllDoneTodos = () => {
        const {todos} = this.state;
        const newTodos = todos.filter(e => !e.done);
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodos={this.checkAllTodos}
                            clearAllDoneTodos={this.clearAllDoneTodos}/>
                </div>
            </div>

        )
    }
}