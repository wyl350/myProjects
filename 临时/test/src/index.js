const express = require('express')
const app = express()
const path = require('path')
// npm install express body-parser art-template express-art-template

exports.app = app
exports.express = express
exports.path = path

// 配置中间件
require('./middlewares/index')

// 路由
require('./routes/index')

// 错误处理
require('./errhandle/index')

// 端口
app.listen(3000, function () {
  console.log('网站服务器启动成功')
})
