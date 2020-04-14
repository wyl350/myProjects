const path = require('path')

const fileDb = require('../functions/fileDatabase')
// const fileDb = require('../functions/mongoDatabase')

// 属性设置
fileDb.setfilepath('./data/db.json')
fileDb.setpropertyName('students')

const router = (router) => {
  router.get('/', function (req, res) {
    res.redirect('/students')
  })
  router.get('/students', function (req, res) {
    fileDb.find().then((students) => {
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
    fileDb.save(req.body)
    res.redirect('/students')
  })
  router.get('/students/edit', function (req, res) {
    fileDb.findById(parseInt(req.query.id)).then((student) => {
      res.render('edit.html', {
        student: student
      })
    })
  })
  router.post('/students/edit', function (req, res) {
    fileDb.updateById(req.body)
    res.redirect('/students')
  })
  router.get('/students/delete', function (req, res) {
    fileDb.deleteById(req.query.id)
    res.redirect('/students')
  })
}



const { setStaticObj, http, } = require('../functions/http.js')

// 属性设置
setStaticObj({
  '/public/': path.join(__dirname + '/public/')
})

http(router)
