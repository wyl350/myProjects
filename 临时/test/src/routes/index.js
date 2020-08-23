var { express, app, path } = require('../index')
const template = require('express-art-template');


app.engine('html', template)
app.set('views', path.join(__dirname, '../../views'))
app.set('view engine', 'html');

exports.home = express.Router()
exports.admin = express.Router()
exports.list = express.Router()

var home = require('./home')
var admin = require('./admin')
var list = require('./list')

app.use('/home', home)
app.use('/admin', admin)
app.use(list)

// // 全局配置公共数据
// template.defaults.imports.a = []
// // 设置模板默认后缀 
// template.defaults.extname
// // 配置模板根目录的另一种方法
// template.defaults.root = path.join(__dirname, 'views')

