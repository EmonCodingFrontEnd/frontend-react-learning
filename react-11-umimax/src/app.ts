import logo from './logo.svg';
import {RequestConfig, RuntimeReactQueryType} from '@umijs/max';
import {message, notification} from "antd";
import {QueryClient} from "@tanstack/react-query";

// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
    return {name: ''};
}

// 布局配置的运行时配置，优先级比 .umirc.ts 中的配置高
export const layout = () => {
    return {
        title: '问秋的小店',
        // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        logo,
        menu: {
            locale: false,
        },
    };
};

// 屏蔽 console.error 中包含特定信息的警告
const originalError = console.error;
console.error = (...args) => {
    if (/findDOMNode|StrictMode/.test(args[0])) {
        return;
    }
    originalError.call(console, ...args);
};

// 运行时配置 reactQuery
export const reactQuery: RuntimeReactQueryType = {
    devtool: {
        initialIsOpen: true,
    },
    queryClient: {
        defaultOptions: {
            queries: {
                // 🟡 此配置具有的表现往往令人出乎意料，若无特殊需求，请默认关闭
                refetchOnWindowFocus: false, // 关闭窗口聚焦重新获取（根据需求决定）
                staleTime: 5 * 60 * 1000, // 最重要的配置：将默认过期时间改为 5 分钟（单位：毫秒）
                gcTime: 10 * 60 * 1000,   // 缓存数据保留时间（v4 中叫 cacheTime），建议比 staleTime 长
                retry: 1, // 失败重试次数
            },
        },
    },
};

// ==================================================华丽的分割线==================================================

// 错误处理方案： 错误类型
enum ErrorShowType {
    SILENT = 0,
    WARN_MESSAGE = 1,
    ERROR_MESSAGE = 2,
    NOTIFICATION = 3,
    REDIRECT = 9,
}

// 与后端约定的响应数据格式
interface ResponseStructure {
    success: boolean;
    data: any;
    errorCode?: number;
    errorMessage?: string;
    showType?: ErrorShowType;
}

// 运行时配置
export const request: RequestConfig = {
    // 统一的请求设定
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},

    // 错误处理： umi@3 的错误处理方案。
    errorConfig: {
        // 错误抛出
        errorThrower: (res: ResponseStructure) => {
            const {success, data, errorCode, errorMessage, showType} = res;
            if (!success) {
                const error: any = new Error(errorMessage);
                error.name = 'BizError';
                error.info = {errorCode, errorMessage, showType, data};
                throw error; // 抛出自制的错误
            }
        },
        // 错误接收及处理
        errorHandler: (error: any, opts: any) => {
            if (opts?.skipErrorHandler) throw error;
            // 我们的 errorThrower 抛出的错误。
            if (error.name === 'BizError') {
                const errorInfo: ResponseStructure | undefined = error.info;
                if (errorInfo) {
                    const {errorMessage, errorCode} = errorInfo;
                    switch (errorInfo.showType) {
                        case ErrorShowType.SILENT:
                            // do nothing
                            break;
                        case ErrorShowType.WARN_MESSAGE:
                            message.warning(errorMessage);
                            break;
                        case ErrorShowType.ERROR_MESSAGE:
                            message.error(errorMessage);
                            break;
                        case ErrorShowType.NOTIFICATION:
                            notification.open({
                                description: errorMessage,
                                message: errorCode,
                            });
                            break;
                        case ErrorShowType.REDIRECT:
                            // TODO: redirect
                            break;
                        default:
                            message.error(errorMessage);
                    }
                }
            } else if (error.response) {
                // Axios 的错误
                // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
                message.error(`Response status:${error.response.status}`);
            } else if (error.request) {
                // 请求已经成功发起，但没有收到响应
                // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
                // 而在node.js中是 http.ClientRequest 的实例
                message.error('None response! Please retry.');
            } else {
                // 发送请求时出了点问题
                message.error('Request error, please retry.');
            }
        },

    },

    // 请求拦截器
    requestInterceptors: [
        (config: any) => {
            // 拦截请求配置，进行个性化处理。
            const url = config.url.concat('?token = 123');
            return {...config, url};
        }
    ],

    // 响应拦截器
    responseInterceptors: [
        (response) => {
            // 拦截响应数据，进行个性化处理
            // const {data}: any = response;
            // if (!data.success) {
            //     message.error(data.errorMessage || '请求失败！');
            // }
            return response;
        }
    ]
};
