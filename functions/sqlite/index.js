const db = './tolist.db'
const table = 'todolist'
const sqlite3 = require("sqlite3").verbose()
const dbPath = new sqlite3.Database(__dirname + db)

function find() { // all查询所有
  return new Promise(function (resolve, reject) {
    dbPath.all(`select * from ${table}`, function (err, data) {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
function findById(id) {// 按条件查询
  return new Promise(function (resolve, reject) {
    dbPath.each(`select * from ${table} where id=?`, id, function (err, data) {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
function save() {// 增加一条数据
  var sql_add = dbPath.prepare(`insert into ${table} ( title, finished) values('写11111小时作业',1)`)
  sql_add.run()
}
function findByIdAndRemove(id) {// 删除数据
  var sql_del = dbPath.prepare(`delete from ${table} where id=${id}`)
  sql_del.run()
}
function findByIdAndUpdate(id) {// 修改一条数据
  const dbPath = new sqlite3.Database(__dirname + db)
  var sql_modify = dbPath.prepare(`update ${table} set title='555888fefef5585858' where id=${id}`)
  sql_modify.run()
}

module.exports = {
  find,
  findById,
  save,
  findByIdAndRemove,
  findByIdAndUpdate,
}
