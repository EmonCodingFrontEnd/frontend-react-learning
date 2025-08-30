import {observer} from "mobx-react-lite";
import {useCallback, useMemo} from "react";
import {useRootStore} from "../../stores/index.store";
import './index.css'

function Footer() {
    const {
        todoStore: {
            // todos,
            completedCount,
            totalCount,
            isAllCompleted,
            checkAllTodos,
            clearAllDoneTodos
        }
    } = useRootStore();

    const handleCheckAll = useCallback((event) => {
        checkAllTodos(event.target.checked);
    }, [checkAllTodos])

    const handleClearAllDone = useCallback(() => {
        if (window.confirm("确定要清除所有已完成的任务吗？")) {
            clearAllDoneTodos();
        }
    }, [clearAllDoneTodos])

    // 使用 useMemo 优化计算，依赖 todos和todo.done
    /*const {completedCount, totalCount, isAllCompleted} = useMemo(() => {
        const total = todos.length;
        const done = todos.filter(todo => todo.done).length;
        return {
            completedCount: done,
            totalCount: total,
            isAllCompleted: total > 0 && done === total
        };
    }, [todos, todos.map(todo => todo.done).join()]);*/

    // 如果没有任务，不显示底部
    if (totalCount === 0) {
        return null;
    }

    return (<div className="todo-footer">
        <label>
            <input type="checkbox" checked={isAllCompleted}
                   onChange={handleCheckAll}
                   aria-label={isAllCompleted ? "取消全选" : "全选所有任务"}
            />
        </label>
        <span>已完成 <strong>{completedCount}</strong> / 全部 <strong>{totalCount}</strong></span>
        <button
            onClick={handleClearAllDone}
            className={completedCount > 0 ? "btn btn-danger" : "btn btn-disabled"}
            aria-label="清除已完成任务"
            disabled={completedCount === 0}
        >
            清除已完成任务
        </button>
    </div>);
}

export default observer(Footer);