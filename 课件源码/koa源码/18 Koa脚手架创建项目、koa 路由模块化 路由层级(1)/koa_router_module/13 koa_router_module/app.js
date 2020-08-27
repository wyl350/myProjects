
const Koa=require('koa'),

     router=require('koa-router')();

//引入子模块

var admin=require('./routes/admin.js');
var api=require('./routes/api.js');

var app=new Koa();

//配置路由
router.get('/',(ctx)=>{

    ctx.body='这是一个首页'
})
/*
  /admin   配置子路由  层级路由

 /admin/user
 */
router.use('/admin',admin.routes());
/*
 /api/newslist   新闻列表的api
 */
router.use('/api',api);   /*在模块里面暴露路由并且启动路由*/

//启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(8008);









