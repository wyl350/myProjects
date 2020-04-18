// ejs模板引擎的使用：
//     1.npm install koa-views  --save
//     2.npm install ejs  --save
//     3.var views = require('koa-views')
//     app.use(views(__dirname, { extension: 'ejs' }))   //模板的后缀名是ejs
//     4 await ctx.render('index')
function koa() {
	const Koa = require('koa2')
	const app = new Koa()
	const Router = require('koa-router')
	const router = new Router() // 引入路由
	const views = require('koa-views')
	const bodyParser = require('koa-bodyparser')
	app.use(bodyParser())//配置post bodyparser的中间件


	function loadRouter() {
		//启动路由
		app.use(router.routes())
			.use(router.allowedMethods())// 可以配置也可以不配置,建议配置,router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以	 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有	 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头
	}
	function listen(port) {
		app.listen(port)
	}
	function httpFrame(port) {// 没有模板引擎的框架
		loadRouter()
		listen(port)
	}
	function koa1() {  // 没有路由
		app.use(async (ctx) => {
			ctx.body = '你好 koa2.x'
		})
		listen(3000)
	}
	function koa2() {  // 简单路由
		router.get('/', async (ctx) => {
			ctx.body = '首页'
		})
		router.get('/news', async (ctx) => {
			ctx.body = "这是一个新闻页面"
		})
		loadRouter()
		listen(3000)
	}
	function koa3() {  // 获取 get 传值
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		//获取get传值
		//http://localhost:3002/newscontent?aid=123
		// 在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。query：返回的是格式化好的参数对象。querystring：返回的是请求字符串。
		router.get('/newscontent', async (ctx) => {
			//从ctx中读取get传值
			console.log(ctx.query) //{ aid: '123' }
			console.log(ctx.request.query) // 同上
			console.log(ctx.querystring) // aid=123
			console.log(ctx.request.querystring) // 同上
			console.log(ctx.url) // /newscontent?aid=123
			console.log(ctx.request.url) // 同上
			ctx.body = "新闻详情"
		})
		loadRouter()
		listen(3000)
	}
	function koa4() {  // 动态传值
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		//动态路由  http://localhost:3002/newscontent/xxxx
		router.get('/newscontent/:aid', async (ctx) => {
			//获取动态路由的传值,目的是通过 url 传递变量。
			console.log(ctx.params)  //{ aid: '456' }
			ctx.body = "新闻详情"
		})
		//动态路由里面可以传入多个值
		//http://localhost:3002/package/123/456
		router.get('/package/:aid/:cid', async (ctx) => {
			//获取动态路由的传值
			console.log(ctx.params)  //{ aid: '123', cid: '456' }
			ctx.body = "新闻详情"
		})
		httpFrame(3000)
	}
	function koa5() { // 应用级中间件，没有返回页面，但是任何地址都会打印日期。
		app.use(async (ctx, next) => {
			console.log(new Date())
		})
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		httpFrame(3000)
	}
	function koa6() { // 应用级中间件，有返回页面，但是任何地址都会打印日期。不会匹配下面的路由。
		app.use(async (ctx, next) => {
			console.log(new Date())
			ctx.body = "首页"
			// await next() /*当前路由匹配完成以后继续向下匹配*/
		})
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		httpFrame(3000)
	}
	function koa7() { // 应用级中间件，有返回页面，但是任何地址都会打印日期。会匹配下面的路由。
		app.use(async (ctx, next) => {
			console.log(new Date())
			await next() /*当前路由匹配完成以后继续向下匹配*/
		})
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		httpFrame(3000)
	}
	function koa8() { // 路由匹配到了，但是没有相应信息，那么浏览器就没有相应页面。
		app.use(async (ctx, next) => {
			console.log(new Date())
			await next() /*当前路由匹配完成以后继续向下匹配*/
		})
		router.get('/', async (ctx) => {
			// ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		httpFrame(3000)
	}
	function koa9() { // 路由匹配到了，但是没有相应信息，使用next方法，那么就会向下匹配。
		app.use(async (ctx, next) => {
			console.log(new Date())
			console.log('我是应用级中间件！')
			await next() /*当前路由匹配完成以后继续向下匹配*/
		})
		router.get('/', async (ctx, next) => {
			// ctx.body = "首页"
			console.log('我是路由级中间件')
			next()
		})
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		httpFrame(3000)
	}
	function koa10() { // 路由匹配到了，但是没有相应信息，使用next方法，那么就会向下匹配。但是如果顺序发生改变，则路由级中间件就会被短路。
		app.use(async (ctx, next) => {
			console.log(new Date())
			console.log('我是应用级中间件！')
			await next() /*当前路由匹配完成以后继续向下匹配*/
		})
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/', async (ctx, next) => {
			// ctx.body = "首页"
			console.log('我是路由级中间件')
			next()
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		httpFrame(3000)
	}
	function koa11() { // 应用级中间价不受顺序的影响，即顺序发生改变，不会被短路。
		router.get('/', async (ctx, next) => {
			// ctx.body = "首页"
			console.log('我是路由级中间件')
			next()
		})
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		app.use(async (ctx, next) => {
			console.log(new Date())
			console.log('我是应用级中间件！')
			await next() /*当前路由匹配完成以后继续向下匹配*/
		})
		httpFrame(3000)
	}
	function koa12() { // 配置 404 页面。
		app.use(async (ctx, next) => {
			console.log('这是一个中间件01')
			console.log('这里是可以判断用户是否登录的状态！')
			next()
			if (ctx.status == 404) {   /*如果页面找不到*/
				ctx.status = 404
				ctx.body = "这是一个 404 页面!!!!"
			} else {
				console.log(ctx.url)
			}
		})
		router.get('/', async (ctx) => {
			ctx.body = "首页"
		})
		router.get('/news', async (ctx) => {
			console.log('这是新闻2')
			ctx.body = '这是一个新闻'
		})
		router.get('/login', async (ctx) => {
			ctx.body = "新闻列表页面"
		})
		httpFrame(3000)
	}
	// function koa13() {
	// 	configTemplateEngine1()
	// 	router.get('/', async (ctx) => {
	// 		await ctx.render('index');
	// 	})
	// 	httpFrame(3000)
	// }

	return {
		koa1, koa2, koa3, koa4, koa5, koa6, koa7, koa8, koa9, koa10, koa11, koa12, koa13,
	}
}
const {
	koa1, koa2, koa3, koa4, koa5, koa6, koa7, koa8, koa9, koa10, koa11, koa12, koa13,
} = koa()


koa13()







