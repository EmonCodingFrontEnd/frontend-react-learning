module.exports = () => {
    return {
        posts: [
            {id: 1, title: "JSON Server 教程", author: "张三", views: 100},
            {id: 2, title: "Node.js 入门", author: "李四", views: 200},
            {id: 3, title: "JavaScript 高级编程", author: "王五", views: 300}
        ],
        comments: [
            {id: 1, body: "很有用！", postId: 1},
            {id: 2, body: "讲得很好", postId: 2},
            {id: 3, body: "学习了", postId: 3}
        ],
        users: [
            {id: 1, name: "张三", email: "zhangsan@example.com"},
            {id: 2, name: "李四", email: "lisi@example.com"}
        ]
    }
}