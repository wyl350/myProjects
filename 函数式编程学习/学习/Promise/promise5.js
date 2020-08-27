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
  then (fn,fn2) {
     return new MyPromise((resolve,reject) => {
      if(this.status === 'pending'){
        this.onResolvedCallbacks.push (()=>{
          let data =  fn(this.value) 
          console.log(data)         
          resolve(data)
        })
        this.onRejectedCallbacks.push (()=>{
          let reason =  fn2(this.reason) 
          console.log(reason)         
          reject(reason)
        })
      }
      if(this.status === 'fulfilled'){
          let x = fn(this.value)
          resolve(x)
      }
      if(this.status === 'rejected'){
          let x = fn2(this.value)
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




setTimeout(()=>{ a.then(add).then(add).then(add);  } ,2000)


function mismanage(err){
  console.log(err)
  return err
}

function add (data){
  console.log(data.toString())
  return data + 1
}

function minus (data){
  return data - 10
}
