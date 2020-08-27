let {readFile} = require('fs')

const asyncReadFile = async function () {
  const f1 = await readFile('./async.md');
  console.log(f1.toString());
};
console.log(
  asyncReadFile()
)