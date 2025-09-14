import {useEffect, useState} from "react";
import styles from './index.less';
import {useRequest} from 'umi';
import {getTodos} from '@/services/todos';

function News1() {
    const [todos, setTodos] = useState(
        [{id: 1, name: '新闻1'}, {id: 2, name: '新闻2'}, {id: 3, name: '新闻3'}]
    )
    // 调用方式一
    console.log('调用方式一：useEffect')
    useEffect(() => {
        // getTodos().then(res => setTodos(res.data)) // 第一种
        // 第二种
        (async () => {
            const res = await getTodos();
            setTodos(res.data);
        })();
    }, [])

    return (
        <div className={styles.normal}>
            <ul>
                {
                    todos.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

function News2() {
    // 调用方式二
    console.log('调用方式二：useRequest')
    const {data: todos, error, loading} = useRequest(getTodos);
    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className={styles.normal}>
            <ul>
                {
                    todos.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default News1;