module.exports = mongoose.model('Student', mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenghth: 2,
    maxlenghth: 10,
  },
  age: {
    type: Number,
    min: 10,
    max: 25,
  },
  sex: {
    type: String,
  },
  email: {
    type: String,
  },
  hobbies: [String],
  college: String,
  enterDate: {
    type: Date,
    default: Date.now,
  }
}))

