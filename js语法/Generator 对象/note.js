{ // Generator
  // generator 是异步编程的一种解决方案。
  // 早期的回调，Promise，以及这里的generator都是讲的是异步编程。但是比promise 更高级。
  // next 和 yield 都是 generator 的一部分，generator 包含多个步骤，遇到每一个步骤，标志就是 next 和 yield ，遇到
  // next 和 yield这一步，程序就停止了，不会向下运行了，要进行下一步的时候，要调用next函数，直到结束。

  {
    // // genertaor基本定义 两个区别，非常的明显。
    // let tell = function* () {
    //   console.log(1)
    //   yield 'a';
    //   yield 'b';
    //   return 'c'
    // };
    // tell() // 这一步是不会执行的，显然和普通函数不同。
    // let k = tell(); //函数调用赋值，真是霸气。这一步也不会执行的，

    // console.log(k.next()); //执行第一个next会执行完第一个yield。
    // // 执行结果：共两行。
    // // 1
    // // { value: "a", done: false }
    // console.log(k.next());
    // console.log(k.next());
    // console.log(k.next());
    // // 任何对象的iterator接口都是部署在了 symbol.iterator这个属性上。
    // // generator函数就是一个遍历器生成函数。甚至可以直接赋值给symbol的 iterator 。从而使这个对象也具有了 iterator 接口。好霸气的。
  }

  {
    // let obj = {};
    // obj[Symbol.iterator] = function* () {
    //   yield 1;
    //   yield 2;
    //   yield 3;
    // }

    // for (let value of obj) {
    //   console.log('value', value);
    // }
  }

  {
    // let state=function* (){
    //   while(1){
    //     yield 'A';
    //     yield 'B';
    //     yield 'C';
    //   }
    // }
    // let status=state();
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
  }

  {
    // let state = async function () {
    //   while (1) {
    //     await 'A';
    //     await 'B';
    //     await 'C';
    //   }
    // }
    // let status = state();
    // console.log(status.next);
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
  }

  {
    // let draw = function (count) {
    //   //具体抽奖逻辑
    //   console.info(`剩余${count}次`)
    // }

    // let residue = function* (count) {
    //   while (count > 0) {
    //     count--;
    //     yield draw(count);
    //   }
    // }

    // let star = residue(5);
    // let btn = document.createElement('button');
    // btn.id = 'start';
    // btn.textContent = '抽奖';
    // document.body.appendChild(btn);
    // document.getElementById('start').addEventListener('click', function () {
    //   star.next();
    // }, false)
  }

  {
    // // 长轮询
    // let ajax = function* () {
    //   yield new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //       resolve({ code: 0 })
    //     }, 200);
    //   })
    // }

    // let pull = function () {
    //   let genertaor = ajax();
    //   let step = genertaor.next();
    //   step.value.then(function (d) {
    //     if (d.code != 0) {
    //       setTimeout(function () {
    //         console.info('wait');
    //         pull()
    //       }, 1000);
    //     } else {
    //       console.info(d);
    //     }
    //   })
    // }

    // pull();
  }




}
// Generator 和 iterator 还是不会，iterator 还没有看。