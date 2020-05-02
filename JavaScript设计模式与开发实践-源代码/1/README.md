# 多态

多态的意义：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。换句话说，给不同的对象发送同一个消息，这些对象会做出不同的反馈。

多态的思想，是很多语言必须要处理的问题，但是javascipt 语言，天生就具备这样的条件和功能。下面将一步步的进行导入介绍。
```js
var makeSound = function( animal ){     
  if ( animal instanceof Duck ){         
    console.log( '嘎嘎嘎' );     
  }else if ( animal instanceof Chicken ){         
    console.log( '咯咯咯' );     
  } 
};  
var Duck = function(){}; 
var Chicken = function(){};  
makeSound( new Duck() );      // 嘎嘎嘎 
makeSound( new Chicken() );   // 咯咯咯 
```

多态背后的思想是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事 物”与 “可能改变的事物”分离开来。在这个故事中，动物都会叫，这是不变的，但是不同类 型的动物具体怎么叫是可变的。

上面的例子中，做什么就是下达的指令，就是人这个对象下达的，人不关心谁去做以及怎么去做。鸭子和鸡就是“谁去做以及怎样去做”，这两者区分开，这就是多态的思想。

下面得方法是对上上述方法的改进。
```js
var makeSound = function( animal ){
  animal.sound(); 
}; 
var Duck = function(){}    
Duck.prototype.sound = function(){
  console.log( '嘎嘎嘎' );        
};  
var Chicken = function(){}  
Chicken.prototype.sound = function(){
  console.log( '咯咯咯' ); 
};  
makeSound( new Duck() );        // 嘎嘎嘎 makeSound( new Chicken() );     // 咯咯咯 
```

注意上面的 makeSound 方法，这个方法在 java 语言中，显然是要进行类型检测的，因此 传入的animal 类型必须是确定的，不能像javascript语言这样，可以随意的传入任何对象。

现在对该方法增加对象，进行扩展。

```js
var Dog = function(){}  
Dog.prototype.sound = function(){     
  console.log( '汪汪汪' ); 
};  
makeSound( new Dog() );     // 汪汪汪 
```

java 语言实现多态的效果，一般是通过继承的机制，包括实现继承和接口继承两类。
```js
public abstract class Animal {     
  abstract void makeSound();   // 抽象方法 
}   
public class Chicken extends Animal{     
  public void makeSound(){         
    System.out.println( "咯咯咯" );     
  } 
}  
public class Duck extends Animal{     
  public void makeSound(){         
    System.out.println( "嘎嘎嘎" );     
  } 
}  
Animal duck = new Duck();       // (1) 
Animal chicken = new Chicken();    // (2) 

public class AnimalSound{     
  public void makeSound( Animal animal ){    // 接受 Animal 类型的参数         
    animal.makeSound();     
  }
}  
public class Test {     
  public static void main( String args[] ){
    AnimalSound animalSound= new AnimalSound ();         
    Animal duck = new Duck();         
    Animal chicken = new Chicken();
    animalSound.makeSound( duck );    // 输出嘎嘎嘎         
    animalSound.makeSound( chicken );        // 输出咯咯咯   
  } 
}
```

实现多天，在java中是通过向上转型实现的，但是在 javascript 中，多态是天生的。实现多态的关键是消除类型上面的耦合关系。如果类型之间的耦合关系没有被消除，那么就无法实现多态。显然 javascript 语言的变量在运行期间是可变的，一个变量类型既可以表示Duck类型，也可以表示 checken 类型，这意味着 javascript 对象的多态性是与生俱来的。因为他在编译阶段是没有类型检查的，既没有检查创建的对象类型，又没有检查传递的参数类型。上面的例子对于js语言来说，某一种动物能否发出叫声，只是取决于它又没有 makesound方法，而不是取决于它是某种类型的对象。

多态的作用：多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句。
```js
var googleMap = {     
  show: function(){         
    console.log( '开始渲染谷歌地图' );    
  } 
};  
var renderMap = function(){     
  googleMap.show();    
};  
renderMap();    // 输出：开始渲染谷歌地图 

// 这个方法及其的笨拙，下面改进

var googleMap = {     
  show: function(){         
    console.log( '开始渲染谷歌地图' );     
  } 
};  
var baiduMap = {     
  show: function(){         
    console.log( '开始渲染百度地图' );     
  } 
};  
var renderMap = function( type ){     
  if ( type === 'google' ){         
    googleMap.show();         
  }else if ( type === 'baidu' ){         
    baiduMap.show();     
  } 
};
renderMap( 'google' );    // 输出：开始渲染谷歌地图  
renderMap( 'baidu' );     // 输出：开始渲染百度地图 
// 这个方法实现了多中方式的选取，但是仍然笨拙。下面继续改进。

var renderMap = function( map ){     
  if ( map.show instanceof Function ){         
    map.show();     
  } 
};
renderMap( googleMap );    // 输出：开始渲染谷歌地图  
renderMap( baiduMap );     // 输出：开始渲染百度地图 
// 这个方法就完成了类似于 java 多态的功能。下面来增加方式。
var sosoMap = {     
  show: function(){         
    console.log( '开始渲染搜搜地图' );     
  } 
};  
renderMap( sosoMap );     // 输出：开始渲染搜搜地图 
// 这个方法增加一个渲染对象，仍然能够生效，非常的方便。

// 命令模式组合模式和策略模式都用到了这里的多态。



```
# 封装

封装的目的就是隐藏

封装的类型可以分为两种：一种封装实现，这是最常见的封装，一种是封装数据。这里讲解的封装会做拓展，包括封装类型和封装变化。

## 封装数据

封装数据，更是类似于权限的封装，类似java语言中的 privat、 public 、protect等等。

老师提到了Symbol 也是可以封装私有属性的，这里我没有看。我已经下载到了这里的同级目录。

封装的目的是将信息隐藏，封装应该被视为“任何形式的封装”，也就是说，封装不仅仅是 隐藏数据，还包括隐藏实现细节、设计细节以及隐藏对象的类型等。 

## 封装实现

我认为这是最常见的封装。封装api，仅仅是暴露这个api的接口。

## 封装类型

这对于java语言是非常的重要的。通过抽象类和接口来实现的，把对象的类型隐藏于抽象类或者接口之后，因为相比对象的类型，客户关注的是对象的的行为。据此，java语言中诞生了工厂方法模式、组合模式等。

## 封装变化

封装变化，是设计模式更应该且更关注的地方。封装变化是许多设计模式的主题和原则。

将程序划分为变化的部分和不变化的部分，可以最大程度的促使程序的可扩展性和稳定性。

我们想办法吧程序中变化的部分封装好之后，剩下的即是稳定而可复用的部分了。








# 原型模式和基于原型继承的javascript 对象系统

面向对象的编程语言中，分为两种，一种是基于类的编程，一种是基于对象克隆的方式（原型模式的天然实现。但是这个方法比用构造器创建对象的方式要慢。Object.create 就是克隆对象的方法）。

原型模式不单是一种设计模式，也是一种编程泛型。

## 克隆
```js
var Plane = function(){
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

var clonePlane = Object.create( plane );
console.log( clonePlane );  // 输出：Object {blood: 500, attackLevel: 10, defenseLevel: 7}

//在不支持Object.create 方法的浏览器中，则可以使用以下代码：
Object.create = Object.create || function( obj ){
  var F = function(){};
  F.prototype = obj;
  return new F();
}
```



## javascript 的原型继承

### javascript 的继承机制
javascript 语言 并不是以对象类构建的编程语言，而是以原型链的方式构建的对象体系，但这也仅仅是构建对象的体系不同，并不能说javascript 不是对象式编程。

javascript 是一门完全的对象式编程语言。

javascript 语言要得到一个对象，不是通过实例化类的方式，而是找到一个原型并克隆它。

```js
function Person( name ){     this.name = name; };  
Person.prototype.getName = function(){     return this.name; };  
var a = new Person( 'sven' )  // 输出：sven
console.log( a.name ); // console.log( a.getName() );    
sven console.log( Object.getPrototypeOf( a ) === Person.prototype );     // 输出：true 
```

在这里 Person 并不是类，而是函数构造器，JavaScript的函数既可以作为普通函数被调用， 也可以作为构造器被调用。当使用 new 运算符来调用函数时，此时的函数就是一个构造器。 用 new 运算符来创建对象的过程，实际上也只是先克隆 Object.prototype 对象，再进行一些其他额 外操作的过程。

javascript 没有类的概念，所谓的es6中的类的语法，其实都是构造器函数甚至是原型链继承机制的语法糖。

### 原型继承的本质

```js
function Person( name ){     this.name = name; };  
Person.prototype.getName = function(){     return this.name; };  
var objectFactory = function(){

  var obj = new Object(),    // 从 Object.prototype 上克隆一个空的对象        

  Constructor = [].shift.call( arguments );    // 取得外部传入的构造器，此例是 Person 

  obj.__proto__ = Constructor.prototype;    // 指向正确的原型     
  var ret = Constructor.apply( obj, arguments );    // 借用外部传入的构造器给 obj 设置属性  

  return typeof ret === 'object' ? ret : obj;     // 确保构造器总是会返回一个对象 

};  
var a = objectFactory( Person, 'sven' );  

console.log( a.name );    // 输出：sven 
console.log( a.getName() );     // 输出：sven 
console.log( Object.getPrototypeOf( a ) === Person.prototype );      // 输出：true 
```

对于javascript 语言来讲，并不能说对象有原型，而是对象的构造器有原型。

### 原型继承的未来

设计模式在很多时候其实都体现了语言的不足之处，设计模式是对语言不足的补充，如果要使用设计模式，不如去找一门更好的语言。

设计模式本质上也是一种拐弯抹角的的编程方式。

当然随着 javascript 的发展，很多的设计模式本身会被语言吸收，成为语言的天然实现。例如 Object.create 方法，本身就是 原型模式的天然实现。但是这个方法比用构造器创建对象的方式要慢。Object.create(null) 创造的是一个没有原型的对象。





