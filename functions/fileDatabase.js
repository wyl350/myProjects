// 引包
const { readFileObj, writeFileObj } = require('./IO')
// 属性
let filepath, propertyName
const setfilepath = (value) => { filepath = value }
const setpropertyName = (value) => { propertyName = value }
// 中间件：这四个中间件的作用，都没有返回值，处理的是一个包含多个对象的数组，完成对这个数组的增删改查。最终实现对文件数据库的功能。
const getobjs = (objs) => {
  return objs[propertyName]
}
const savem = (objs, obj) => {
  obj.id = objs[objs.length - 1].id + 1
  objs.push(obj)
}
const deleteByIdM = (objs, id) => {
  const deleteId = objs.findIndex((item) => {
    return item.id === parseInt(id)
  })
  objs.splice(deleteId, 1)
}
const updateByIdM = (objs, obj) => {
  obj.id = parseInt(obj.id)
  const stu = objs.find((item) => {
    return item.id === obj.id
  })
  for (const key in obj) {
    stu[key] = obj[key]
  }
}

// 功能框架
const sdu = async (middleware, param) => {
  const dataobj = await readFileObj(filepath)
  const objs = getobjs(dataobj)
  middleware(objs, param)
  writeFileObj(filepath, dataobj)
}
// 增删改查


const find = async () => {
  const fileobj = await readFileObj(filepath)
  return getobjs(fileobj)
}

const findById = async (id) => {
  const fileobj = await readFileObj(filepath)
  const objs = await getobjs(fileobj)
  let obj
  objs.forEach(element => {
    if (element.id === id) {
      obj = element
    }
  })
  return obj
}
const save = async (obj) => { sdu(savem, obj) }
const deleteById = async (id) => { sdu(deleteByIdM, id) }
const updateById = async (obj) => { sdu(updateByIdM, obj) }
// 导出
module.exports = {
  find, findById, save, deleteById, updateById,

  setfilepath, setpropertyName
}
