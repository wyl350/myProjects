
function hooks() {
  this.queue = new Array();
}
hooks.prototype.addAction = function (hook, func) {
  this.queue[hook] = new Array(); 
  if (typeof func == 'function') {
    this.queue[hook].push(func);
  } else if (typeof func == 'string') {
    this.queue[hook].push(this.window[func]);
  }
}
hooks.prototype.doAction = function (hook) {
  var parameters = Array.prototype.slice.call(arguments, 1); 
  var functions = this.queue[hook]; 
  for (var i = 0; i < functions.length; i++) {
    this.call_user_func_array(functions[i], parameters);
  } 
  return true;
}
hooks.prototype.call_user_func_array = function (cb, parameters) {
  if (typeof cb === 'string') {
    func = (typeof this[cb] === 'function') ? this[cb] : func = (newFunction(null, 'return ' + cb))();
  } else if (cb instanceof Array) {
    func = (typeof cb[0] == 'string') ? eval(cb[0] + "['" + cb[1] + "']") : func = cb[0][cb[1]];
  } else if (typeof cb === 'function') {
    func = cb;
  } if (typeof func != 'function') {
    throw new Error(func + ' is not a valid function');
  } if (typeof parameters == 'undefined') {
    var tmp_ary = []; var parameters = Array.prototype.slice.call(tmp_ary, 1);
  } 
  return (typeof cb[0] === 'string') ? func.apply(eval(cb[0]), parameters)
    (typeof cb[0] !== 'object') ? func.apply(null, parameters) : func.apply(cb[0], parameters)
}
