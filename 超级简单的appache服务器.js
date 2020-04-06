/**
* 本服务器的特点：
* 优点：简洁
* 缺点：
* 1、url地址不能使用中文
* 2、无法呈现给界面文件夹和文件名的信息
*
*/

const fs = require('fs')

require('http').createServer()
  .on('request', function (req, res) {
    const wwwDir = 'D://学习目录2'
    const url = req.url
    let filePath
    if (url === '/') { filePath = '/index.html' } else { filePath = url }
    fs.readFile(wwwDir + filePath, function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  })
  .listen(3000, function () {
    console.log('running...')
  })

