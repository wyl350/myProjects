/**
     * 果汁工厂
     * @constructor
     */
function FruitMaker() {

  this.Apple = function (meta) {
    console.log('造出一杯苹果汁, 材料包括:', meta);
  };

  this.Pear = function (meta) {
    console.log('造出一杯梨子汁, 材料包括:', meta);
  };
}


/**
 * 对外招商
 * @param type 类型
 * @param meta 材料
 */
FruitMaker.prototype.make = function (type, meta) {
  // 2.1 根据传入, 检测, 是否具备生产能力
  if (typeof this[type] === 'function') {
    // 2.2 如果具备, 使用生产线去生产
    var func = this[type];
    //  2.3 修改生产厂家(对外统一)
    func.prototype = FruitMaker.prototype;

    // console.log(func);
    // 2.4 返回产品
    return new func(meta);
  } else {
    throw '很抱歉, 公司暂时不能生产这种果汁, ....';
  }

};

FruitMaker.prototype.extend = function (obj) {
  for (var key in obj) {
    this[key] = obj[key];
  }
};


// 工厂的扩展生产线
FruitMaker.prototype.extend({
  // 苹果汁
  'Apple': function (meta) {
    console.log('造出一杯苹果汁, 材料包括:', meta);
  },
  // 梨子汁
  'Pear': function (meta) {
    console.log('造出一杯梨子汁, 材料包括:', meta);
  }
});
// 这里我有一个重大的发现，就是实例方法，可以在没有实例对象的情况下，直接调用实例方法。


var maker = new FruitMaker();
console.log(maker);

maker.extend(
  {
    Banana: function (meta) {
      console.log('造出一杯香蕉汁, 材料包括:', meta);

    }
  }
)
console.log(maker);

var appleObj = maker.make('Apple', '一个苹果, 一斤水');
console.log(appleObj.constructor.name);

var pearObj = maker.make('Pear', '一个梨子, 一斤水');
console.log(pearObj.constructor.name);

var bananaObj = maker.make('Banana', '一个香蕉, 一斤水');
console.log(bananaObj.constructor.name);