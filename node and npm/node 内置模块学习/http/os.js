// os模块
const os = () => {
  const os = require('os')

  // console.log(os.cpus())// 获取当前机器的 CPU 信息
  const cpus = [
    {
      model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
      speed: 3000,
      times: {
        user: 2190140,
        nice: 0,
        sys: 2951218,
        idle: 33050078,
        irq: 807875
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
      speed: 3000,
      times: {
        user: 2092218,
        nice: 0,
        sys: 1978265,
        idle: 34120734,
        irq: 389656
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
      speed: 3000,
      times: {
        user: 2043875,
        nice: 0,
        sys: 1600796,
        idle: 34546546,
        irq: 317000
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-7400 CPU @ 3.00GHz',
      speed: 3000,
      times: {
        user: 2217375,
        nice: 0,
        sys: 1501687,
        idle: 34472156,
        irq: 274593
      }
    }
  ] // 此为上述打印的内容，本机电脑四核cup详细信息。
  console.log(os.totalmem())// 4249509888
}