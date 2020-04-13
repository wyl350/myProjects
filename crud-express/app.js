const path = require('path')

// const fileDb = require('../functions/fileDatabase')
const Student = require('../functions/mongoDatabase')

// 属性设置
// fileDb.setfilepath('./data/db.json')
// fileDb.setpropertyName('students')

const router = (router) => {
  router.get('/students', function (req, res) {
    Student.find(function (err, students) {
      if (err) {
        return res.status(500).send('Server error.')
      }
      res.render('index.html', {
        fruits: [
          '苹果',
          '香蕉',
          '橘子'
        ],
        students: students
      })
    })
  })
  router.get('/students/new', function (req, res) {
    res.render('new.html')
  })
  router.post('/students/new', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //    将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    new Student(req.body).save(function (err) {
      if (err) {
        return res.status(500).send('Server error.')
      }
      res.redirect('/students')
    })
  })
  router.get('/students/edit', function (req, res) {
    // 1. 在客户端的列表页中处理链接问题（需要有 id 参数）
    // 2. 获取要编辑的学生 id
    // 
    // 3. 渲染编辑页面
    //    根据 id 把学生信息查出来
    //    使用模板引擎渲染页面

    // replace
    //    字符串模式
    //      简单，但是不支持全局和忽略大小写问题
    //    正则表达式模式
    //      强大，支持全局和忽略大小写
    Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
      if (err) {
        console.log(err)
        return res.status(500).send('Server error.')
      }
      res.render('edit.html', {
        student: student
      })
    })
  })
  router.post('/students/edit', function (req, res) {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    Student.updateById()
    // 3. 发送响应
    var id = req.body.id.replace(/"/g, '')
    Student.findByIdAndUpdate(id, req.body, function (err) {
      if (err) {
        return res.status(500).send('Server error.')
      }
      res.redirect('/students')
    })
  })
  router.get('/students/delete', function (req, res) {
    // 1. 获取要删除的 id
    // 2. 根据 id 执行删除操作
    // 3. 根据操作结果发送响应数据

    var id = req.query.id.replace(/"/g, '')
    Student.findByIdAndRemove(id, function (err) {
      if (err) {
        return res.status(500).send('Server error.')
      }
      res.redirect('/students')
    })
  })
}



const { setStaticObj, http, } = require('../functions/http.js')

// 属性设置
setStaticObj({
  '/public/': path.join(__dirname + '/public/')
})

http(router)
