const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

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


class ExpressServer {
  constructor() {
    this.express = require('express')
    this.app = this.express()
    this.path = require('path')
    this.bodyParser = require('body-parser')
    this.mongoose = require('mongoose')
  }
    

}