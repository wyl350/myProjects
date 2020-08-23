var { app } = require('./index')

app.use((req, res, next) => {
  res.status(404).send('当前访问的页面是不存在的')
})