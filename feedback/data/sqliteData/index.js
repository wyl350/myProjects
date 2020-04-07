const sqlite3 = require("sqlite3").verbose()

const add = (db, table) => {// 增加一条数据
  const dbPath = new sqlite3.Database(__dirname + db)
  var sql_add = dbPath.prepare(`insert into ${table} ( title, finished) values('写一小时作业',0)`)
  sql_add.run()
}
const del = (db, table, id) => {// 删除数据
  const dbPath = new sqlite3.Database(__dirname + db)
  var sql_del = dbPath.prepare(`delete from ${table} where id=${id}`)
  sql_del.run()
}
const modify = (db, table, id) => {// 修改一条数据
  const dbPath = new sqlite3.Database(__dirname + db)
  var sql_modify = dbPath.prepare(`update ${table} set title=454545 where id=${id}`)
  sql_modify.run()
}
const getobjs = (db, table) => {// all查询所有数据
  const dbPath = new sqlite3.Database(__dirname + db)
  return new Promise(function (resolve, reject) {
    dbPath.all(`select * from ${table}`, function (err, data) {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
const queryFromId = (db, table, id) => {// 按条件查询
  return new Promise(function (resolve, reject) {
    const dbPath = new sqlite3.Database(__dirname + db)
    dbPath.each(`select * from ${table} where id=?`, id, function (err, data) {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

module.exports = {
  add,
  del,
  modify,
  getobjs,
  queryFromId,
}



