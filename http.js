const fs = require('fs')

require('http').createServer()
  .on('request', function (req, res) {
    console.log('收到请求了，请求路径是：' + req.url)
    console.log('请求我的客户端的地址是：', req.socket.remoteAddress, req.socket.remotePort)
    const url = req.url
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (url === '/') {
      res.write('index page')
      res.end('hello 世界')
    }
    else if (url === '/login') {
      res.end('login page 世界')
    }
    else if (url === '/products') {
      var products = [{
        name: '苹果 X',
        price: 8888
      },
      {
        name: '菠萝 X',
        price: 5000
      },
      {
        name: '小辣椒 X',
        price: 1999
      }
      ]
      res.end(JSON.stringify(products))
    }
    else if (url === '/html') {
      // 如果你发送的是 html 格式的字符串，则也要告诉浏览器我给你发送是 text/html 格式的内容
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end('<p>hello html <a href="">点我</a></p>')
    }
    else if (url === '/html2') {
      fs.readFile('./resource/index.html', function (err, data) {
        if (err) {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('文件读取失败，请稍后重试！')
        } else {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(data)
        }
      })
    }
    else if (url === '/bootstrap') {
      fs.readFile('./main.html', function (err, data) {
        if (err) {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('文件读取失败，请稍后重试！')
        } else {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(data)
        }
      })
    }
    else if (url === '/xiaoming') {
      fs.readFile('./resource/ab2.jpg', function (err, data) {
        if (err) {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('文件读取失败，请稍后重试！')
        } else {
          res.setHeader('Content-Type', 'image/jpeg')  // 对于图片 也可以不用设置。注意一定不能设置编码。
          res.end(data)
        }
      })
    }
    else {
      res.end('404 Not Found.')
    }
  })
  .listen(3000, function () {
    console.log('服务器启动成功，可以访问了。。。')
  })
