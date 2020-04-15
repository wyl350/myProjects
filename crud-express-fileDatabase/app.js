const path = require('path')
const fileDbF = require('../functions/fileDatabase')

const fileDb = fileDbF(
  {
    filepath: '../crud-express-fileDatabase/data/db.json',
    propertyName: 'students',
  }
)

const routes = (router) => {
  router.get('/', function (req, res) {
    res.redirect('/students')
  })
  router.get('/students', function (req, res) {
    fileDb.find().then((students) => {
      res.render('index.html', {
        students: students
      })
    })
  })
  router.get('/students/new', function (req, res) {
    res.render('new.html')
  })
  router.post('/students/new', function (req, res) {
    fileDb.save(req.body)
    res.redirect('/students')
  })
  router.get('/students/edit', function (req, res) {
    req.query.id

    fileDb.findById(parseInt(req.query.id)).then((student) => {
      res.render('edit.html', {
        student: student
      })
    })
  })
  router.post('/students/edit', function (req, res) {
    fileDb.findByIdAndUpdate(req.body)
    res.redirect('/students')
  })
  router.get('/students/delete', function (req, res) {
    fileDb.findByIdAndRemove(req.query.id)
    res.redirect('/students')
  })
}



const { http, } = require('../functions/http.js')

http({
  routes,
  port: 3000,
  staticObj: {
    '/public/': path.join(__dirname + '/public/')
  }
})

