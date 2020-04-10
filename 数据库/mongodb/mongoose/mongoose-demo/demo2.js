const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/itcast', { useMongoClient: true })

const userSchema = new Schema({
  username: {
    type: String,
    required: true // 必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)


// #region // 查询数据
// // 查询所有
User.find(function (err, ret) {
  if (err) {
    console.log('查询失败')
  } else {
    console.log(ret)
  }
})
// // 且条件查询多个
// User.find({
//   username: 'admin',
//   password: 123456,
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })
// // 且条件查询一个
// User.findOne({
//   username: 'admin'
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })
// #endregion /查询数据


// #region /新增数据
// const admin = new User({
//   username: 'zs3',
//   password: '123456',
//   email: 'admin@admin11111.com'
// }) // 如果不符合架构条件保存，则会保存失败，并将结果打印出。

// admin.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })
// #endregion /新增数据






// #region /删除数据
// User.remove({
//   username: 'zs2'
// }, function (err, ret) {
//   if (err) {  
//     console.log('删除失败')
//   } else {
//     console.log('删除成功')
//   }
// }) // 即使是没有数据，也是会显示删除成功的。
// #endregion /删除数据


// #region /更新数据
// User.findByIdAndUpdate('5e8f2209d1fd972250825b23', {
//   password: '123二维翁绕弯儿'
// }, function (err, ret) {
//   if (err) { 
//     console.log('更新失败')
//   } else {
//     console.log('更新成功')
//   } 
// })
// #endregion /更新数据
