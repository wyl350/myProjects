var { app } = require('./index')

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})