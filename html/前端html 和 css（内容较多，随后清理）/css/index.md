

# CSS样式表知识总结
## 分类
1. 内联style=“样式”，属性写道标签里面
    ```html
    <div style="width: 100px;height: 100px;background-color: red;">
    </div>
    ```
1. 内嵌 嵌在页面的<head></head> type="text/css" 可以省略
    ```html
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style type="text/css">

        </style>
    </head>
    ```
1. 外部 在head标签内引入
    ```html
    <link rel="stylesheet" type="text/css" href="0809.css"/>
    ```
## 标签选择器 种类
1. 基础选择器
    1. 标签名选择器
        ```html
        div{
          color:red;
        }
        ```
    1. 类选择器
        ```html
        .red{
          color:red;
        }
        ```
    1. Id选择器
        ```html
        #mybtn{
          color:red;
        }
        ```
    1. 通配符选择器
        ```html
        *{
          color:red;
        }
        ```
1. 复合选择器
    1. 后代选择器 #list li 
        1. 可以指定儿子和孙子
    1. 交集选择器
        1. p.red{}  p标签和red类选择器交集
    1. 伪类选择器
        1. a:Link 表示链接在没有被点击时的样式,选中所有 a 标签的初始状态,并设置标签原来的样式
        1. a:Visited 表示链接已经被访问后的样式，选中所有 id 为 a 的标签，并设置访问后的样式
        1. a:Hover 表示当鼠标悬停在链接上面时的样式,选中所有的类属性为 b 的标签，并设置鼠标悬停时的样式
        1. a:active 表示链接被激活即鼠标按下不放时的状态，选中所有 a 标签，并设置鼠标按下不放时的样式
        1. 特别注意：顺序不能发生改变。
        1. 实际开发中多用
            ```html
            a {
              color: #333;text-decoration:none;
            }
            .nav a:hover {
              color: orange;
            }
            ```
    1. 子元素选择器 div>p
        1. 不能指定孙子的标签样式
    1. 并集选择器 div，span,red{} 集体声明使用
CSS 样式属性：
1. 字体
    1. font-size：字体大小  font-size：20px
        1. em:相当于当前对象内文本的字体尺寸
        1. px:像素
        1. cm:厘米
        1. mm:毫米
        1. pt:点
        1. in:英寸
    1. font-family：字体样式
        1. font-family: Arial, "Microsoft YaHei", "微软雅黑" , "黑体";	 /* 依次寻找字体 如果都没有，则是默认电脑字体。*/
    1. font-weight：粗细
        1. strong 和 b 标签是一样的。
        1. bold  700
        1. normal 400
        1. bolder 
        1. light 
        1. number 100-900 没有单位
    1. font-style：italic; normal 
        1. em或者i标签的功能相同
        1. normal 
        1. italic倾斜
    1. 综合写法：/* font: font-style  font-weight
        1. font-size/line-height  font-family;后面两个font-size  font-family;  不能省略。
    1. letter-spacing:字间距
        > letter-spacing属性用于定义字间距，所谓字间距就是字符与字符之间的空白。其属性值可为不同单位的数值，允许使用负值，默认为normal。
    1. word-spacing:单词间距
        > word-spacing属性用于定义英文单词之间的间距，对中文字符无效。和letter-spacing一样，其属性值可为不同单位的数值，允许使用负值，默认为normal。
    1. word-spacing和letter-spacing均可对英文进行设置。不同的是letter-spacing定义的为字母之间的间距，而word-spacing定义的为英文单词之间的间距。
1. 文本
    1. text-indent: 首行缩进
        > text-indent属性用于设置首行文本的缩进，其属性值可为不同单位的数值、em字符宽度的倍数、或相对于浏览器窗口宽度的百分比%，允许使用负值, 建议使用em作为设置单位。1em 就是一个字的宽度   如果是汉字的段落， 1em 就是一个汉字的宽度
    1. text-align
        > text-align属性用于设置文本内容的水平对齐，相当于html中的align对齐属性。其可用属性值如下：
        1. center
        1. left
        1. right
    1. text-decoration:
        1. none
        1. overline
        1. line-through
        1. underline
        1. blink  兼容性差
1. 外观设置
    1. color：字体颜色
        1. 颜色半透明(css3)
            > 文字颜色到了CSS3我们可以采取半透明的格式了语法格式如下：
            1. `color: rgba(r,g,b,a)`  
                > a 是alpha  透明的意思  取值范围 0~1之间    color: rgba(0,0,0,0.3)   多用在盒子上。
    1. line-height:行间距  行高 属性值同 font-size    
        > ine-height属性用于设置行间距，就是行与行之间的距离，即字符的垂直间距，一般称为行高。 line-height 常用的属性值单位有三种，分别为像素px，相对值em和百分比%，实际工作中使用最多的是像素px一般情况下，行距比字号大7.8像素左右就可以了。
        1. 中文的顶、中、底分别是顶线、中线、底线。
        1. 基线是以英文为参照点的，注意，行高和行间距不同。上面的说法是不准确的。行间距+文字的高度=行高。
        1. 如何设置行高，来完成设置文字垂直居中？要使用font-size 和 line-height ，font-size=16  line-height=50   秘诀：height 和 line-height 设置为相同的高度就能让内容垂直居中。
    1. text-shadow 文字阴影(CSS3)
        > 以后我们可以给我们的文字添加阴影效果了  Shadow  影子  text-shadow:水平位置 垂直位置 模糊距离 阴影颜色;
1. 大小
    1. width：宽度
    1. height：高度
1. 背景
    1. background-color：背景颜色
        1. transparent 默认
        1. color
    1. background-image： 背景图片
        > background-image 属性允许指定一个图片展示在背景中（只有CSS3才可以多背景）可以和 background-color 连用。 如果图片不重复地话，图片覆盖不到地地方都会被背景色填充。 如果有背景图片平铺，则会覆盖背景颜色。小技巧：  我们提倡 背景图片后面的地址，url不要加引号。
        1. none
        1. url(./f.jpg)  
            1. 必须加 url
            1. 地址不要加引号
            1. 可以覆盖背景颜色
    1. background-repeat：背景平铺方式
        1. repeat
        1. no-repeat  可以露出背景色
        1. repeat-x 水平平铺
        1. repeat-y 垂直平铺
    1. background-position：背景位置
        > length : 　百分数 | 由浮点数字和单位标识符组成的长度值。
        1. 方位名词:
            1. top 
            1. center 
            1. bottom 
            1. left 
            1. center 
            1. right 
        1. 举例
            - background-position：50%，50%; 要求顺序
            - background-position：center,center;   方位名词顺序不影响
            - background-position：15px,20px; 要求顺序
        1. 说明： 设置或检索对象的背景图像位置。必须先指定background-image属性。默认值为：(0% 0%)。如果只指定了一个值，该值将用于横坐标。纵坐标将默认为50%。第二个值将用于纵坐标。
        1. position 后面是x坐标和y坐标。 可以使用方位名词或者 精确单位。如果和精确单位和方位名字混合使用，则必须是x坐标在前，y坐标后面。比如 background-position: 15px top;   则 15px 一定是  x坐标   top是 y坐标。实际工作用的最多的，就是背景图片居中对齐了。
    1. background-attachment	背景固定还是滚动
        1. scroll  默认值
        1. fixed  固定的
    1. 背景的合写（复合属性）
        1. background:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置
            > 注意：是没有顺序的
            - background: #ccc url(images/sms.jpg) no-repeat fixed center top;

    1. background-size：背景尺寸

## CSS 三大特性
> 层叠 继承  优先级 是我们学习CSS 必须掌握的三个特性。
1. CSS层叠性
    > 所谓层叠性是指多种CSS样式的叠加。是浏览器处理冲突的一个能力,如果一个属性通过两个相同选择器设置到同一个元素上，那么这个时候一个属性就会将另一个属性层叠掉,比如先给某个标签指定了内部文字颜色为红色，接着又指定了颜色为蓝色，此时出现一个标签指定了相同样式不同值的情况，这就是样式冲突。一般情况下，如果出现样式冲突，则会按照CSS书写的顺序，以最后的样式为准。样式冲突，遵循的原则是就近原则。 那个样式离着结构近，就执行那个样式。样式不冲突，不会层叠。
1. CSS继承性
    > 所谓继承性是指书写CSS样式表时，子标签会继承父标签的某些样式，如文本颜色和字号。想要设置一个可继承的属性，只需将它应用于父元素即可。简单的理解就是：  子承父业。注意：恰当地使用继承可以简化代码，降低CSS样式的复杂性。子元素可以继承父元素的样式。
    1. 可以继承的属性
        1. text-
        1. font-
        1. line-
        1. color
1. CSS优先级
    > 定义CSS样式时，经常出现两个或更多规则应用在同一元素上，这时就会出现优先级的问题。(选择器不同就会出现优先级的问题了)在考虑权重时，初学者还需要注意一些特殊的情况，具体如下：
    1. 权重由轻至重
        1. 继承样式 通配符选择器设置的样式
        1. 标签选择器
        1. 类选择器
        1. ID选择器
        1. 行内选择器
        1. !important 
            ```html
            div{
              color:pink!important
            }
            ```
    1. 注意：的权重为0。即在嵌套结构中，不管父元素样式的权重多大，被子元素继承时，他的权重都为0，也就是说子元素定义的样式会覆盖继承来的样式。
## Emmet 语法快速生成
## 标签显示模式（display）
> HTML标签一般分为块标签和行内标签两种类型，它们也称块元素和行内元素。具体如下：
1. 块级元素(block-level)
    > 每个块元素通常都会独自占据一整行或多整行，可以对其设置宽度、高度、对齐等属性，常用于网页布局和网页结构的搭建。
    1. 常见块级元素
        1. `<div>`
        1. `<ul>`
        1. `<ol>`
        1. `<li>`
        1. `<h1><h6>` 文字类块级标签,里面不能放其他块级元素。
        1. `<p>`  文字类块级标签,里面不能放其他块级元素。
        1. `<dt>` 文字类块级标签,里面不能放其他块级元素。
    1. 块级元素的特点：
        1. 总是从新行开始
        1. 高度，行高、外边距以及内边距都可以控制。
        1. 宽度默认是容器的100%
        1. 可以容纳内联元素和其他块元素。
1. 行内元素(inline-level)
    > 行内元素（内联元素）不占有独立的区域，仅仅靠自身的字体大小和图像尺寸来支撑结构，一般不可以设置宽度、高度、对齐等属性，常用于控制页面中文本的样式。
    1. 常见的行内元素有
        1. `<span>`
        1. `<a>`
        1. `<strong>`
        1. `<b>`
        1. `<em>`
        1. `<i>`
        1. `<del>`
        1. `<s>`
        1. `<ins>`
        1. `<u>`
    1. 行内元素的特点：
        1. 和相邻行内元素在一行上。
        1. 高、宽无效，但水平方向的padding和margin可以设置，垂直方向的无效。
        1. 默认宽度就是它本身内容的宽度。
        1. 行内元素只能容纳文本或则其他行内元素。（a特殊）
1. 注意：
    1. 只有 文字才 能组成段落  因此 p  里面不能放块级元素，同理还有这些标签h1,h2,h3,h4,h5,h6,dt，他们都是文字类块级标签，里面不能放其他块级元素。
    1. a链接里面不能再放链接。但是a标签是可以再放块级元素的，最好的方式就是转化为块级显示后，再放块级元素。
1. 行内块元素（inline-block）
    > 在行内元素中有几个特殊的标签——`<img />`、`<input />`、`<td>`，可以对它们设置宽高和对齐属性，有些资料可能会称它们为行内块元素。
    1. 常见的行内块元素
        1. `<img />`
        1. `<input />`
        1. `<td>`
    1. 行内块元素的特点：
        1. 和相邻行内元素（行内块）在一行上,但是之间会有空白缝隙。
        1. 默认宽度就是它本身内容的宽度。
        1. 高度，行高、外边距以及内边距都可以控制。
1. 标签显示模式转换 display
    1. 块转行内：display:inline;
    1. 行内转块：display:block;
    1. 块、行内元素转换为行内块： display: inline-block;
    1. 此阶段，我们只需关心这三个，其他的是我们后面的工作，显示模式非常的多。    
    1. 常见显示模式
        1. inline
        1. block
        1. inline-block
    
## 盒子模型（CSS重点）
    > 其实，CSS就三个大模块：  盒子模型 、 浮动 、 定位，其余的都是细节。要求这三部分，无论如何也要学的非常精通。所谓盒子模型就是把HTML页面中的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。每个矩形都由元素的内容、内边距（padding）、边框（border）和外边距（margin）组成。看透网页布局的本质,网页布局中，我们是如何把里面的文字，图片，按照美工给我们的效果图排列的整齐有序呢？看透网页布局的本质：  把网页元素比如文字图片等等，放入盒子里面，然后利用CSS摆放盒子的过程，就是网页布局。
1. 盒子边框（border）
    1. border-width 
        1. border-width : 1px;
    1. border-style
        1. none：没有边框即忽略所有边框的宽度（默认值）
        1. solid：边框为单实线(最为常用的)
        1. dashed：边框为虚线  
        1. dotted：边框为点线
        1. double：边框为双实线
    1. border-color
    1. 符合写法：没有顺序  styborder-widthle  border-style border-color
        1. 5px dotted pink
        1. 1px solod orange
    1. 边框也是可以分别单独设置
        1. 上边框 top    border-top
            - border-top-style:样式
            - border-top-width:宽度
            - border-top-color:颜色
            - border-top:宽度 样式 颜色
        1. 下边框 bottom border-bottom
            - border-bottom-style:样式
            - border- bottom-width:宽度
            - border- bottom-color:颜色
            - border-bottom:宽度 样式 颜色
        1. 左边框 left border-left
            - border-left-style:样式
            - border-left-width:宽度
            - border-left-color:颜色
            - border-left:宽度 样式 颜色
        1. 右边框 right border-right
            - border-right-style:样式
            - border-right-width:宽度
            - border-right-color:颜色
            - border-right:宽度 样式 颜色
    1. 统一设置四边单独的样式
        1. 样式综合设置	
            1. border-style:上边 [右边 下边 左边]
        1. 宽度综合设置	
            1. border-width:上边 [右边 下边 左边]
        1. 颜色综合设置	
            1. border-color:上边 [右边 下边 左边]
        1. 边框综合设置	
            1. border:四边宽度 四边样式 四边颜色
1. 表格的细线边框
    > 以前学过的html表格边框很粗，这里只需要CSS一句话就可以美观起来。 让我们真的相信，CSS就是我们的白马王子（白雪公主）。
    ```html
    table,
    th,
    tr{ 
      border-collapse:collapse; /*让表格的两个边框合并后不是2个边框，而是一个边框。*/
      border:1px solid red
      }
    ```
1. 内边距（padding）
    > padding属性用于设置内边距。  是指 边框与内容之间的距离。padding 是可以撑开盒子的大小，把盒子的大小放大。  
    > 注意：盒子的实际大小=内容的宽度和高度+内边框+边框  
    > width属性和height属性，实际上指的是content 的宽度和高度。  
    > 
    1. padding 简写 复合写法
        1. padding：5px;统一设置
        1. padding: 20px; 上下左右 都是 20 内边距
        1. padding: 10px 20px; 上下10  左右 20 内边距
        1. padding: 10px 20px 30px; 上 10  左右 20  下 30 内边距
        1. padding: 10px 20px 30px 40px;  上10 右 20  下 30 左 40 顺时针
        > 综合上面，一般的顺序是：顺时针，上右下左。
    1. 分别设置
        1. padding-top:上内边距
        1. padding-right:右内边距
        1. padding-bottom:下内边距
        1. padding-left:左内边距
    1. 重要例子    
        ```html
        div {
          width: 200px;
          height: 200px;
          background-color: pink;
        }
        p {	
          /*width: 200px;*/
          height: 30px;
          background-color: purple;
          padding-left: 30px;
          /*特殊情况， 如果这个盒子啊，没有宽度 则padding 不会撑开盒子.有宽度则会撑开盒子。*/
          /*我推断原因是：不给宽度，则p元素的宽度就会根据padding的值灵活变化。*/
        }
        ```
1. 外边距（margin）
    > margin属性用于设置外边距。  设置外边距会在元素之间创建“空白”， 这段空白通常不能放置其他内容。
    1. margin;统一设置
    1. margin-top:上外边距
    1. margin-right:右外边距
    1. margin-bottom:下外边距
    1. margin-left:上外边距
    1. margin:上外边距 右外边距  下外边距  左外边
        > 取值顺序跟内边距相同。
1. 外边距实现盒子居中
    > 可以让一个盒子实现水平居中，需要满足以下条件：
    1. 必须是块级元素。     
    1. 盒子必须指定了宽度（width）
    1. 然后就给左右的外边距都设置为auto，就可使块级元素水平居中。
    1. 实际工作中常用这种方式进行网页布局，示例代码如下(一定要设置宽度，没有宽度的盒子，他的盒子就是通栏的宽度，和网页的宽度是一样的，那么就不存在居中对齐的概念了。)：
        - .header{ width:960px; margin:0 auto;}左右是auto
        - margin-left:auto;margin-right:auto;
        - margin:auto;  上右下左都是auto，注意上下auto其实是没有任何作用的，因为上下的举例是无限的。
        - margin:0 auto; 上下是0，左右是auto
1. 文字盒子居中图片和背景区别
    1. margin：auto 是让盒子居中对齐，但是盒子里面的文字如何居中对齐，需要使用text_align：center。同时 text_align：center也能让行内块元素居中。
    1. 插入图片 我们用的最多 比如产品展示类 margin：50px
    1. 背景图片我们一般用于小图标背景 或者 超大背景图片，背景图片移动位置，必须使用 background-position。
    1. 例子
        ```html
        section img {  
                width: 200px;/* 插入图片更改大小 width 和 height */
                height: 210px;
                margin-top: 30px;  /* 插入图片更改位置 可以用margin 或padding  盒模型 */
                margin-left: 50px; /* 插入当图片也是一个盒子 */
            }
        aside {
                width: 400px;
                height: 400px;
                border: 1px solid purple;
                background: #fff url(images/sun.jpg) no-repeat;
            
                background-size: 200px 210px; /*  背景图片更改大小只能用 background-size */
                background-position: 30px 50px; /* 背景图片更该位置 我用 background-position */
            }
        ```
1. 清除元素的默认内外边距
    > 很多元素都是默认都有margin 和 pedding的值的。为了更方便地控制网页中的元素，制作网页时，可使用如下代码清除元素的默认内外边距：
    ```html
    * {
      padding:0;         /* 清除内边距 */
      margin:0;          /* 清除外边距 */
    }
    ```
    1. 注意：行内元素是只有左右外边距的，是没有上下外边距的。 内边距，在ie6等低版本浏览器也会有问题。我们尽量不要给行内元素指定上下的内外边距就好了。
1. 外边距合并
    > 使用margin定义块元素的垂直外边距时，可能会出现外边距的合并。相邻块元素垂直外边距的合并,当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom，下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和，而是两者中的较大者。这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。
    1. 解决方案：只给一个盒子添加外边距。
1. 嵌套块元素垂直外边距的合并
    > 对于两个嵌套关系的块元素，如果父元素**没有上内边距及边框**，则父元素的上外边距会与子元素的上外边距发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。
    1. 解决方案
        1. 可以为父元素定义1像素的上边框
        1. 可以为父元素定义上内边距。
        1. 可以为父元素添加overflow:hidden。
1. 圆角边框(CSS3)
    > 从此以后，我们的世界不只有矩形。radius 半径（距离） 
    1. border-radius: 左上角  右上角  右下角  左下角;
        - border-radius:100px
    ```html
    <style>
          div {
              width: 200px;
              height: 200px;
              border: 1px solid red;
          }
          div:first-child {  /* 结构伪类选择器 选亲兄弟 */
              border-radius: 10px;  /*  一个数值表示4个角都是相同的 10px 的弧度 */ 
          }
  ​
          div:nth-child(2) {
              /*border-radius: 100px;    取宽度和高度 一半  则会变成一个圆形 */
              border-radius: 50%;   /*  100px   50% 取宽度和高度 一半  则会变成一个圆形 */
          }
  ​
          div:nth-child(3) {
              border-radius: 10px 40px;  /* 左上角  和 右下角  是 10px  右上角 左下角 40 对角线 */
          }
          
          div:nth-child(4) {
              border-radius: 10px 40px  80px;   /* 左上角 10    右上角  左下角 40   右下角80 */
          }
          div:nth-child(5) {
              border-radius: 10px 40px  80px  100px;   /* 左上角 10    右上角 40  右下角 80   左下角   右下角100 */
          }
          div:nth-child(6) {
              border-radius: 100px;  
              height: 100px; 
          }
          div:nth-child(7) {
              border-radius: 100px 0;  
          }   
          </style>
    ```
1. 盒子阴影
    1. box-shadow:水平阴影 垂直阴影 模糊距离 阴影尺寸 阴影颜色  内/外阴影；前两个属性是必须写的。其余的可以省略。
外阴影 (outset) 但是不能写    默认      想要内阴影  inset 
  ```html
  <style>
      div {
          width: 200px;
          height: 200px;
          border: 10px solid red;
          /* box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, .4);  */
          /* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */
          box-shadow: 0 15px 30px  rgba(0, 0, 0, .4);
      }
  </style>

  ```

## CSS书写规范
1. 空格规范
    > 【强制】 选择器 与 { 之间必须包含空格。
    - 示例： .selector { }

    > 【强制】 属性名 与之后的 : 之间不允许包含空格， : 与 属性值 之间必须包含空格。
    - font-size: 12px;

1. 选择器规范
    > 【强制】 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。【建议】 选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。
    ```html
    <style>
    /* good */
    .post,
    .page,
    .comment {
        line-height: 1.5;
    }
    /* bad */
    .post, .page, .comment {
        line-height: 1.5;
    }
    </style>
    ```

    ```html
        <style>
            /* good */
            #username input {}
            .comment .avatar {}
            /* bad */
            .page .header .login #username input {}
            .comment div * {}
        </style>
    ```
1. 属性规范
    1. 【强制】 属性定义必须另起一行。
    ```html
    <style>
    /* good */
    .selector {
        margin: 0;
        padding: 0;
    }

    /* bad */
    .selector { margin: 0; padding: 0; }
    </style>
    ```
    1. 【强制】 属性定义后必须以分号结尾。
        ```html
        <style>
          /* good */
          .selector {
              margin: 0;
          }
          /* bad */
          .selector {
              margin: 0
          }
        </style>
        ```
## 浮动(float)
> 本质就是摆放盒子.前面我们说过，网页布局的核心，就是用CSS来摆放盒子位置。如何把盒子摆放到合适的位置？CSS的定位机制有3种：普通流（标准流）、浮动、定位。
1. 普通流(normal flow)
    > 这个单词很多人翻译为 文档流 ， 字面翻译  普通流 或者标准流都可以。html语言当中另外一个相当重要的概念----------标准流！或者普通流。普通流实际上就是一个网页内标签元素正常从上到下，从左到右排列顺序的意思，比如
    1. 块级元素会独占一行，
    1. 行内元素会按顺序依次前后排列；
    > 按照这种大前提的布局排列之下绝对不会出现例外的情况叫做普通流布局。


1. 浮动(float)
    > 概念：
    1. 脱离标准普通流的控制；
    2. 移动到指定的位置。
    > 在CSS中，通过float属性来定义浮动，其基本语法格式如下：选择器{float:属性值;}
    1. 属性值：  
        1. left	元素向左浮动   
        1. right	元素向右浮动  
        1. none	元素不浮动（默认值）
    1. 特点：
        1. 和行内块以及行内元素是不发生重叠的现象的。块级元素发生重叠的现象的，会覆盖标准盒子。
        1. 浮动是可以改变display属性的，变成了行内块元素（inline-block）。
        1. 浮动块如果没有设置宽度，那么他的宽度就是随内容发生变化。
        1. 浮动元素默认之间是没有缝隙的。
        1. 浏览器宽度变小后，后面的浮动的元素，会另起一行。
        1. 浮动跨级元素需要和父级元素配合使用。父级元素应该是标准流的元素。浮动的元素相互靠在一起，如果浮动的元素超出了父级标准流的盒子，那么多出的浮动的盒子就会另起一行对齐。子盒子的浮动是要受到父盒子的限制的，例如要受到父盒子的边框和内边距的限制的。
        1. 开发技巧：很多情况下，父级元素是不方便给高度的，让浮动的子元素来决定父元素的高度，。其实标准流也是这么设置的。
        1. 浮动的目的：就是让多个行内块级元素一行显示。
        1. 

1. 清除浮动
    > 父级元素因为子级浮动引起内部高度为0 的问题。这个问题是，如果父级元素没有设置高度，但是子元素有事浮动元素的话，那么父级元素就会变得高度为0，那么父级元素并列的后边的元素就会上来。这是个非常大的问题。

    1. 为什么要清除浮动。我们前面说过，浮动本质是用来做一些文字混排效果的，但是被我们拿来做布局用，则会有很多的问题出现， 但是，你不能说浮动不好 。 由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响，为了解决这些问题，此时就需要在该元素中清除浮动。准确地说，并不是清除浮动，而是清除浮动后造成的影响
    1. 清除浮动本质：清除浮动主要为了解决父级元素因为子级浮动引起内部高度为0 的问题。




1. 清除浮动的方法
    > 其实本质叫做闭合浮动更好一些, 记住，清除浮动就是把浮动的盒子圈到里面，让父盒子闭合出口和入口不让他们出来影响其他元素。
    1. 额外标签法
        > 在CSS中，clear属性用于清除浮动,使用方法：在所有的浮动子元素的后面再加上一个空盒子，设置他的属性为：{clear:both;}。其基本语法格式如下：  
        1. 选择器{clear:属性值;}属性值如下
            1. left {clear:left;}
            1. right {clear:right;}
            1. both {clear:both;}
    1. 父级添加overflow属性方法
        > 可以通过触发BFC的方式，可以实现清除浮动效果。（BFC后面讲解）   
        > 可以给父级添加： overflow为 hidden|auto 加滚动条|scroll  机上水平滚动条 都可以实现。
        1. 优点：  代码简洁
        2. 缺点：  内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。
1. 使用after伪元素清除浮动
    > :after 方式为空元素的升级版，好处是不用单独加标签了.父级元素调用。
    ```html
    <style>
      .clearfix:after {
          content: "."; /*注意： content:"."  里面尽量跟一个小点，或者其他，尽量不要为空，否则再firefox 7.0前的版本会有生成空格。*/
          display: block; 
          height: 0; 
          clear: both; 
          visibility: hidden;  
      }   
      .clearfix {/* IE6、7 专有 */
          *zoom: 1;
      }   
    </style>
    ```
    1. 优点： 符合闭合浮动思想  结构语义化正确
    1. 缺点： 由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
    1. 代表网站： 百度、淘宝网、网易等

1. 使用before和after双伪元素清除浮动
    > 使用方法：父级元素调用
  ```html
  <style>
    .clearfix:before,.clearfix:after { 
      content:"";
      display:table;  /* 这句话可以出发BFC BFC可以清除浮动,BFC我们后面讲 */
    }
    .clearfix:after {
    clear:both;
    }
    .clearfix {
      *zoom:1;
    }
  </style>
  ```
    1. 优点：  代码更简洁
    1. 缺点：  由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
    1. 代表网站： 小米、腾讯等




    









1. 元素


参考：https://blog.csdn.net/luo609630199/article/details/80066491