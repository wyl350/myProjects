var myImage = (function(){
  var imgNode = document.createElement( 'img' );
  document.body.appendChild( imgNode );
  return {
    setSrc: function( src ){
      imgNode.src = src;
    }
  }
})();
myImage.setSrc( 'http://n.sinaimg.cn/photo/transform/700/w1000h500/20200403/423e-irtymmv7231491.jpg' );

// 上面使用一个闭包函数，这个闭包函数，打开网页就有开销，这个开销就直接生成了img节点。
