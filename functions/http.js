const middleware = (app) => {
  const template = require('express-art-template')
  const bodyParser = require('body-parser')
  app.engine('html', template)
  app.set('views', './views')
  app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())
}
const staticResources = (express, app) => {
  app.use('/node_modules/', express.static('./node_modules/'))
  app.use('/public/', express.static('./public/'))
}
const router = (express, routerMiddleware) => {
  const router = express.Router()
  routerMiddleware(router)
  return router
}

const listenPort = (app, port) => {
  app // 监听端口
    .listen(port, function () {
      console.log(`running at port ${port}... `)
    })
}


const http = (routerMiddleware) => {
  const express = require('express')
  const app = express()
  middleware(app)
  staticResources(express, app)
  app.use(router(express, routerMiddleware))
  listenPort(app, 3000)
}

module.exports = {
  http
}