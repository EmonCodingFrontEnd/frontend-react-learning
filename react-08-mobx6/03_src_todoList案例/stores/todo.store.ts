import {action, makeObservable, observable, computed, runInAction, flow, makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";
import axios from "axios";

export class Todo {
    id: string;
    name: string;
    done: boolean;
    createdAt: Date;
    isEditing: boolean;

    constructor(todo: { id: string; name: string; done?: boolean; createdAt?: string | Date }) {
        this.id = todo.id;
        this.name = todo.name;
        this.done = todo.done || false;

        // 安全处理 createdAt
        if (todo.createdAt !== undefined && todo.createdAt !== null && todo.createdAt !== '') {
            this.createdAt = typeof todo.createdAt === 'string'
                ? new Date(todo.createdAt)
                : todo.createdAt;
        } else {
            this.createdAt = new Date();
        }

        this.isEditing = false;
        makeAutoObservable(this, {}, {autoBind: true})
    }

    toggle = () => {
        this.done = !this.done;
    }

    setName = (name: string) => {
        this.name = name.trim();
    }

    setEditing = () => {
        this.isEditing = !this.isEditing;
    }

}

export default class TodoStore {
    hasError: string = '';
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
        this.loadTodos()
    }

    * loadTodos() {
        try {
            let response = yield axios.get('http://localhost:3001/todos');
            this.todos = response.data.map(data => {
                return new Todo(data)
            });
        } catch (error) {
            this.hasError = error.message + "：请打开 <code>json-server db.js</code> 服务";
        }
    }

    // --------------------------------------------------华丽的分割线--------------------------------------------------


    /**
     * 获取已完成的 todo 的数量
     */
    get completedCount() {
        return this.todos.filter(todo => todo.done).length;
    }

    /**
     * 获取所有 todo 的数量
     */
    get totalCount() {
        return this.todos.length;
    }


    /**
     * 获取所有 todo 是否都完成
     */
    get isAllCompleted() {
        return this.totalCount > 0 && this.completedCount === this.totalCount;
    }

    // --------------------------------------------------华丽的分割线--------------------------------------------------

    /**
     * 添加一个 todo
     * @param name - todo 名称
     */
    addTodo = (name: string) => {
        const trimmedName = name.trim();
        if (!trimmedName) return;

        const todo = new Todo({id: nanoid(), name: trimmedName})
        this.todos.unshift(todo)
    }

    /**
     * 删除一个 todo
     * @param id - todo id
     */
    deleteTodo = (id: string) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    /**
     * 全选/取消全选
     * @param done - 是否完成
     */
    checkAllTodos = (done: boolean) => {
        this.todos.forEach(todo => todo.done = done)
    }

    /**
     * 删除所有已完成的 todo
     */
    clearAllDoneTodos = () => {
        this.todos = this.todos.filter(e => !e.done);
    }
}

