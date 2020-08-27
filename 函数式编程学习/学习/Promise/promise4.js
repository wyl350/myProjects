const fs = require('fs');


class MyPromise {
  constructor(executor) {
    let _this = this;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    function resolve(value) {
      _this.value = value;
      _this.onResolvedCallbacks.forEach(item => item())
    }
    function reject(reason) {
      _this.reason = reason;
      _this.onRejectedCallbacks.forEach(item => item());
    }
    executor(resolve, reject);
  }
  then(fn, fn2) {
    return new MyPromise((resolve, reject) => {
      this.onResolvedCallbacks.push(() => {
        let data = fn(this.value)
        console.log(data)
        resolve(data)
      })
      this.onRejectedCallbacks.push(() => {
        let reason = fn2(this.reason)
        console.log(reason)
        reject(reason)
      })
    })
  }
}


function executor(resolve, reject) {
  fs.readFile('./data.txt', (err, data) => {
    if (err) {
      console.log(err)
      reject(err)
    } else {
      resolve(data)
    }
  })
}

function asyncReadFile(url) {
  return new MyPromise((resolve, reject) => {
    fs.readFile(url, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}


var a = asyncReadFile('./data.txt');
var b = a.then(add, mismanage).then(minus, mismanage);
var c = a.then(minus, mismanage);

function mismanage(err) {
  console.log(err)
  return err
}

function add(data) {
  return data + 1
}

function minus(data) {
  return data - 10
}
