const { Maybe, map, map_f } = require('./Functor')
const { curry, compose, toLower, countBy } = require('.././modules/ramda')
const {
  readFile,
  writeFileSync,
} = require('./functions')

const replacement = curry((reg, replacement, data) => {
  // 对外做一个对象接口，使得功能强大。
  data = data.replace(reg, replacement)
  return data
})

const match = curry((reg, str) => {
  return str.match(reg)
})

const toString = curry((obj) => {
  var str = "";
  for (var key in obj) {
    str += key + ":" + obj[key] + "\n";
  }
  return str
})

const replacements = compose(
  // replacement(/^.+$/igm, '- '),
  replacement(/^(\n\r)+$/igm, ''),
  replacement(/^\d+$/igm, ''),
  replacement(/^\d{2,3}:\d{2,3}:\d{2,3},\d{2,3} --> \d{2,3}:\d{2,3}:\d{2,3},\d{2,3}$/igm, ''),
)

const composeFunc = compose(
  // toString,
  // countBy(toLower),
  // match(/\b\w+\b/ig),
  replacements,
  readFile
)

const container = map(composeFunc)
  (Maybe.of('../Warcraft/warcraft英文.srt'))

map_f(writeFileSync('../Warcraft/warcraft.md'))
  (container)
