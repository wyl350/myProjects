const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
mongoose.Promise = global.Promise;

const Cat = mongoose.model('Cat', { name: String })
const kitty = new Cat({ name: '喵喵' })
kitty.save(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})

