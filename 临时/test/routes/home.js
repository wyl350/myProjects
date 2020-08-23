const { home } = require('./prepare')

module.exports = home
  .get('/index', (req, res) => {
    res.render('index')
    res.send('fefefe')
  })

