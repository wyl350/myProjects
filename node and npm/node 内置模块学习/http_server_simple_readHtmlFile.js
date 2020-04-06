var http = require('http')
var fs = require('fs')

var server = http.createServer()
var __dirname = 'D:/Movie/www'

server.on('request', function (req, res) {
  var url = req.url
  if (url === '/') {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      if (err) {
        // return 有两个作用：
        //  1. 方法返回值
        //  2. 阻止代码继续往后执行
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  } else if (url === '/a.txt') {
    fs.readFile(__dirname + '/a.txt', function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  } else if (url === '/index.html') {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  } else if (url === '/apple/login.html') {
    fs.readFile(__dirname + '/apple/login.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  }
})

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
  console.log('running...')
})
