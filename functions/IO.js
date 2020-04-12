const util = require('util');
const fs = require('fs');

const readFile = async function (filepath) {
  return await util.promisify(fs.readFile)(filepath).catch(console.log)
}
const writeFile = async function (filepath, writedata) {
  return await util.promisify(fs.writeFile)(filepath, writedata).catch(console.log)
}
exports.readFileObj = async function (filepath) {
  const data = await readFile(filepath)
  return JSON.parse(data)
}
exports.writeFileObj = async function (filepath, obj) {
  writedata = JSON.stringify(obj)
  return await writeFile(filepath, writedata)
}
