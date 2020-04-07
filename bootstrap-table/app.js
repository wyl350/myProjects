const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app
  // 修改默认的 views 目录
  .engine('html', require('express-art-template')).set('views', './views')

  // bodyParser 设置
  .use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())

  // 开放静态资源
  .use('/public/', express.static('./public/'))

app.get('/bootstrap-table', function (req, res) {
  res.render('./index.html')
})

app.listen(3000, function () {
  console.log('running...')
})
