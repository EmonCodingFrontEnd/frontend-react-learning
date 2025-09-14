import {defineConfig} from "umi";
import routes from "./routes";

export default defineConfig({
    routes,
    npmClient: 'pnpm',
    plugins: [
        '@umijs/plugins/dist/request', // 请求插件
        '@umijs/plugins/dist/antd', // antd插件
        '@umijs/plugins/dist/access', // access 插件
        '@umijs/plugins/dist/initial-state', // 全局初始状态管理插件
        '@umijs/plugins/dist/model', // 数据流插件
        '@umijs/plugins/dist/dva', // dva 插件
        '@umijs/plugins/dist/react-query', // react-query 插件
        '@umijs/plugins/dist/styled-components', // styled-components 插件
        '@umijs/plugins/dist/locale', // 多语言插件
    ], // 启用 request 插件
    request: {dataField: 'data'},
    antd: {},
    // mock: false,
    access: {},
    // access 插件依赖 initial State 所以需要同时开启
    initialState: {
        // loading: '@/components/Loading', // 可选：添加加载组件
    }, // 这是启用 initialState 插件的关键配置
    model: {
        extraModels: [],
        sort: (a, b) => a.namespace.localeCompare(b.namespace),
    },
    // 添加以下配置
    // jsMinifier: 'esbuild',
    // cssMinifier: 'cssnano',
    // proxy: {
    //     '/api': {
    //         'target': 'http://localhost:5000',
    //         'changeOrigin': true,
    //         'pathRewrite': {'^/api': ''},
    //     },
    // },
    // history: {type: 'hash'}, // 启用 hash 模式，默认是 browser
    dva: {}, // 启用 dva
    reactQuery: {
        devtool: false,
        queryClient: false,
    }, // 启用 react-query
    styledComponents: {}, // 启用 styled-components
    locale: { // 启用多语言
        // 默认使用 src/locales/zh-CN.ts 作为多语言文件
        default: 'zh-CN',
        baseSeparator: '-',
    },
});
