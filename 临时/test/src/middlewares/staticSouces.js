var {path,express, app } = require('./index')

app.use('/public', express.static(path.join(__dirname, '../public')))