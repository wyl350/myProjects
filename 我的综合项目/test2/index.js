// 布置全局变量
global.express = require('express')
global.app = express()
global.path = require('path')
global.bodyParser = require('body-parser')
global.mongoose = require('mongoose')
// 端口
app.listen(3001, function () {
  console.log('网站服务器启动成功')
})

// 配置数据接口
require('./model/index')
// 配置中间件
require('./middlewares/index')
// 路由
require('./routes/index')
// 错误处理
require('./errhandle/index')

