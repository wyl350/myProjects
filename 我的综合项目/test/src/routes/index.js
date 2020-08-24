// var { express, app, path } = require('../index')
// exports.express = express
// exports.app = app

const template = require('express-art-template');
app.engine('html', template)
app.set('views', path.join(__dirname, '../../views'))
app.set('view engine', 'html');

// require('./home')
// require('./admin')
require('./list')

// // 全局配置公共数据
// template.defaults.imports.a = []
// // 设置模板默认后缀 
// template.defaults.extname
// // 配置模板根目录的另一种方法
// template.defaults.root = path.join(__dirname, 'views')

