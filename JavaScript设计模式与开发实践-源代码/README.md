一本书的源码

javascript 设计模式与开发实践


补充：

# 工厂模式

工厂模式，主要是对对象的创建上面做文章，可以灵活的创建对象。

## 简单的工厂模式

简单的工厂模式：可以灵活的创建属性值不同的对象。

```js
function MakeCoffee(dou,water){
  var obj = new Object()
  obj.dou = dou
  obj.water = water
  obj.bili = dou/water
  return obj
}
var coffee = new MakeCoffee()
console.log(coffee.dou)
console.log(coffee.water)
console.log(coffee.bili)
console.log(coffee)

```

## 复杂的工厂模式

生产不同的对象，将不同的对象构建函数挂载在他的实例方法上面。

```js
function FruitMaker(){
  
}
FruitMaker.prototype.make = function (type, meta){
  if(typeof this[type] === 'function'){
    var func = this[type]
    return new func(meta)
  }else{
    throw '很抱歉，我们工厂生产不了这个产品。'
  }
}
FruitMaker.prototype.extend = function (obj){
  for(var key in obj){
    this[key] = obj[key]
  } // 在该类上面挂载方法,可以不断的扩展各种构建对象的方法。
}
var fruitmaker = new FruitMaker()
fruitmaker.extend({
  Apple：function (meta){
    console.log(`造了一杯苹果汁，材料有${meta}`)
  }
})
fruitmaker.make('Apple','一斤苹果一斤水。')
```
