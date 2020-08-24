const Student = require('../model/index')


var student = express.Router()
  .get('/', (req, res) => {
    res.redirect('/add')
  })
  .get('/add', (req, res) => {
    res.render('index')
  })


  // .get('/list', (req, res) => {
  //   Student.find().then(result => {
  //     res.render('list', {
  //       students: result,
  //     })
  //   })
  // })

  .post('/add', (req, res) => {
    Student.create(req.body).then(result => {
      res.send('/list')
    })
  })
app.use(student)

