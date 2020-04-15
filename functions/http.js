const httpFunctions = () => {
  const express = require('express')
  const app = express()
  const middleware = () => {
    const template = require('express-art-template')
    const bodyParser = require('body-parser')
    app.engine('html', template)
    app.set('views', './views')
    app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())
  }
  const staticResources = (staticObj = {}) => {
    const path = require('path')
    app.use('/node_modules/', express.static(path.join(__dirname + '/node_modules/')))
    for (let key in staticObj) {
      app.use([key], express.static(staticObj[key]))
    }
  }
  const router = (routerMiddleware) => {
    const router = express.Router()
    routerMiddleware(router)
    return router
  }
  const listenPort = (port) => {
    app // 监听端口
      .listen(port, function () {
        console.log(`running at port ${port}... `)
      })
  }
  return {
    express,
    app,
    middleware,
    staticResources,
    router,
    listenPort,
  }
}



const http = (options) => {
  const { express, app, middleware, staticResources, router, listenPort, } = httpFunctions()
  middleware()
  staticResources(options.staticObj)
  app.use(router(options.routes))
  listenPort(options.port)
}
module.exports = {
  http,
}
