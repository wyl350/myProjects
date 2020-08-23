var {path,express, app } = require('./index')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ extended: false }))
