const app = (port) => {
  const
    // 引入依赖包
    express = require('express'),
    bodyParser = require('body-parser'),
    // 引入依赖模块
    router = require('./router'),
    app = express()

  app
    // 开放静态资源
    .use('/node_modules/', express.static('./node_modules/'))
    .use('/public/', express.static('./public/'))

    // 配置 express-art-template
    .engine('html', require('express-art-template'))

    // 配置 bodyParser
    .use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())

    // 挂载路由模块
    .use(router)

    // 监听端口,启动服务。
    .listen(port, function () {
      console.log(`running at port ${port}...`)
    })
}

app(3000)

app(3001)
