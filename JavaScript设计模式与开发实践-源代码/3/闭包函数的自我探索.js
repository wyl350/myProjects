var a = 4
function f() {
  a++
  console.log(a);

}
f()
f()
f = null
// f()  切断闭包
console.log(a)  // 7
console.log(a)  // 7
// 后面这几次7的输出，说明，闭包函数已经将变量的值进行了修改。这点太重要了，竟然经过函数的调用，实现了函数依赖变量的变化。


