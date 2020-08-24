let { express, app } = require('./index')

module.exports = home = express.Router()
  .get('/index', (req, res) => {
    res.send('index')
  })
app.use('/home',home)
