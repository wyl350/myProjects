const util = require('util');
const fs = require('fs');

// const readFilePromise = util.promisify(fs.readFile)
// const writeFilePromise = util.promisify(fs.writeFile)
const readFilePromise = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}
// fs.readFile('./http.js', 'utf8', (err, data) => {
//   if (err) return 
//   // resolve(data)
//   console.log(data);
// })

const writeFilePromise = (filepath, writedata) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, writedata, 'utf8', (err) => {
      if (err) return reject(err)
    })
  })
}
// 读写函数
const readFile = async function (filepath) {
  return await readFilePromise(filepath).catch(console.log)

}
// readFile('./db.json').then(console.log)

const writeFile = async function (filepath, writedata) {
  await writeFilePromise(filepath, writedata).catch(console.log)
}
// 工具函数
const getobjs = async (filepath, propertyName) => {
  let data = await readFile(filepath)
  console.log(data);

  data = JSON.parse(data)

  return data[propertyName]
}
getobjs('./db.json', 'comments')
// .then(console.log)

// getobjs('./db.json', 'comments')
// // .then(console.log)
const writeObjs = async (objs) => {
  objs = JSON.stringify(objs)
  await writeFile(filepath, objs)
}

// 业务代码 变量赋值
filepath = './db.json'
propertyName = 'comments'

// 业务代码抽离
let fiById = async (objs, id) => {
  let obj
  objs.forEach(element => {
    if (element.id === id) {
      obj = element
    }
  })
  return obj
}
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
  const objs = getobjs(filepath, propertyName)

  middleware(objs, param)

  writeObjs(objs)
}


findById = async (id) => {
  sdu(fiById, id)
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
  // getobjs,
  // findById,
  // save,
  // updateById,
  // deleteById,
}
