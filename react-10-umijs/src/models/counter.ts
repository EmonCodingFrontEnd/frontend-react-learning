import {useState, useCallback} from 'react';
import * as counterService from '../services/counter';

export default function useCountModel() {
    // 状态
    const [count, setCount] = useState(10);
    const [loading, setLoading] = useState(false);

    // 同步操作：递增
    const increment = useCallback((payload: number) => {
        setCount(prev => prev + payload);
    }, []);

    // 同步操作：递减
    const decrement = useCallback((payload: number) => {
        setCount(prev => prev - payload);
    }, []);

    // 同步操作：当前求和为奇数时再加
    const incrementIfOdd = useCallback((payload: number) => {
        setCount(prevCount => {
            if (prevCount % 2 !== 0) {
                return prevCount + payload;
            }
            return prevCount;
        });
    }, [])

    // 异步操作：异步递增
    const asyncIncrement = useCallback(async (payload: any) => {
        setLoading(true);
        try {
            console.log('Async increment start:', payload);
            const addRes = await counterService.asyncAdd(payload);
            console.log('Async increment success:', addRes);
            setCount(prev => prev + addRes);
        } catch (error) {
            console.error('Async increment failed:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        count,
        loading,
        increment,
        decrement,
        incrementIfOdd,
        asyncIncrement,
    };
}

// 类型导出（可选）
export type CountModel = ReturnType<typeof useCountModel>;