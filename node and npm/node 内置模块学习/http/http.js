const http = () => {
  const http = require('http')
  const fs = require('fs')
  const url = require('url')
  const template = require('art-template')
  const comments = [
    {
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
    }
  ]
  require('http').createServer(function (req, res) {
    const parseObj = url.parse(req.url, true)
    const pathname = parseObj.pathname
    if (pathname === '/') {
      fs.readFile('./views/index.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        const htmlStr = template.render(data.toString(), {
          comments: comments
        })
        res.end(htmlStr)
      })
    } else if (pathname === '/post') {
      // 其它的都处理成 404 找不到
      fs.readFile('./views/post.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
    } else if (pathname.indexOf('/public/') === 0) {
      fs.readFile('.' + pathname, function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
    } else if (pathname === '/pinglun') {
      const comment = parseObj.query
      comment.dateTime = '2017-11-2 17:11:22'
      comments.unshift(comment)
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    } else {
      fs.readFile('./views/404.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
    }
  })
    .listen(3000, function () {
      console.log('running...')
    })
}

// // response 对象
// req.socket.remoteAddress
// req.socket.remotePort

// ## Content-Type
// 1. 结合 fs 发送文件中的数据
// 1. Content-Type
// 1. http://tool.oschina.net/commons
// 1. 不同的资源对应的 Content-Type 是不一样的
// 1. 图片不需要指定编码
// 1. 一般只为字符数据才指定编码
