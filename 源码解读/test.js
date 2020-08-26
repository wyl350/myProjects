
let express = require('./node_modules/express/index');
let app = express()
 
function middlewareA(req, res, next) {
  console.log('A1');
  next();
  console.log('A2');
}
 
function middlewareB(req, res, next) {
  console.log('B1');
  next();
  console.log('B2');
}
 
function middlewareC(req, res, next) {
  console.log('C1');
  next();
  console.log('C2');
}
 
app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);
 
app.listen(8888, () => {
  console.log("服务器已经启动访问http://127.0.0.1:8888");
})
