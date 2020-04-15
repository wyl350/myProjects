// 封装的还是不够好。需要进一步封装。
const fileDbF = (option) => {
  const { readFileObj, writeFileObj } = require('./IO')
  const { filepath, propertyName } = option

  const getobjs = (objs) => {
    return objs[propertyName]
  }
  const savem = (objs, obj) => {
    obj._id = objs[objs.length - 1]._id + 1
    objs.push(obj)
  }
  const deleteByIdM = (objs, _id) => {
    const deleteId = objs.findIndex((item) => {
      return item._id === parseInt(_id)
    })
    objs.splice(deleteId, 1)
  }
  const updateByIdM = (objs, obj) => {
    obj._id = parseInt(obj._id)
    const stu = objs.find((item) => {
      return item._id === obj._id
    })
    for (const key in obj) {
      stu[key] = obj[key]
    }
  }

  const readFrame = () => {
    const dataobj = readFileObj(filepath)
    return dataobj
  }


  const writeFrame = (dataobj) => {
    return writeFileObj(filepath, dataobj)
  }
  const sdu = async (middleware, param) => {
    const dataobj = await readFrame()
    const objs = getobjs(dataobj)
    middleware(objs, param)
    writeFrame(dataobj)
  }
  const find = async () => {
    const fileobj = await readFileObj(filepath)
    return getobjs(fileobj)
  }

  const findById = async (_id) => {
    const fileobj = await readFileObj(filepath)
    const objs = await getobjs(fileobj)
    let obj
    objs.forEach(element => {
      if (element._id === _id) {
        obj = element
      }
    })
    return obj
  }


  const save = async (obj) => { sdu(savem, obj) }
  const findByIdAndRemove = async (_id) => { sdu(deleteByIdM, _id) }
  const findByIdAndUpdate = async (obj) => { sdu(updateByIdM, obj) }
  return {
    find, findById, save, findByIdAndUpdate, findByIdAndRemove,
  }
}

module.exports = fileDbF



