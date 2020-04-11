// Promise 化
const readFilePromise = (fileName) => {
  const fs = require('fs')
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (error, data) {
      if (error) return reject(error)
      resolve(data)
    })
  })
}
const writeFilePromise = (filepath, writedata) => {
  const fs = require('fs')
  return new Promise((reject) => {
    fs.writeFile(filepath, writedata, 'utf8', function (err) {
      if (err) { reject(err) } else { console.log('写入成功！') }
    })
  })
}
// 读写函数
const readFile = async function (filepath) {
  let data = await readFilePromise(filepath).catch(console.log)
  return data
}
const writeFile = async function (filepath, writedata) {
  await writeFilePromise(filepath, writedata).catch(console.log)
}

// 工具函数
const getPropertyObjs = (data, propertyName) => {
  return data[propertyName]
}
const getObjById = (objs, id) => {
  let obj
  objs.forEach(element => {
    if (element.id === id) {
      obj = element
    }
  })
  return obj
}
const getobjs = async (filepath, propertyName) => {
  let data = await readFile(filepath)
  data = JSON.parse(data)
  return getPropertyObjs(data, propertyName)
}

// 业务代码
filepath = './db.json'
propertyName = 'comments'

const findById = async (id) => {
  const objs = await getobjs(filepath, propertyName)
  return getObjById(objs, id)
}

// 业务代码抽离
const pushobj = (objs, obj) => {
  obj.id = objs[objs.length - 1].id + 1
  objs.push(obj)
}
const delById = (objs, id) => {
  const deleteId = objs.findIndex(function (item) {
    return item.id === parseInt(id)
  })
  objs.splice(deleteId, 1)
}
const upById = (objs, obj) => {
  obj.id = parseInt(obj.id)
  const stu = objs.find(function (item) {
    return item.id === obj.id
  })
  for (const key in obj) {
    stu[key] = obj[key]
  }
}
const sdu = async (middleware, param) => {
  let data = await readFile(filepath)
  data = JSON.parse(data)
  const objs = getPropertyObjs(data, propertyName)

  middleware(objs, param)

  data = JSON.stringify(data)
  await writeFile(filepath, data)
}

const save = async (obj) => {
  sdu(pushobj, obj)
}
const deleteById = async (id) => {
  sdu(delById, id)
}
const updateById = async (obj) => {
  sdu(upById, obj)
}

module.exports = {
  getobjs,
  findById,
  save,
  updateById,
  deleteById,
}

