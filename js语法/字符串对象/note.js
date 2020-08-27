{  // JS字符串常用方法总结
  // https://www.cnblogs.com/Yimi/p/10362214.html
  // （一）大小写转换
  // （二）指定位置，找字符串。 charAt 和charCodeAt 这两个方法都是不能放参数为负数的，且只能放一个参数。
  // （三）
  // （四）指定字符串，找位置。indexOf()、lastIndexOf()
  // （五）截取字符串的三个方法：slice()、substring()、substr()// slice() 和 substring() 方法，区别是 substring() 没有负数参数。substr() 方法的第二个参数不是位置，而是长度。
  // （六） split() 分割为字符串
  // （七）replace()、match() 查找替换方法。

}

{// 1、toLowerCase(): 把字符串转为小写，返回新的字符串。

  var str = "Hello World";
  var str1 = str.toLowerCase();
  console.log(str); //Hello World
  console.log(str1); //hello world
}

{  // 2、toUpperCase(): 把字符串转为大写，返回新的字符串。
  var str = "hello world";
  var str1 = str.toUpperCase();
  console.log(str); //hello world
  console.log(str1); //HELLO WORLD
}

{// 3、charAt(): 返回指定下标位置的字符。如果index不在0 - str.length(不包含str.length)之间，返回空字符串。
  var str = "hello world";
  var str1 = str.charAt(6);
  var str2 = str.charAt(-2);

  console.log(str1); // w
  console.log(str2); // 空
}

{// 4、charCodeAt(): 返回指定下标位置的字符的unicode编码, 这个返回值是 0 - 65535 之间的整数。
  var str = "hello world";
  var str1 = str.charCodeAt(1);
  var str2 = str.charCodeAt(-2); //NaN
  console.log(str1); //101
  console.log(str2); //NaN
  // 注意：如果index不在0 - str.length(不包含str.length)之间，返回NaN。
}


{// 5、indexOf(): 返回某个指定的子字符串在字符串中第一次出现的位置
  var str = "Hello World";
  var str1 = str.indexOf("o");
  var str2 = str.indexOf("world");
  var str3 = str.indexOf("o", str1 + 1);
  var str4 = str.indexOf("o", -7);

  console.log(str1); //4 默认只找第一个关键字位置，从下标0开始查找
  console.log(str2); //-1 没有找到
  console.log(str3); //7
  console.log(str4); //4

  // 注意：indexOf()方法对大小写敏感，如果子字符串没有找到，返回 - 1。第二个参数表示从哪个下标开始查找，没有写则默认从下标0开始查找。
  // index的第二个参数是可以放负数的。
}

{// 6、lastIndexOf(): 返回某个指定的子字符串在字符串中最后出现的位置。  
  var str = "Hello World";
  var str1 = str.lastIndexOf("o");
  var str2 = str.lastIndexOf("world");
  var str3 = str.lastIndexOf("o", str1 - 1);
  console.log(str1); //7
  console.log(str2); //-1
  console.log(str3); //4
  // 注意：lastIndexOf()方法对大小写敏感，如果子字符串没有找到，返回 - 1。第二个参数表示从哪个下标开始查找，没有写则默认从最后一个字符处开始查找。
}

{// 7、 slice() : 返回字符串中提取的子字符串。
  var str = "Hello World";
  var str1 = str.slice(2); //如果只有一个参数，则提取开始下标到结尾处的所有字符串
  var str2 = str.slice(2, 7); //两个参数，提取下标为2，到下标为7但不包含下标为7的字符串
  var str3 = str.slice(-7, -2); //如果是负数，-1为字符串的最后一个字符。提取从下标-7开始到下标-2但不包含下标-2的字符串。前一个数要小于后一个数，否则返回空字符串

  console.log(str1); //llo World
  console.log(str2); //llo W
  console.log(str3); //o Wor
}

{// 8、 substring() : 提取字符串中介于两个指定下标之间的字符。
  var str = "Hello World";
  var str1 = str.substring(2)
  var str2 = str.substring(2, 2);
  var str3 = str.substring(2, 7);
  console.log(str1); //llo World
  console.log(str2); //如果两个参数相等，返回长度为0的空串
  console.log(str3); //llo W
  // 注意：substring()用法与slice()一样，但不接受负值的参数。
}

{// 9、substr(): 返回从指定下标开始指定长度的的子字符串


  var str = "Hello World";
  var str1 = str.substr(1)
  var str2 = str.substr(1, 3);
  var str3 = str.substr(-3, 2);
  console.log(str1); //ello World 
  console.log(str2); //ell
  console.log(str3); //rl
  // 注意：如果没有指定length, 返回从下标开始处结尾处的所有字符串。
  // 注意，第二个参数是长度，而不是位置。
}


{// 10、split(): 把字符串分割成字符串数组。 
  var str = "AA BB CC DD";
  var string1 = "1:2:3:4:5";
  var str1 = str.split("");//如果把空字符串 ("")用作分割符，那么字符串的每个字符之间都会被分割
  var str2 = str.split(" "); //以空格为分隔符
  var str3 = str.split("", 4); //4指定返回数组的最大长度
  var str4 = string1.split(":");
  console.log(str1); // ["A", "A", " ", "B", "B", " ", "C", "C", " ", "D", "D"]
  console.log(str2); //["AA" "BB" "CC" "DD"]
  console.log(str3); //["A", "A", " ", "B"]
  console.log(str4); // ["1", "2", "3", "4", "5"]
}

{// 11、replace(): 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
  var str = "hello WORLD";
  var reg = /o/ig; //o为要替换的关键字，不能加引号，否则替换不生效，i忽略大小写，g表示全局查找。
  var str1 = str.replace(reg, "**")
  console.log(str1); //hell** W**RLD
}

{// 12、match(): 返回所有查找的关键字内容的数组。
  var str = "To be or not to be";
  var reg = /to/ig;
  var str1 = str.match(reg);
  console.log(str1); //["To", "to"]
  console.log(str.match("Hello")); //null
}


// es6新增方法：
{// // 超出编码值如何处理
  // console.log('a', `\u0061`);
  // console.log('s', `\u20BB7`);

  // // 超出编码值如何处理
  // // 使用 `\u{20BB7}` 模式。
  // console.log('s', `\u{20BB7}`);
}


{ // codePointAt方法
  let s = '𠮷';
  console.log('length', s.length);
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  let s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0)); //code0 134071 这是十进制的。
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code2', s1.codePointAt(2));
}

{ // String.fromCodePoint 静态方法
  console.log(String.fromCharCode("0x20bb7"));
  // 这是es5的方法
  console.log(String.fromCodePoint("0x20bb7"));
  // 这是es6的方法
}

{// of 是 es6 的遍历方法。
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }
  for (let code of str) {
    console.log('es6', code);
  }
  // of 是 es6 的遍历方法。
}

{ // includes、  startsWith、  endsWith、三个方法
  let str = "string";
  console.log('includes', str.includes("c"));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ng'));
}

{// repeat 
  let str = "abc";
  console.log(str.repeat(200));
}

{ // 模板字符串
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m);
}

{ // padStart、 padEnd方法
  console.log('1'.padStart(20, '0'));
  console.log('1'.padEnd(20, '0'));
}

{ // 标签模板
  let user = {
    name: 'list',
    info: 'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2
  }
}


{// 标签模板
  { // 标签模板介绍 简单易懂。
    // // 首先，模板字符串和标签模板是两个东西。
    // // 标签模板不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。
    // // 但是，如果模板字符串中有变量，就不再是简单的调用了，而是要将模板字符串先处理成多个参数，再调用函数。

    // // 由此引出此文，先上代码：
    // var a = 5;
    // var b = 10;

    // tag`Hello ${a + b} world ${a * b}`;
    // //等同于
    // tag(['Hello ', ' world ', ''], 15, 50);

    // // 这里我产生了疑问，为什么数组第三个参数是空字符串，书中也未曾讲到，很是疑惑。
    // // 然后再看下一段代码：
    // var total = 30;
    // var msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
    // //由此可以得出 上面的方法等同于
    // var msg = passthru(['The total is ', ' (', ' with tax'], 30, 31.5)

    // // 在这段代码中数组参数并没有产生空字符串，原因我也不知道，百度了一番，然后懂了。

    // // 模板字符串由变量和非变量组成，什么是变量，${ } 就是变量。模板标签函数调用的第一个参数是数组，是由模板字符串中那些非变量部分组成，包括空格。

    // // 那么不难理解，假设模板字符串中的变量为A，非变量为B，那么模板字符串的组成可能就是:
    // // tpl1 = ABABA; -> ['', B, B, '']
    // // tpl2 = BAB; -> [B, B]
    // // tpl3 = ABAB -> ['', B, B]
    // // 可以解读到：模板字符串中变量必须是由非变量包含着的，如果变量在开始位置或者结束位置且没有非变量包含，那么该位置就是空字符串。
  }

  { // 标签模板
    let user = {
      name: 'list',
      info: 'hello world'
    };

    function abc(s, v1, v2) {
      console.log(s);
      console.log(v1);
      console.log(v2);
      console.log('------------');
      console.log(s.toString());
      console.log(s[0].toString());
      console.log(s[1].toString());
      console.log(s[2].toString());
      return s + v1 + v2
    }

    console.log(abc`i am ${user.name},${user.info}`);
  }

  {// “标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。
    // let message =
    //   SaferHTML`<p>${sender} has sent you a message.</p>`;

    // function SaferHTML(templateData) {
    //   let s = templateData[0];
    //   for (let i = 1; i < arguments.length; i++) {
    //     let arg = String(arguments[i]);
    //     // Escape special characters in the substitution.
    //     s += arg.replace(/&/g, "&amp;")
    //       .replace(/</g, "&lt;")
    //       .replace(/>/g, "&gt;");
    //     // Don't escape special characters in the template.
    //     s += templateData[i];
    //   }
    //   return s;
    // }
    // // 上面代码中，sender变量往往是用户提供的，经过SaferHTML函数处理，里面的特殊字符都会被转义。
    // let sender = '<script>alert("abc")</script>'; // 恶意代码
    // let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

    // message
    // // <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>

    // // 标签模板的另一个应用，就是多语言转换（国际化处理）。
    // i18n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`
  }
}

{ //String.raw 静态方法
  console.log(String.raw`Hi\n${1 + 2}`); //Hi\n3
  console.log(`Hi\n${1 + 2}`);
  // Hi
  // 3
}
