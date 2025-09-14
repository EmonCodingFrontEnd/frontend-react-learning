import { request } from 'umi';

// GET 请求
export async function getTodos() {
    console.log('services.getTodos被调用了');
    return request('/api/todos', {method: 'GET'});
}