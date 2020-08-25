你发现你的Javascript里面调用它的地方很多，每次都发起一个请求太费时间和资源，于是你打算给它加上缓存（为了说明问题，我们不用高阶函数：）  ）。

 

复制代码
var getConfig = (function () {
    var _configs = {};//缓存容器
    return function (key, callback) {
        if (_configs[key] === undefined) {
            $.get('/config/' + key, function (config) {
                _configs[key] = config;
                callback(null, config);
            }, 'json');
        } else {
            return callback(null,_configs[key]);
        }
    };
})();
复制代码
 

　　于是你就可以欢快的使用配置了，获取过的配置都会被缓存。

　　问题就出在这里，你运行以下代码

getConfig('db',function(err,config){
    console.log(config);//输出2
});
console.log('hello world');//输出1
　　在我们添加缓存之前的版本，我们每次运行该代码  都是先输出1，再输出2。但是在我们加了缓存后，假如缓存存在的话，我们的输出就变成了先输出2，再输出1，这样的情况或许在我们的事例中好像没有什么影响，但在有些情景下将会留下一些比较奇怪的bug。

　　这里的问题就是一个异步的不一致性问题，解决该问题可以这样。

复制代码
var getConfig = (function () {
    var _configs = {};//缓存容器
    return function (key, callback) {
        if (_configs[key] === undefined) {
            $.get('/config/' + key, function (config) {
                _configs[key] = config;
                return callback(null, config);
            }, 'json');
        } else {
            setTimeout(function(){//改动的地方
                return callback(null,_configs[key]);
            },0);
        }
    };
})();
复制代码
　　我们需要把callback的运行放到下一个tick中才运行，已保持getConfig函数的异步性质。

 

结论：当封装函数的时候如果是一个异步函数的时候，需要确保函数的回调一直都是异步的。（这里是个新手（如我）常见的小问题，但是养成一种好的习惯，有助于保证代码的健壮性）