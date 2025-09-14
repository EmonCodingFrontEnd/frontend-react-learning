import {request} from 'umi';

export function fetchInitialData() {
    return request('/api/currentUser');
    // return request('/api/search/users?q=Rushing'); // 跨域请求
}