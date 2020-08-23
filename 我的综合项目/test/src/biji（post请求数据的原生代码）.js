// 接受用户提交的信息
let formData = '';
// 接受post参数
req.on('data', param => {
  formData += param;
})
// post参数接受完毕
req.on('end', async () => {
  let user = querystring.parse(formData)
  // 将用户提交的信息添加到数据库中
  await User.updateOne({ _id: query.id }, user);
  // 301代表重定向
  // location 跳转地址
  res.writeHead(301, {
    Location: '/list'
  });
  res.end();
})