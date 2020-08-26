
const { readFile, readFilePromise } = require('./test1')
var expect = require('chai').expect;
const fetch = require('node-fetch')


describe('test1测试', function () {
  it.skip('引入模块测试', function () {
    expect(readFile).to.be.a('function');
    expect(readFilePromise).to.be.a('function');
  })

  it.skip('普通异步测试', function (done) {
    readFile('mocha.opts', 'utf8', function (err, res) {
      expect(res).to.be.a('string');
      done();
    })
  })

  it.skip('promise异步测试', function () {
    readFilePromise('mocha.opts', 'utf8')
      .then((result) => {

        expect(result).to.be.a('string');
      })
  })

  it('测试', function () {
    fetch('https://www.baidu.com/')
      .then(function (res) {
        // console.log(typeof res)
        // console.log(Object.keys(res))
        // console.log(res.status)
        // console.log(res.body)
        expect(res).to.be.a('object');
      })
  })

})


// // 断言内容：
// // 相等或不相等
// expect(4 + 5).to.be.equal(9);
// expect(4 + 5).to.be.not.equal(10);
// expect(foo).to.be.deep.equal({ bar: 'baz' });

// // 布尔值为true
// expect('everthing').to.be.ok;
// expect(false).to.not.be.ok;

// // typeof
// expect('test').to.be.a('string');
// expect({ foo: 'bar' }).to.be.an('object');
// expect(foo).to.be.an.instanceof(Foo);

// // include
// expect([1,2,3]).to.include(2);
// expect('foobar').to.contain('foo');
// expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// // empty
// expect([]).to.be.empty;
// expect('').to.be.empty;
// expect({}).to.be.empty;

// // match
// expect('foobar').to.match(/^foo/);