var {app } = require('./index')

// 接收所有请求的中间件。// 可以用来拦截是否往下走下去。
app.use((req, res, next) => {
  next()
})
