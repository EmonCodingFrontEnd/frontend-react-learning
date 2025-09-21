import {defineConfig} from '@umijs/max';

export default defineConfig({
    antd: {
        dark: false,
    },
    access: {},
    model: {},
    initialState: {},
    request: {dataField: ''},
    layout: {
        title: '@umijs/max',
    },
    reactQuery: {},
    styledComponents: {},
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
        {
            name: 'React Query',
            path: '/reactQuery',
            routes: [
                {
                    name: '不使用ReactQuery',
                    path: '/reactQuery/normal',
                    component: './ReactQuery/normal',
                },
                {
                    name: 'ReactQuery查询',
                    path: '/reactQuery/query',
                    component: './ReactQuery/query',
                },
                {
                    name: 'ReactQuery增加',
                    path: '/reactQuery/create',
                    component: './ReactQuery/create',
                },
                {
                    name: 'ReactQuery删除',
                    path: '/reactQuery/delete',
                    component: './ReactQuery/delete',
                },
            ]
        },
    ],
    npmClient: 'pnpm',
});

