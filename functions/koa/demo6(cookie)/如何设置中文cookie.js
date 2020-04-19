// /**
//  * Created by Administrator on 2018/3/14 0014.
//  */
// console.log(new Buffer('张三').toString('base64'));// 转换成 base64 字符
// //5byg5LiJ
// console.log(new Buffer('5byg5LiJ', 'base64').toString());// 还原 base
// //张三

// 中文 cookie 的解决办法（已经封装）（当然，这种方法也是适用于英文，以及其他任何语言的。）：
// 设置 cookie
function setCookie(cookieProperty, chinese, cookiesSetOpts, ctx) {
  const base64 = new Buffer(chinese).toString('base64');
  ctx.cookies.set(cookieProperty, base64, cookiesSetOpts);
}
// 调用 cookie
function getCookie(cookieProperty, ctx) {
  const data = ctx.cookies.get(cookieProperty);
  return new Buffer(data, 'base64').toString();
}

module.exports = {
  setCookie,
  getCookie,
}
