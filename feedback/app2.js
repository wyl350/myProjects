const express = require('express')
const bodyParser = require('body-parser')
const getData = require('./public/data/index.js')

const app = express()

app
  // 修改默认的 views 目录
  .engine('html', require('express-art-template')).set('views', './views')

  // bodyParser 设置
  .use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())

  // 开放静态资源
  .use('/public/', express.static('./public/'))

app.get('/', function (req, res) {
  getData.getobjs('./data/fileData/db.json', 'comments').then((comments) => {
    res.render('index.html', {
      comments: comments
    })
  }).catch((err) => {
    res.render(err)
  })
})

app.get('/post', function (req, res) {
  res.render('post.html')
})

app.post('/post', function (req, res) {
  const comment = req.body
  comment.dateTime = '2017-11-5 10:58:51'

  getData.save('./data/fileData/db.json', 'comments', comment)
    .then((data) => {
      console.log(data);
      // res.redirect('/')
    }).catch((err) => {
      console.log(err);
    })
  res.redirect('/')
})

app.listen(3000, function () {
  console.log('running...')
})
