//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/student', function (req, res) {
  res.send('Hello Worfefe ld')

  // console.log(req.app)
  // ：当callback为外部文件时，用req.app访问express的实例
  console.log(`9${req.baseUrl}9`)
  // // ：获取路由当前安装的URL路径
  // //  / req.cookies：/ Cookies
  // console.log(req.fresh)
  // //  / req.stale：判断请求是否还「新鲜」

  console.log(req.protocol)
  // // ：获取协议类型
  console.log(req.hostname)
  console.log(req.ip)
  // //  / req.ip：获取主机名和IP地址
  console.log(req.originalUrl)
  // // ：获取原始请求URL
  console.log(req.path)
  // // ：获取请求路径

  console.log(req.query)
  // ：获取URL的查询参数串
  console.log(req.params)
  // // ：获取路由的parameters  get 请求
  console.log(req.body)
  // 获得「请求主体」   post  请求
  console.log(req.route)
  // ：获取当前匹配的路由


  console.log(req.subdomains)
  // ：获取子域名
  console.log(req.accepts())
  //  ：检查可接受的请求的文档类型
  // console.log(req.acceptsCharsets)
  // console.log(req.acceptsEncodings)
  // console.log(req.acceptsLanguages)
  // ：返回指定字符集的第一个可接受字符编码
  // console.log(req.get())
  // //  ：获取指定的HTTP请求头
  // console.log(req.is())
  // //  ：判断请求头Content - Type的MIME类型

})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  // console.log(`9${host}9`)
  // console.log(port)

})
