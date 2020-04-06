const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('服务启动成功！ http://localhost:3000');
});


1. const express = require('express');
1. const app = express();
1. app.get('/', function (req, res) { });

1. Request
1. req.query：获取URL的查询参数串
1. req.body: 获取请求主体（post数据，需要设置中间件函数 json与urlencode）
1. req.cookies：获取Cookies(需要使用 cookie - parser 中间件)
1. req.hostname / req.ip：获取主机名和IP地址
1. req.params：获取路由的parameters
1. req.path：获取请求路径
1. req.protocol：获取协议类型
1. req.get() ：获取指定的HTTP请求头
Response
res.set() ：设置HTTP头，传入object可以一次设置多个头
res.status() ：设置HTTP状态码
res.send() ：传送HTTP响应
res.redirect() ：设置响应的Location HTTP头，并且设置状态码302
res.json() ：传送JSON响应
res.cookie(name，value[，option]) ：设置Cookie
res.clearCookie() ：清除Cookie
res.download() ：传送指定路径的文件
res.sendFile(path[，options][，fn]) ：传送指定路径的文件 - 会自动根据文件extension设定Content - Type
res.render(view[, locals][, callback]) 渲染一个view

1. express.static()  静态资源托管
1. Express 脚手架工具
  // 全局安装
  - npm install express - generator - g
    // 生成项目，ejs为模板引擎
    - express--view = ejs myapp


重要中间件
body - parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
cookie - parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
multer - node.js 中间件，用于处理 enctype = "multipart/form-data"（设置表单的MIME编码）的表单数据。

{
  var express = require('express');
  var app = express();
  app.get('/', function (request, response) {
    res.send('Hello World');
    //request.body 请求主体
    // requset.cookie 请求的cookie
    // request.hostname 获取主机名
    // request.id 获取IP地址
    //request.path 获取路径
    // request.originalUrl 获取原始请求URL
    // request.protocal 获取协议类型
    // request.query 获取URL的查询参数串
    // request.route 获取当前匹配的路由
    // ------------------------------------------------
    res.status(200);  // 设置响应状态吗
    res.set({
      'Content-Type': 'text/html',
      'Content-Length': response.length
    });
    // sendFile
    res.sendfile('logo.jpg', {
      maxAge: 1, // 24*60*60*1000
      root: './public/images/'
    }, function (err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Success");
      }
    });
    //res.download()方法把文件作为HTTP响应的附件发送
    res.download(path, [filename], [callback])
    res.redirect('http://example.com');

  })

  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  })
}


express.static 中间件来设置静态文件路径
app.use(express.static('public'));



