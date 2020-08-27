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
