// 用于创建网站服务器的模块
const http = require('http');
// 用于处理url地址
const url = require('url');
// app对象就是网站服务器对象
const app = http.createServer();
// 当客户端有请求来的时候
app.on('request', (req, res) => {
	// 获取请求方式
	// req.method
	// console.log(req.method);
	
	// 获取请求地址
	// req.url
	// console.log(req.url);
	
	// 获取请求报文信息
	// req.headers
	// console.log(req.headers['accept']);
	
	res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	});

	console.log(req.url);
	// 1) 要解析的url地址
	// 2) 将查询参数解析成对象形式
	let { query, pathname } = url.parse(req.url, true);
	console.log(query.name)
	console.log(query.age)

	if (pathname == '/index' || pathname == '/') {
		res.end('<h2>欢迎来到首页</h2>');
	}else if (pathname == '/list') {
		res.end('welcome to listpage');
	}else {
		res.end('not found');
	}
	
	if (req.method == 'POST') {
		res.end('post')
	} else if (req.method == 'GET') {
		res.end('get')
	}

	// res.end('<h2>hello user</h2>');
});
// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');