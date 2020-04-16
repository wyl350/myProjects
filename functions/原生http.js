// 原生 http 模块的使用
function httpFuncs() {
  const http = require('http')
  const server = http.createServer()
  const fs = require('fs')

  function request1() {// 最简单 http 服务，没有任何响应
    server.on('request', function () {
      console.log('收到客户端的请求了')
    })
  }
  function request2() {// 有任何响应，但是没有路由
    server.on('request', function (request, response) {
      console.log('收到客户端的请求了，请求路径是：' + request.url)
      response.write('hello')
      response.write(' nodejs')
      response.end()
    })
  }
  function request3() {// 有路由的响应。
    server.on('request', function (req, res) {
      console.log('收到请求了，请求路径是：' + req.url)
      console.log('请求我的客户端的地址是：', req.socket.remoteAddress)
      console.log('请求我的客户端的端口号是：', req.socket.remotePort)


      const url = req.url

      if (url === '/') {
        res.end('index page')
      } else if (url === '/login') {
        res.end('login page')
      } else if (url === '/products') {
        const products = [{
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
        }]
        res.end(JSON.stringify(products))// 响应内容只能是二进制数据或者字符串,数字、对象、数组、布尔值是不能响应到界面的
      } else {
        res.end('404 Not Found.')
      }
    })
  }
  function request4() {// 关于 Content-Type
    server.on('request', function (req, res) {
      const url = req.url
      if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('hello 世界')
      } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        // 一般是肯定不能这么做的
        res.end('<p>hello html <a href="">点我</a></p>')
      }
    })
  }
  function request5() {// 读取文件渲染并加入正确的 Content-Type
    server.on('request', function (req, res) {
      const url = req.url
      if (url === '/') {
        fs.readFile('./resource/index.html', function (err, data) {
          if (err) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end('文件读取失败，请稍后重试！')
          } else {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(data)
          }
        })
      } else if (url === '/xiaoming') {
        fs.readFile('./resource/ab2.jpg', function (err, data) {
          if (err) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end('文件读取失败，请稍后重试！')
          } else {
            res.setHeader('Content-Type', 'image/jpeg')
            res.end(data)
          }
        })
      }
    })
  }
  function request6() {// node 中使用 art=template 模板引擎 需要同文件夹下的 template.html 文件配合。
    const template = require('art-template')
    server.on('request', function (req, res) {
      var url = req.url
      fs.readFile('./template-apache.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        var htmlStr = template.render(data.toString(), {
          title: '哈哈',
          files: files
        })
        res.end(htmlStr)
      })
    })
  }
  function listen(port) {
    server.listen(port, function () {
      console.log(`服务器启动成功了，可以通过 http://127.0.0.1:${port}/ 来进行访问`)
    })
  }

  return {
    http,
    server,
    request1,
    request2,
    request3,
    request4,
    request5,
    request6,
    // request7,
    // request8,
    // request9,
    // request10,
    listen,
  }
}



(function () {
  const {
    request1,
    request2,
    request3,
    request4,
    request5,
    request6,
    listen, } = httpFuncs()
  request6()
  listen(3000)
})()

