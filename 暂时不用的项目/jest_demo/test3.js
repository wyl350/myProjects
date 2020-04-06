const fs = require('fs')

function fetchData(callback) {
  fs.readFile('./ceshi2.md', 'utf-8', function (err, data) {
    callback(data);
  })
}
fetchData(function (data) {
  console.log(data)
})