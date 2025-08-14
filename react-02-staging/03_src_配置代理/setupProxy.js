const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api1', { // 映射key，请求/api1的映射到此配置
            target: 'http://localhost:5000', // 请求转发的目标地址
            changeOrigin: true, // 默认不修改请求头的Host，保持源Host(这里是 localhost:3000)；若为true，则修改为 localhost:5000
            pathRewrite: {'^/api1': ''} // 重写请求路径（如移除前缀 /api1）
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    )
};