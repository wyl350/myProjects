const path = require('path')

const Student = require('../functions/mongoDatabase')

const router = (router) => {
  router.get('/', function (req, res) {
    res.redirect('/students')
  })
  router.get('/students', function (req, res) {
    Student.find().then((students) => {
      res.render('index.html', {
        students: students
      })
    }, (err) => {
      return res.status(500).send('Server error.')
    })
  })
  router.get('/students/new', function (req, res) {
    res.render('new.html')
  })
  router.post('/students/new', function (req, res) {
    new Student(req.body).save().then(() => {
      res.redirect('/students')
    }, (err) => {
      return res.status(500).send('Server error.')
    })
  })
  router.get('/students/edit', function (req, res) {
    Student.findById(req.query.id.replace(/"/g, '')).then((student) => {
      res.render('edit.html', {
        student: student
      })
    }, (err) => {
      return res.status(500).send('Server error.')
    })
  })


  router.post('/students/edit', function (req, res) {
    var id = req.body.id.replace(/"/g, '')
    Student.findByIdAndUpdate(id, req.body).then(() => {
      res.redirect('/students')
      // console.log();
    }, (err) => {
      return res.status(500).send('Server error.')
    })
  })
  router.get('/students/delete', function (req, res) {
    var id = req.query.id.replace(/"/g, '')
    Student.findByIdAndRemove(id).then(() => {
      res.redirect('/students')
    }, (err) => {
      return res.status(500).send('Server error.')
    })
  })
}



const { setStaticObj, http, } = require('../functions/http.js')

setStaticObj({
  '/public/': path.join(__dirname + '/public/')
})

http(router)

// 今天2020年4月15日完成了 promise的方式，但是需要在家里安装了mongodb数据库的电脑上才能试验出来。
