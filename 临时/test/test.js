const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// npm install express body-parser art-template express-art-template

const app = express()
exports.app = app
// bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ extended: false }))

// // 路由
const { home, admin } = require('./routes/index')
app.use('/home', home)
app.use('/admin', admin)
// require('./run_routers')

// 静态资源
app.use('/public', express.static(path.join(__dirname, 'public')))

// 模板引擎
app.engine('html', require('express-art-template'))
// 2.告诉express框架模板存放的位置是什么
app.set('views', path.join(__dirname, 'views'))
// 3.告诉express框架模板的默认后缀是什么
app.set('view engine', 'html')

// 端口
app.listen(3000, function () {
  console.log('网站服务器启动成功')
})

// 接收所有请求的中间件。// 可以用来拦截是否往下走下去。
// app.use((req, res, next) => {
//   console.log('请求走了app.use中间件')
//   next()
// })


// 设置错误页面，兜底所有剩下的没有设置的路由的任意地址
// app.use((req, res, next) => {
//   // 为客户端响应404状态码以及提示信息
//   res.status(404).send('当前访问的页面是不存在的')
// })

// 错误处理中间 一个参数都不能省略
// app.use((err, req, res, next) => {
//   res.status(500).send(err.message)
// })

