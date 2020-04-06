const
  ramda = require('./ramda'),
  { curry } = require('./ramda')

currys = (...funcs) => {
  return funcs.map(function (func) {
    return curry(func)
  })
}
ramda.currys = currys
module.exports = ramda
