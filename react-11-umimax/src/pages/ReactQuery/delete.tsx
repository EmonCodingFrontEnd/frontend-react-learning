import {useQuery, useMutation, styled, useQueryClient} from '@umijs/max';
import services from '@/services/ReactQuery';
import {Button} from "antd";

const {queryUserList, deleteUser} = services.ReactQueryController
const StyledDiv = styled.div`
    width: 200px;

    ul {
        padding: 10px;
        margin: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        border-bottom: dashed black 1px;
        padding: 3px 0;
        background-color: #f0f8ff; /* 使用更浅的背景色 */
        margin-top: 1px;
    }

    li > button {
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        margin-right: 5px;
    }

    li:hover button {
        opacity: 1;
        pointer-events: auto;
    }
`

function Delete() {
    const queryClient = useQueryClient()
    const {data} = useQuery({queryKey: ['reactQueryUser'], queryFn: () => queryUserList(),});

    const {mutate: deleteItem, isPending} =
        /*
         * 第一个参数是应答类型
         * 第三个参数是mutationFn函数的请求参数类型
         */
        useMutation<object, Error, number>({
            mutationFn: (userId: number) => deleteUser({userId: userId}),
            onSuccess: (data: object) => {
                console.log('删除成功', data)
                // 使用queryClient.invalidateQueries而不是refetch，是因为前者可以触发当前页面刷新，其他使用同等key的，在页面聚焦后，也会刷新（也就是让缓存失效）
                queryClient.invalidateQueries({queryKey: ['reactQueryUser']})
            }, onError: (error) => {
                console.log('删除失败', error)
            }, onSettled: () => {
                console.log('删除完成')
            }
        });

    return (
        <StyledDiv>
            <ul>
                {data?.map(item => <li key={item.id}>
                    {item.name}
                    <Button disabled={isPending} type="primary"
                            onClick={() => deleteItem(item.id as number)}>{isPending ? '正在删除中...' : '删除'}
                    </Button>
                </li>)}
            </ul>
        </StyledDiv>
    );
}

export default Delete;