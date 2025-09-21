import {request} from '@umijs/max';

export async function queryUserList() {
    return request<RQType.UserInfo[]>('http://localhost:3001/users', {
        method: 'GET',
    });
}

export async function addUser(
    body: RQType.UserInfo,
) {
    return request<RQType.UserInfo>('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    });
}

export async function updateUser(
    id: string,
    body: RQType.UserInfo,
) {
    return request<RQType.UserInfo>(`http://localhost:3001/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    });
}

export async function deleteUser(params: {
    // path
    /** userId */
    userId?: number;
}) {
    const {userId} = params;
    return request<RQType.UserInfo>(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE',
    });
}