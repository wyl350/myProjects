var {path,express, app } = require('./index')

app.use('/public', express.static(path.join(__dirname, '../../public')))
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')))