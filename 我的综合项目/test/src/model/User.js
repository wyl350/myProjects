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