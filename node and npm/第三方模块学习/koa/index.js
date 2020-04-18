const koa = require('koa2')
const app = new koa()

app.use(async (ctx) => {
  ctx.body = '您好！'
})
app.listen(3000)