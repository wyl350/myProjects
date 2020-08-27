const fs = require('fs');

class MyPromise {
  constructor (executor) {
    let _this = this;
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    function resolve(value){
      if (_this.status === 'pending') {
        _this.status = 'fulfilled';
        _this.value = value;
        _this.onResolvedCallbacks.forEach(item => item())
      }
    }
    function reject(reason){
      if (_this.status === 'pending') {
        _this.status = 'rejected';  
        _this.reason = reason;
        _this.onRejectedCallbacks.forEach(item => item());
      }
    }
    executor(resolve, reject);
  } 
  then (onResolved,onRejected) {
     
     onResolved = typeof onResolved === 'function' ? onResolved : function(value) {}
     onRejected = typeof onRejected === 'function' ? onRejected : function(reason) {}

     return new MyPromise((resolve,reject) => {
      if(this.status === 'pending'){
        this.onResolvedCallbacks.push (()=>{
          let x =  onResolved(this.value) 
          if (x instanceof Promise) { x.then(resolve, reject)
          }else {
            resolve(x)
          }
        })
        this.onRejectedCallbacks.push (()=>{
          let x =  onRejected(this.reason)
          reject(x)
        })
      }
      if(this.status === 'fulfilled'){
          let x = onResolved(this.value)
          resolve(x)
      }
      if(this.status === 'rejected'){
          let x = onRejected(this.value)
          reject(x)
      }
    })
  }    
}


function executor(resolve,reject){
  fs.readFile('./data.txt',(err, data)=>{
    if(err){ 
       console.log(err)
       reject(err)
    }else {
       resolve(data)
    }
  })
}

function asyncReadFile(url){
  return new MyPromise((resolve,reject) => {
    fs.readFile(url, (err, data) => {
      if(err){ 
         console.log(err)
         reject(err)
      }else {
         resolve(data)
      }
    })
  })
}

var a = asyncReadFile('./data.txt');
a.then(add,mismanage).then(add,mismanage).then(add,mismanage);




function mismanage(err){
  console.log(err)
  return err
}

function add (data){
  console.log(data.toString())
  return asyncReadFile('./data2.txt')
}

// function add (data){
//   console.log(data.toString())
//   return data
// }

function minus (data){
  return data - 10
}
