const {
  getobjs,
  findById,
  save,
  updateById,
  deleteById, } = require('./api.js')

getobjs('./db.json', 'students').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
})


