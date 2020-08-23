const mongoose = require('mongoose');

mongoose.connect('mongodb://test4', { useNewUrlParser: true })
  .then(() => console.log('数据库 连接成功'))
  .catch(err => console.log(err, '数据库 连接失败'));

