const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/2020年8月23日test', { useNewUrlParser: true })
  .then(() => console.log('数据库 连接成功'))
  .catch(err => console.log(err, '数据库 连接失败'));

