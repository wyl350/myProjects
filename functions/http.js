const express = require('express')
const app = express()

let staticObj
const setStaticObj = (value) => { staticObj = value }

const middleware = () => {
  const template = require('express-art-template')
  const bodyParser = require('body-parser')
  app.engine('html', template)
  app.set('views', './views')
  app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())
}
const staticResources = () => {
  const path = require('path')
  app.use('/node_modules/', express.static(path.join(__dirname + '/node_modules/')))
  for (let key in staticObj) {
    app.use('/public/', express.static(staticObj[key]))
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
const http = (routerMiddleware) => {
  middleware(app)
  staticResources()
  app.use(router(routerMiddleware))
  listenPort(3000)
}

module.exports = {
  setStaticObj,
  http,
}
