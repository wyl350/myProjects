const fs = require('fs')

const readFile = async (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', function (err, data) {
      if (err) { reject(err) } else {
        data = JSON.parse(data)
        resolve(data)
      }
    });
  })
}
const writeFile = async (filepath, writedata) => {
  return new Promise((reject) => {
    fs.writeFile(filepath, writedata, 'utf8', function (err) {
      if (err) { reject(err) } else { console.log('写入成功！') }
    })
  })
}

const getPropertyObjs = async (data, propertyName) => {
  return data[propertyName]
}

const getObjById = async (objs, id) => {
  let obj
  objs.forEach(element => {
    if (element.id === id) {
      obj = element
    }
  })
  return obj
}

// 业务代码
const getobjs = async (filepath, propertyName) => {
  const data = await readFile(filepath)
  return getPropertyObjs(data, propertyName)
}
const findById = async (filepath, propertyName, id) => {
  const objs = await getobjs(filepath, propertyName)
  return getObjById(objs, id)
}
const save = async (filepath, propertyName, obj) => {
  const data = await readFile(filepath)
  const objs = await getPropertyObjs(data, propertyName)
  obj.id = objs[objs.length - 1].id + 1
  objs.push(obj)
  const writedata = JSON.stringify(data)
  await writeFile(filepath, writedata)
}
const updateById = async (filepath, propertyName, obj) => {
  const data = await readFile(filepath)
  const objs = await getPropertyObjs(data, propertyName)
  obj.id = parseInt(obj.id)
  const stu = objs.find(function (item) {
    return item.id === obj.id
  })
  for (const key in obj) {
    stu[key] = obj[key]
  }
  await writeFile(filepath, JSON.stringify(data))
}
const deleteById = async (filepath, propertyName, id) => {
  const data = await readFile(filepath)
  const objs = await getPropertyObjs(data, propertyName)
  var deleteId = objs.findIndex(function (item) {
    return item.id === parseInt(id)
  })
  objs.splice(deleteId, 1)
  await writeFile(filepath, JSON.stringify(data))
}
