# express 
1. 安装
    > 安装 express 和 几个重要的中间件
    ```bash
    $ cnpm install express --save
    $ cnpm install body-parser --save
    $ cnpm install cookie-parser --save
    $ cnpm install multer --save
    ```
    - body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL - 编码的数据。  
    - cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以- 取到传过来的cookie，并把它们转成对象。  
    - multer - node.js 中间件，用于处理 enctype="multipart/- form-data"（设置表单的MIME编码）的表单数据。  
1. 查看下 express 使用的版本号
    ```bash
    $ cnpm list express
    /data/www/node
    └── express@4.15.2  -> /Users/tianqixin/www/node/node_modules/.4.15.2@express
    ```
1. 第一个 Express 框架实例
    > 接下来我们使用 Express 框架来输出 "Hello World"。以下实例中我们引入了 express 模块，并在客户端发起请求后，响应 "Hello World" 字符串。创建 express_demo.js 文件，代码如下所示：
    ```js
    //express_demo.js 文件
    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
    res.send('Hello World');
    })

    var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

    })
    ```






// Express 对于没有设定的请求路径，默认会返回 Cat not get xxx
// 如果你想要定制这个 404
// 需要通过中间件来配置
// 咱们讲中间件的时候说一下如何处理

// 只需要在自己的路由之后增加一个
app.use(function (req, res) {
  // 所有未处理的请求路径都会跑到这里
  // 404
})