const express = require('express');
const template = require('express-art-template');
const path = require('path')

var app = express()
app.engine('html', template)
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'html');

exports.home = express.Router()
exports.admin = express.Router()


