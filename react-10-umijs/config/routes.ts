export default [
    {path: "/", component: "index"},
    {path: "/docs", component: "docs"},
    {path: "/counter/:channel", component: "Counter"},
    {path: "/dvaCounter", component: "dvaCounter"},
    {
        path: '/nesting', component: "nesting",
        routes: [
            {path: 'about', component: "About"},
            {
                path: 'home', component: "Home",
                routes: [
                    {path: 'news', component: "Home/News"},
                    {
                        path: 'message', component: "Home/Message",
                        routes: [
                            // 声明接收params参数
                            {path: 'detail/:id/:title', component: "Home/Message/Detail"}
                        ]
                    },
                    {path: '', redirect: "news"}
                ]
            },
            {path: '', redirect: "about"}
        ]
    },
    {path: "/globalState", component: "globalState"},
]