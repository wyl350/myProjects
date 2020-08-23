var { express, app,path } = require('../index')
const template = require('express-art-template');

app.engine('html', template)
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'html');

exports.home = express.Router()
exports.admin = express.Router()

var home = require('./home')
var admin = require('./admin')

app.use('/home', home)
app.use('/admin', admin)
