const { home } = require('./index')

module.exports = home
  .get('/index', (req, res) => {
    // res.render('index')
    res.send('index')
  })
