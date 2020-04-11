var url = require('url')

// var obj = url.parse('/pinglun?name=的撒的撒&message=的撒的撒的撒', true)
var obj = url.parse('https://www.baidu.com:3000/s?name=wyl350&password=123', true)

console.log(obj)
console.log(obj.query)

// Url {

//   href: 'https://www.baidu.com:3000/s?name=wyl350&password=123'

//   protocol: 'https:',
//   slashes: true,
//   auth: null,

//   host: 'www.baidu.com:3000',
//   hostname: 'www.baidu.com',
//   port: '3000',

//   hash: null,

//   path: '/s?name=wyl350&password=123',
//   pathname: '/s',
//   search: '?name=wyl350&password=123',
//   query: [Object: null prototype] { name: 'wyl350', password: '123' },

// }
// [Object: null prototype] { name: 'wyl350', password: '123' }
