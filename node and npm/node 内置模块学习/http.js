{ // 一个简单的 http_server 

  var http = require('http')
  var fs = require('fs')

  var server = http.createServer()
  let products = [
    {
      name: '橘子',
      price: '20'
    },
    {
      name: '香蕉',
      price: '20'
    }
  ]
  server.on('request', function (req, res) {
    var url = req.url

    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (url === '/') {
      fs.readFile('./resource/index.html', 'utf8', function (err, data) {
        if (err) {
          res.end('文件读取失败，请稍后重试！')
        } else {
          res.end(data)
        }
      })
    } else if (url === '/goods') {
      res.end(JSON.stringify(products))
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

  server.listen(3000, function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问')
    console.log('Server is running...')
  })
}
{  // 模仿apache，但是没有钱端的展示 
  var http = require('http')
  var fs = require('fs')

  var server = http.createServer()

  var wwwDir = 'D:/Movie/www'

  server.on('request', function (req, res) {
    var url = req.url
    // / index.html
    // /a.txt wwwDir + /a.txt
    // /apple/login.html wwwDir + /apple/login.html
    // /img/ab1.jpg wwwDir + /img/ab1.jpg


    var filePath = '/index.html'
    if (url !== '/') {
      filePath = url
    }

    fs.readFile(wwwDir + filePath, function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  })

  // 3. 绑定端口号，启动服务
  server.listen(3000, function () {
    console.log('running...')
  })

}

{ // node中使用模板引擎
  // art-template
  // art-template 不仅可以在浏览器使用，也可以在 node 中使用

  // 安装：
  //    npm install art-template
  //    该命令在哪执行就会把包下载到哪里。默认会下载到 node_modules 目录中
  //    node_modules 不要改，也不支持改。

  // 在 Node 中使用 art-template 模板引擎
  // 模板引起最早就是诞生于服务器领域，后来才发展到了前端。
  // 
  // 1. 安装 npm install art-template
  // 2. 在需要使用的文件模块中加载 art-template
  //    只需要使用 require 方法加载就可以了：require('art-template')
  //    参数中的 art-template 就是你下载的包的名字
  //    也就是说你 isntall 的名字是什么，则你 require 中的就是什么
  // 3. 查文档，使用模板引擎的 API


  var template = require('art-template')
  var fs = require('fs')

  // 这里不是浏览器
  // template('script 标签 id', {对象})

  // var tplStr = `
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <title>Document</title>
  // </head>
  // <body>
  //   <p>大家好，我叫：{{ name }}</p>
  //   <p>我今年 {{ age }} 岁了</p>
  //   <h1>我来自 {{ province }}</h1>
  //   <p>我喜欢：{{each hobbies}} {{ $value }} {{/each}}</p>
  // </body>
  // </html>
  // `

  fs.readFile('./tpl.html', function (err, data) {
    if (err) {
      return console.log('读取文件失败了')
    }
    // 默认读取到的 data 是二进制数据
    // 而模板引擎的 render 方法需要接收的是字符串
    // 所以我们在这里需要把 data 二进制数据转为 字符串 才可以给模板引擎使用
    var ret = template.render(data.toString(), {
      name: 'Jack',
      age: 18,
      province: '北京市',
      hobbies: [
        '写代码',
        '唱歌',
        '打游戏'
      ],
      title: '个人信息'
    })

    console.log(ret)
  })
}
{ // 简单的开放静态资源的方法

  // app application 应用程序
  // 把当前模块所有的依赖项都声明再文件模块最上面
  // 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
  // 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
  // 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
  // / index.html
  // /public 整个 public 目录中的资源都允许被访问
  // 前后端融会贯通了，为所欲为

  var http = require('http')
  var fs = require('fs')
  var url = require('url')
  var template = require('art-template')

  var comments = [
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

  // /pinglun?name=的撒的撒&message=的撒的撒的撒
  // 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
  // 所以你不可能通过去判断完整的 url 路径来处理这个请求
  // 
  // 结论：对于我们来讲，其实只需要判定，如果你的请求路径是 /pinglun 的时候，那我就认为你提交表单的请求过来了

  http
    .createServer(function (req, res) { // 简写方式，该函数会直接被注册为 server 的 request 请求事件处理函数
      // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
      var parseObj = url.parse(req.url, true)

      // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
      var pathname = parseObj.pathname

      if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
          if (err) {
            return res.end('404 Not Found.')
          }
          var htmlStr = template.render(data.toString(), {
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
        // /public/css/main.css
        // /public/js/main.js
        // /public/lib/jquery.js
        // 统一处理：
        //    如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
        //    所以我们就直接可以把请求路径当作文件路径来直接进行读取
        fs.readFile('.' + pathname, function (err, data) {
          if (err) {
            return res.end('404 Not Found.')
          }
          res.end(data)
        })
      } else if (pathname === '/pinglun') {
        // 注意：这个时候无论 /pinglun?xxx 之后是什么，我都不用担心了，因为我的 pathname 是不包含 ? 之后的那个路径
        // 一次请求对应一次响应，响应结束这次请求也就结束了
        // res.end(JSON.stringify(parseObj.query))

        // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
        // 所以接下来要做的就是：
        //    1. 获取表单提交的数据 parseObj.query
        //    2. 将当前时间日期添加到数据对象中，然后存储到数组中
        //    3. 让用户重定向跳转到首页 /
        //       当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了
        var comment = parseObj.query
        comment.dateTime = '2017-11-2 17:11:22'
        comments.unshift(comment)
        // 服务端这个时候已经把数据存储好了，接下来就是让用户重新请求 / 首页，就可以看到最新的留言内容了

        // 如何通过服务器让客户端重定向？
        //    1. 状态码设置为 302 临时重定向
        //        statusCode
        //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
        //        setHeader
        // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
        // 所以你就能看到客户端自动跳转了
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
      } else {
        // 其它的都处理成 404 找不到
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

  // Node 不适合从来没有接触过服务端的人学习
  // 如果想要真正的学号服务端，还是老牌的 Java、PHP 这些平台
  // Node 不是特别适合入门服务端，但不代表 Node 不强大
  // Node 很厉害，具有经验的人可以玩儿的非常的牛
  // 不适合新手的原因就在于比较偏底层、而且太灵活
  // Java、PHP 好入门的原因就在于：这些平台屏蔽了一些底层
  // res.redirect('重定向')


  // 晚上写案例照着下面的步骤写：
  // 1. / index.html
  // 2. 开放 public 目录中的静态资源
  //    当请求 /public/xxx 的时候，读取响应 public 目录中的具体资源
  // 3. /post post.html
  // 4. /pinglun
  //    4.1 接收表单提交数据
  //    4.2 存储表单提交的数据
  //    4.3 让表单重定向到 /
  //        statusCode
  //        setHeader

  // 明天：
  // 模块系统
  // Express（第三方 Web 开发框架）
  //    这两做的事儿，在框架里面就是一个 API 的事儿
  //    使用框架的目的就是让我们更加专注于业务，而不是底层细节

}

{ // html中使用模板引擎
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <title>06-在浏览器中使用art-template</title>
  // </head>
  // <body>
  //   <!-- 
  //     注意：在浏览器中需要引用 lib/template-web.js 文件

  //     强调：模板引擎不关心你的字符串内容，只关心自己能认识的模板标记语法，例如 {{}}
  //     {{}} 语法被称之为 mustache 语法，八字胡啊。
  //    -->
  //   <script src="node_modules/art-template/lib/template-web.js"></script>
  //   <script type="text/template" id="tpl">
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <title>Document</title>
  //     </head>
  //     <body>
  //       <p>大家好，我叫：{{ name }}</p>
  //       <p>我今年 {{ age }} 岁了</p>
  //       <h1>我来自 {{ province }}</h1>
  //       <p>我喜欢：{{each hobbies}} {{ $value }} {{/each}}</p>
  //     </body>
  //     </html>
  //   </script>
  //   <script>
  //     var ret = template('tpl', {
  //       name: 'Jack',
  //       age: 18,
  //       province: '北京市',
  //       hobbies: [
  //         '写代码',
  //         '唱歌',
  //         '打游戏'
  //       ]
  //     })

  //     console.log(ret)
  //   </script>
  // </body>
  // </html>
}


// 看一下实例 1

{ // express 简单服务
  // var express = require('express')

  // // 1. 创建 app
  // var app = express()

  // // 当以 /public/ 开头的时候，去 ./public/ 目录中找找对应的资源
  // // 这种方式更容易辨识，推荐这种方式
  // // app.use('/public/', express.static('./public/'))

  // // 必须是 /a/puiblic目录中的资源具体路径
  // // app.use('/abc/d/', express.static('./public/'))

  // // 当省略第一个参数的时候，则可以通过 省略 /public 的方式来访问
  // // 这种方式的好处就是可以省略 /public/
  // app.use(express.static('./public/'))


  // app.get('/', function (req, res) {
  //   res.send('hello world')
  // })

  // app.listen(3000, function () {
  //   console.log('express app is running ...')
  // })

}

1. res.setHeader("Content-type", "text/html;charset=UTF8");
1. res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' });
    > 以上方法更倾向于使用writeHead，因为可以设置状态码，还能设置多个响应头信息。

var fs = require('fs')

fs.readdir('D:/Movie/www', function (err, files) {
  if (err) {
    return console.log('目录不存在')
  }
  console.log(files)
})

