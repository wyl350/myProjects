const fs = require('fs')
const { MyPromise } = require('./Functor')

executor = (resolve, reject) => {
  fs.readFile('./data.txt', (err, data) => {
    if (err) {
      console.log(err)
      reject(err)
    } else {
      resolve(data)
    }
  })
}

asyncReadFile = (url) => {
  return new MyPromise((resolve, reject) => {
    fs.readFile(url, 'utf8',(err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

mismanage = (err) => { console.log(err); return err }
add = (data) => { console.log(data.toString()); return data + 1 }
minus = (data) => { return data - 10 }

asyncReadFile('../Titanic/titanic.md').then(
  function (data) { console.log(data) }
)
