const {
  add,
  del,
  modify,
  queryAllData,
  queryFromId,
} = require('./index.js')

getobjs('./Comments.DB', 'Comments').then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err);
})

console.log(3);
