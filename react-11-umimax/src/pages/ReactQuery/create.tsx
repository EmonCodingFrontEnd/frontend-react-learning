import {useQuery, useMutation, useQueryClient} from '@umijs/max';
import services from '@/services/ReactQuery';
import {Button} from "antd";

const {queryUserList, addUser} = services.ReactQueryController

function Create() {
    const queryClient = useQueryClient()
    const {data, refetch} = useQuery({queryKey: ['reactQueryUser'], queryFn: () => queryUserList(),});

    const {mutate: create, isPending} =
        /*
         * 第一个参数是应答类型
         * 第三个参数是mutationFn函数的请求参数类型
         */
        useMutation<RQType.UserInfo, Error, RQType.UserInfo>({
            mutationFn: (data: RQType.UserInfo) => addUser(data),
            onSuccess: (data: RQType.UserInfo) => {
                console.log('添加成功', data)
                // 使用queryClient.invalidateQueries而不是refetch，是因为前者可以触发当前页面刷新，其他使用同等key的，在页面聚焦后，也会刷新（也就是让缓存失效）
                queryClient.invalidateQueries({queryKey: ['reactQueryUser']})
            }, onError: (error) => {
                console.log('添加失败', error)
            }, onSettled: () => {
                console.log('添加完成')
            }
        });

    return (
        <div>
            <ul>
                {data?.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <Button disabled={isPending} type="primary"
                    onClick={() => create({
                        name: '张三' + Math.floor(Math.random() * 100),
                        email: Math.random() + '@example.com'
                    })}>{isPending ? '正在添加中...' : '添加'}
            </Button>
        </div>
    );
}

export default Create;