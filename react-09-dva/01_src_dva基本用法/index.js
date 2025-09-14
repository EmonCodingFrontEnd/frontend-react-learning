import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  // history: require('history').createHashHistory() // 默认是Hash
  history: require('history').createBrowserHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// 使用 require.context 批量获取 models 目录下的所有 .js 文件
const context = require.context('./models', false, /\.js$/);
// context.keys() 返回一个数组，包含所有匹配到的文件路径，如 [‘./users.js’, ‘./products.js’]
context.keys().forEach(key => {
  // 对于每个文件，导入其默认导出（即 model 对象），并注册
  app.model(context(key).default);
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
