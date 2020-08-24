mongoose.connect('mongodb://localhost/test4', { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => console.log('数据库 连接成功'))
  .catch(err => console.log(err, '数据库 连接失败'));

module.exports = require('./Student')

// useUnifiedTopology: true