mongoose.connect('mongodb://localhost/test4', { useNewUrlParser: true })
  .then(() => console.log('数据库 连接成功'))
  .catch(err => console.log(err, '数据库 连接失败'));

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: 2,
    minlenghth: 2,
    maxlenghth: 20,
  },
  age: {
    type: Number,
    min: 18,
    max: 80,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  hobbies: [String]
})

const User = mongoose.model('User', userSchema)

module.exports = User

