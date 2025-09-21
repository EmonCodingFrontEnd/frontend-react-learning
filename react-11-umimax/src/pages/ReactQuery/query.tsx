import {useQuery} from '@umijs/max';
import services from '@/services/ReactQuery';
import {useEffect} from "react";

const {queryUserList} = services.ReactQueryController

function Query() {
    const userId = 0;
    // 使用 useQuery Hook
    const {
        data,
        error,
        isPending, isSuccess, isError,
        isLoading,
        isFetching,
        isRefetching,
        dataUpdatedAt,
        failureCount,
        isFetched,
        isStale,
        refetch,
    } =
        /*
         * 第一个参数是应答类型
         */
        useQuery<RQType.UserInfo[]>(
            {
                queryKey: ['reactQueryUser', userId], // 唯一的查询键，数组形式。当 userId 变化时，查询会自动重新执行。
                queryFn: () => queryUserList(), // 用于获取数据的异步函数
                retry: 1, // 加载失败后重试次数
                staleTime: 60 * 1000, // 这个查询的数据 1 分钟内不过期
                gcTime: 2 * 60 * 1000,    // 缓存 2 分钟
            }
        );

    // 修改、删除后使用了queryClient.invalidateQueries，这里不需要监听数据的过期了
    /*useEffect(() => {
        // 当不是首次加载，且数据过期时触发
        if (isFetched && isStale) {
            console.log('数据已陈旧，将重新加载...');
            refetch();
        }
    }, [isStale])*/

    return (
        <div>
            {/* 初始加载 */}
            {isPending && <div>第一次加载中...</div>}

            {/*加载中*/}
            {isLoading && <div>加载中...</div>}

            {/* 刷新中 */}
            {isRefetching && <div>刷新中...</div>}

            {/* 错误状态 */}
            {isError && (
                <div>
                    <p>出错了: {error.message}</p>
                    <p>这是第 {failureCount} 次失败。</p>
                    <button onClick={() => refetch()}>重试</button>
                </div>
            )}

            {/* 成功状态，但可能在背景刷新 */}
            {isSuccess && (
                <div>
                    {isFetching && <small>正在同步最新数据...</small>}
                    <ul>
                        {data.map(item => <li key={item.id}>{item.id}-{item.name}</li>)}
                    </ul>
                </div>
            )}

            {/* 一个总是显示的刷新按钮 */}
            <button
                onClick={() => refetch()}
                disabled={isFetching}
            >
                {isFetching ? '刷新中...' : '手动刷新'}
            </button>
            <hr/>
            {/* 显示数据更新时间 */}
            <small>
                数据更新时间: {new Date(dataUpdatedAt).toLocaleTimeString()}
            </small>

            {/* 显示查询的陈旧状态（用于调试） */}
            {isStale && <small>（此数据已陈旧，将在焦点回归时更新）</small>}
        </div>
    );
}

export default Query;