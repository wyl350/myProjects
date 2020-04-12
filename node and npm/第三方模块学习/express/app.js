// 数据
const comments = [{
  name: '张三',
  message: '今天天气不错！',
  dateTime: '2015-10-16'
},
{
  name: '张三2',
  message: '今天天气不错！',
  dateTime: '2015-10-16'
},
{
  name: '张三3',
  message: '今天天气不错！',
  dateTime: '2015-10-16'
},
{
  name: '张三4',
  message: '今天天气不错！',
  dateTime: '2015-10-16'
},
{
  name: '张三5',
  message: '今天天气不错！',
  dateTime: '2015-10-16'
}]

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
const mountRouter = (app) => {
  const express = require('express')
  const router = express.Router()

  app.get('/', function (req, res) {
    res.render('index.html', {
      comments: comments,
    })
  })

  app.get('/post', function (req, res) {
    res.render('post.html')
  })
  app.post('/post', function (req, res) {
    var comment = req.body
    comment.dateTime = '2017-11-5 10:58:51'
    comments.unshift(comment)
    res.redirect('/')
  })

  app.use(router)
}
const listenPort = (app, port) => {
  app // 监听端口
    .listen(port, function () {
      console.log(`running at port ${port}... `)
    })
}

const http1 = () => {
  const express = require('express')
  const app = express()
  middleware(app)
  staticResources(express, app)
  mountRouter(app)
  listenPort(app, 3000)
}


module.exports = {
  http1
}