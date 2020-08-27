const { Maybe, map, map_f } = require('./Functor')
const { compose } = require('.././modules/ramda')
const R = require('.././modules/ramda')

const {
  writeFileSync,
} = require('./functions')

const composeFunc = compose(
  R.join('\n'), // 合成字符串
  R.values, // 生成成员数组
)
const container = map(composeFunc)
  (Maybe.of(R))
map_f(writeFileSync('R.md'))
  (container)
