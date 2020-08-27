{   // ES6 for Humans: https://www.bookstack.cn/read/ES6-for-humans/README.md
    // 源网址： https://github.com/metagrover/ES6-for-humans

    // block scoping
    // function scope


    {   // 1. let, const and block scoping
        // let allows you to create declarations which are bound to any block, called block scoping. Instead of using var, which provides function scope, it is recommended to use block scoped variables (let or const) in ES6.

        var a = 2;
        {
            let a = 3;
            console.log(a); // 3
            let a = 5; // TypeError: Identifier 'a' has already been declared
        }
        console.log(a); // 2
        // Another form of block-scoped declaration is the const, which creates constants. In ES6, a const represents a constant reference to a value. In other words, Object's and Array's contents may change, only the re-assignment of the variable is prevented. Here's a simple example:

        {
            const b = 5;
            b = 10; // TypeError: Assignment to constant variable

            const arr = [5, 6];
            arr.push(7);
            console.log(arr); // [5,6,7]
            arr = 10; // TypeError: Assignment分配 to constant variable
            arr[0] = 3; // value is mutable
            console.log(arr); // [3,6,7]
        }
        // A few things to keep in mind:
        // Hoisting of let and const vary from the traditional hoisting of variables and functions （let 和const 是没有像传统变量和函数的那样提升作用的。）. Both let and const are hoisted, but cannot be accessed before their declaration仅仅是在声明之后提升, because of Temporal Dead Zone 临时死区
        // let and const are scoped to the nearest enclosing block.
        // When using const with fixed strings or values, CAPITAL_CASING might be appropriate (ex: const PI = 3.14)
        // const has to be defined with its declaration.必须声明
        // Always use const over let, unless you plan on re-assigning the variable. 能用over，就不要用let。
    }
    {   // 2. Arrow Functions

        // Arrow functions are a short - hand notation for writing functions in ES6.The arrow function definition consists of a parameter list(... ), followed by the => marker and a function body.For single - argument functions, the parentheses may be omitted.

        // Classical Function Expression
        function addition(a, b) {
            return a + b;
        };

        // Implementation with arrow function
        const addition = (a, b) => a + b;

        // With single argument, no parentheses required
        const add5 = a => 5 + a;
        // Note that in the above example, the addition arrow function is implemented with "concise body" which does not need an explicit return statement.Note the omitted { } after the =>.

        // Here is an example with the usual "block body." Including the curly brace wrappers.

        const arr = ['apple', 'banana', 'orange'];

        const breakfast = arr.map(fruit => {
            return fruit + 's';
        });

        console.log(breakfast); // ['apples', 'bananas', 'oranges']
        // Behold! There is more...

        // Arrow functions don't just make the code shorter. They are closely related to this binding behavior.

        // Arrow functions behavior with this keyword varies from that of normal functions.Each function in JavaScript defines its own this context but arrow functions capture the this value of the nearest enclosing context.Check out the following code:

        function Person() {
            // The Person() constructor defines `this` as an instance of itself.
            this.age = 0;

            setInterval(function growUp() {
                // In non-strict mode, the growUp() function defines `this`
                // as the global object, which is different from the `this`
                // defined by the Person() constructor.
                this.age++;
            }, 1000);
        }
        var p = new Person();
        // In ECMAScript 3 / 5, this issue was fixed by assigning the value in this to a variable that could be closed over.

        function Person() {
            const self = this;
            self.age = 0;

            setInterval(function growUp() {
                // The callback refers to the `self` variable of which
                // the value is the expected object.
                self.age++;
            }, 1000);
        }
        // As mentioned above, arrow functions capture the this value of the nearest enclosing context, so the following code works as expected, even with nested arrow functions.

        function Person() {
            this.age = 0;

            setInterval(() => {
                setTimeout(() => {
                    this.age++; // `this` properly refers to the person object
                }, 1000);
            }, 1000);
        }

        let p = new Person();
        // Read more about 'Lexical this'( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this 这是个非常好的网站) in arrow functions here        
    }
}
{   // 中文版本 ES6 for Humans: https://www.barretlee.com/blog/2016/07/09/a-kickstarter-guide-to-writing-es6/  感觉中文真的太垃圾了。
    {   // 1. let、const 和 block 作用域
        // let 允许创建块级作用域，ES6 推荐在函数中使用 let 定义变量，而非 var ：

        var a = 2;
        {
            let a = 3;
            console.log(a); // 3
        }
        console.log(a); // 2
        // 同样在块级作用域有效的另一个变量声明方式是 const ，它可以声明一个常量。ES6 中，const 声明的常量类似于指针，它指向某个引用，也就是说这个「常量」并非一成不变的，如：
        {
            const ARR = [5, 6];
            ARR.push(7);
            console.log(ARR); // [5,6,7]
            ARR = 10; // TypeError
        }
        // 有几个点需要注意：

        // let 关键词声明的变量不具备变量提升（hoisting）特性
        // let 和 const 声明只在最靠近的一个块中（花括号内）有效
        // 当使用常量 const 声明时，请使用大写变量，如：CAPITAL_CASING
        // const 在声明时必须被赋值
    }
}