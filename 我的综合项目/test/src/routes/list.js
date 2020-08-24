const User =  require('../model/index')

var list = express.Router()
  .get('/', (req, res) => {
    res.redirect('/list')
  })
  .get('/list', (req, res) => {
    User.find().then(result => {
      res.render('list', {
        users: result,
        title: 'list 页面',
      })
    })
  })


  .get('/add', (req, res) => {
    res.render('add', {
      title: 'add 页面',
      submit: {
        url: '/add',
        value: '添加用户',
      }
    })
  })
  .post('/add', (req, res) => {
    var user = req.body
    User.create(user).then(result => {
      res.redirect('/list')
    })
  })


  .get('/modify', (req, res) => {
    var query = req.query
    User.findOne({ _id: query.id }).then(result => {
      res.render('modify', {
        user: result,
        hobbies: ["足球", "篮球", "橄榄球", "敲代码", "抽烟", "喝酒", "烫头"],
        fn: (value1, value2) => {
          return value1.includes(value2)
        },
        title: 'modify 页面',
        submit: {
          url: '/modify',
          value: '修改页面',
        },
      })
    })
  })
  .post('/modify', (req, res) => {
    var id = req.query.id
    var user = req.body
    User.updateOne({ _id: id }, user).then(result => {
      res.redirect('/list')
    })
  })


  .get('/delete', (req, res) => {
    var id = req.query.id
    User.deleteOne({ _id: id }).then(result => {
      res.redirect('/list')
    })
  })


app.use(list)

