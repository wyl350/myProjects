	//接下来，我们引入代理B，即小明通过B 来给A 送花：
	var Flower = function(){};
	var xiaoming = {
		sendFlower: function( target){
			var flower = new Flower();
			target.receiveFlower( flower );
		}
	};
	var B = {
		receiveFlower: function( flower ){
			A.receiveFlower( flower );
		}
	};
	var A = {
		receiveFlower: function( flower ){
			console.log( '收到花 ' + flower );
		}
	};
  xiaoming.sendFlower( B );
  
  // 简单的代理