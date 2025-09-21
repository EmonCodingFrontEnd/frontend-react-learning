import {useRequest} from '@umijs/max';
import services from '@/services/ReactQuery'

const {queryUserList} = services.ReactQueryController

function Normal() {
    const {data, error, loading} = useRequest<RQType.UserInfo[]>(queryUserList)

    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            {
                data?.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    );
}

export default Normal;