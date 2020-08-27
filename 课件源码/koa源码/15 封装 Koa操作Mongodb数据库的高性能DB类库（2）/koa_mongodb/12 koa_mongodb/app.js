var Koa=require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path=require('path'),

    DB=require('./module/db.js');

var app=new Koa();
//配置 koa-art-template模板引擎
render(app, {
    root: path.join(__dirname, 'views'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
});
router.get('/',async (ctx)=>{

    console.time('start');
    var result=await DB.find('user',{});

    console.timeEnd('start');
    console.log(result);
    await ctx.render('index',{
        list:{
            name:'张三'
        }
    });
})
router.get('/news',async (ctx)=>{

    console.time('start');
    var result=await DB.find('user',{});

    console.timeEnd('start');
    ctx.body="这是一个新闻页面";
})
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);


