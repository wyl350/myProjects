const Koa = require('koa2')
const app = new Koa()
const Router = require('koa-router')
const router = new Router() // 引入路由
const views = require('koa-views')
//配置模板引擎中间件  --第三方中间件
//app.use(views('views', { map: {html: 'ejs' }}));   //这样配置也可以  注意如果这样配置的话 模板的后缀名是.html
app.use(views('views', {
  extension: 'ejs'  /*应用ejs模板引擎*/
}))
//写一个中间件配置公共的信息
app.use(async (ctx, next) => {
  ctx.state.userinfo = '张三';
  await next();/*继续向下匹配路由*/
})
router.get('/', async (ctx) => {
  let title = "你好ejs";
  await ctx.render('index', {
    title: title
  });
})
router.get('/news', async (ctx) => {
  let list = ['11111', '22222', '33333'];
  let content = "<h2>这是一个h2</h2>";
  let num = 12;
  await ctx.render('news', {
    list: list,
    content: content,
    num: num
  })
})
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);