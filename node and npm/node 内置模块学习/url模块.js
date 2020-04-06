var url = require('url')

// var obj = url.parse('/pinglun?name=的撒的撒&message=的撒的撒的撒', true)
var obj = url.parse('https://www.baidu.com/s?name=wyl350&password=123', true)

console.log(obj)
console.log(obj.query)
{
  // $ node 08-url模块.js
  // Url {
  //   protocol: 'https:',
  //   slashes: true,
  //   auth: null,
  //   host: 'www.baidu.com',
  //   port: null,
  //   hostname: 'www.baidu.com',
  //   hash: null,
  //   search: '?name=wyl350&password=123',
  //   query: [Object: null prototype] { name: 'wyl350', password: '123' },
  //   pathname: '/s',
  //   path: '/s?name=wyl350&password=123',
  //   href: 'https://www.baidu.com/s?name=wyl350&password=123'
  // }
  
}