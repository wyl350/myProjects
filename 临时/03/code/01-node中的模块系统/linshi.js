
// Array.prototype.myslice = function myslice() {
//   var array = []

//   var start = 0
//   var end = this.length
//   if (arguments.length === 1) {
//     start = arguments[0]
//   } else if (arguments.length === 2) {
//     start = arguments[0]
//     end = arguments[1]
//   }

//   for (let i = start; i < end; i++) {
//     array.push(this[i])
//   }
//   console.log(arguments[0], arguments[1])
//   console.log(start, end)
//   return array
// }

Array.prototype.myslice = function myslice(...arg) {
  var array = []

  var start = 0
  var end = this.length
  if (arg.length === 1) {
    start = arg[0]
  } else if (arg.length === 2) {
    start = arg[0]
    end = arg[1]
  }

  for (let i = start; i < end; i++) {
    array.push(this[i])
  }
  return array
}


var obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
}
console.log(
  [].myslice.call(obj, 2, 4),
)