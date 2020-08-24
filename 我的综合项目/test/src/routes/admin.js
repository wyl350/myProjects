let { express, app } = require('./index')

module.exports = admin = express.Router()
  .get('/index', (req, res) => {
    res.send('admin')
  })
app.use('/admin',admin)