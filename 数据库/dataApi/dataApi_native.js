const fs = require('fs')
const url = require('url')

require('http').createServer()
  .on('request', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    // 以上这些头能否实现跨域共享？？？
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    const parseObj = url.parse(req.url, true)
    const pathname = parseObj.pathname
    if (pathname === '/') {
      res.end('数据Api主页!')
    }
    else if (pathname.indexOf('/data/') === 0) {
      // 原样输出
      fs.readFile('.' + pathname + '.json', function (err, data) {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
      // 精简输出
      // res.end(JSON.stringify(require(`.${pathname}.json`)))
    }
  })
  .listen(3000, function () {
    console.log('服务器启动成功，可以访问了。。。端口号是：3000')
  })

  // 剩余工作：
  // 1. 主页制作一个数据的快捷方式。
  // 1. 使用原生的api就可以的。