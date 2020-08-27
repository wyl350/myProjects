// let { toString: s } = 123;
// console.log(s) // true
// console.log(Number.prototype.toString) // true

// let { toString: s } = Number(123)
// console.log(s) // true
// console.log(Number(123)) // true
// console.log(Number(123).s()) // true

// let {toString: s} = true;
// s === Boolean.prototype.toString  // true
let { console:{log: c} } = this

c('fefefefe')