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
    Student.findByIdAndUpdate(id, req.body, function (err) {
      if (err) {
        return res.status(500).send('Server error.')
      }
      res.redirect('/students')
    })
  })
  router.get('/students/delete', function (req, res) {
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

setStaticObj({
  '/public/': path.join(__dirname + '/public/')
})

http(router)


// 全部转变为Promise方法，这个任务还没有完成。


// Student.find()
// new Student(req.body).save()
// Student.findById(req.query.id)
// Student.findByIdAndUpdate(id, req.body)
// Student.findByIdAndRemove(id)