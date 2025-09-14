import {defineConfig} from '@umijs/max';

export default defineConfig({
    antd: {
        dark: true,
    },
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: '@umijs/max',
    },
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: '首页',
            path: '/home',
            component: './Home',
            icon: 'SearchOutlined',
        },
        {
            name: '权限演示',
            path: '/access',
            component: './Access',
            // target: '_blank',
            // hideInMenu: true,
        },
        {
            name: ' CRUD 示例',
            path: '/table',
            component: './Table',
        },
    ],
    npmClient: 'pnpm',
});

