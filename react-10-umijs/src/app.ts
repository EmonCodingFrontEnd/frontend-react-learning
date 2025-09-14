import {RequestConfig} from 'umi';
import {fetchInitialData} from '@/services/initial';

// 请求配置
export const request: RequestConfig = {
    timeout: 10000,
    errorConfig: {
        errorHandler: (error: any, opts: any) => {
            // 全局错误处理
            console.error('请求错误:', error);
            // 可以根据状态码进行特定处理
            if (error.response?.status === 401) {
                // 未授权，跳转到登录页
                window.location.href = '/login';
            }
        },
        errorThrower: () => {
        },
    },
    requestInterceptors: [
        (url: string, options: any) => {
            // 请求拦截器
            const token = localStorage.getItem('token');
            if (token) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${token}`,
                };
            }
            return {url, options};
        },
    ],
    responseInterceptors: [
        (response: any) => {
            // 响应拦截器
            const {data} = response;

            // 可以根据业务状态码进行处理
            if (data && data.code && data.code !== 200) {
                throw new Error(data.message || '请求失败');
            }

            return response;
        },
    ],
};

// 全局初始状态管理插件
export async function getInitialState() {
    const initialData = await fetchInitialData();
    console.log('getInitialState:', initialData);
    return initialData.data;
}