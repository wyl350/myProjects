# 一、 Markdown入门
> Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有HTML的格式。
1. 本文系一套Markdown入门教学课件 笔记
1. 关键词： [markdown](https://baike.baidu.com/item/markdown/3245829?fr=aladdin) [ UGC 服务](https://baike.baidu.com/item/UGC/66502?fr=aladdin)
1. 视频课件
    1. 视频课件地址：我的百度网盘>我的笔记>markdown
    1. 小马视频频道：http://komavideo.com
    1. 源代码：https://gitee.com/komavideo/LearnMarkdown  
    1. 备课基础知识：HTML
1. markdown相关：
    1. 官方网站：https://daringfireball.net/projects/markdown/
    1. GitHub Markdown Cheatsheet：https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
1. 开发工具
    1. Visual Studio Code(推荐)  查看markdowm文件的快捷键：crtl1. hift  1. 
    1. 记事本等文本编辑器
    1. Brackets
    1. ATOM
    1. Typora 
1. 预览工具
    1. **Chrome + Markdown Anywhere**  
    在Chrome Store中安装Markdown Anywhere插件，然后启动本地web服务器预览本地文件。
***

## 概要
01. 设置标题
01. 自然段改行
01. 引用表现
01. 增加分割线
01. 强调表现
01. 列表表示
01. 超文本链接
01. 代码高亮显示
01. 图片显示
01. 表格显示
***

## 实战演习
- 主页
- 新闻
- 体育
- 军事
- 娱乐
- 网络

## （一）设置标题
> html标题标记的生成(h1～h6)
```markdown
# h1标题
## h2标题
### h3标题
#### h4标题
##### h5标题
###### h6标题
h1标题
===
h2标题
---
以上的标题的效果和
# h1标题
## h2标题
效果是相同的，是简单写法。但是不存在标题3之后的简单写法。
```
**实战演习：**
展示：  
飞飞飞  
h1标题
===
h2标题
---
以上的标题的效果和
# h1标题
## h2标题
效果是相同的。
## （二）自然段改行
+ 直接输出的内容就是自然段，html 显示为 `<p>` 标签，但是物理回车并不能显示回车效果。  
+ 自然段改行需要主动改动，两种方法：  
  + 段落后面加两个以上的空格，该方法没有段落间距。本质上只有一个`p标签`，在`p标签`内部生成了`br标签`用于隔开段落。
  + 两个段落之间增加一个以上回车，该方法有段落间距。本质上生成了多个`p标签`。

**实战演习：**
1. 第一种方法换行：  
这是第一段  
这是第二段  
这是第三段  
1. 第二种方法换行：

这是第一段

这是第二段

这是第三段
## （三）引用表现
**引用文的表现方法：>，本质上是`<blackquote>`标签**
>引用某名人1名言：东南西北中发白万筒条  
引用某名人2名言：东南西北中发白万筒条  

**实战演习：**
## （四）加分割线
为文章分割线,本质上仍然是`<hr>`标签。

**实战演习：**
+ ---
**这里的分割线如何与h2标题区分？在三个-号后面空一格回车，就是这里的，没有回车就是h2标题。**
+ - - -
+ ***
+ ___
## （五）强调表现
* 斜体：*XXX*, _XXX_ ，本质上是`<em>标签`。
* 粗体：**XXX**, __XXX__，本质上是`<strong>标签`。
## （六）列表表示
**"-"、 "*"、 "+"三个符号的效果是相同的。**

**无序列表符号：-**  
**无序列表符号：***  
**无序列表符号：+**  
**有序列表符号：数字**  

**实战演习：**
- 项目
    - 体育
    - 军事
    - 娱乐
        - 救人
        - 杀人
            - 刀杀
            - 枪杀
- 主页
- 新闻
  - 体育
  - 军事
  - 娱乐
- 读书

* 读新闻
* 经典课程
    * vue入门
    * vue进阶
    * node.js教学
* 经典游戏

1. Python
1. Javascript
    1. Python
    1. Javascript
        - Python
        - Javascript
1. Ruby on Rails  
fesfesfs afesfaefasfasf as  
efas
1. Swift/Kotlin
    1. Python
    1. Javascript
    1. Ruby on Rails
1. Java
## （七）超文本链接
- 超文本链接的书写，本质为`<a>`标签。
    - http://komavideo.com
    - <http://komavideo.com>
    - [小马视频](http://komavideo.com)
    - [小马视频](http://komavideo.com "小马视频频道的个人网站")  
    第二个参数显示title属性。
## （八）代码高亮显示
- 语法
    - 代码高亮显示符号：`
    - 代码高亮显示符号：~
    - 有些时候，4个空格也是可以的。
    - 一个单引号是可以在行内表示代码的。  
    说明：您可以使用 `add(x,y)` 函数计算两个数的和。本质上是`<code>`标签
```js
function add(x, y) {
    return x+y;
}
```
~~~js
function add(x, y) {
    return x+y;
}
~~~
~~~
    function add(x, y) {
        return x+y;
    }
~~~
## （九）图片显示
语法：
- 图片的引用与显示：![]()  
  ![alt文字](图片url 图片title)
    - 普通图片展示  
![git lessons](https://wyl350.github.io/myresume/%E6%88%91%E7%9A%84%E5%AE%B6%E5%BA%AD/%E5%AE%B6%E5%BA%AD%E7%9B%B8%E5%86%8C/%E7%8E%8B%E8%89%B3%E9%9B%B7.jpg '我的照片')
![fefe](https://wyl350.github.io/myresume/%E6%88%91%E7%9A%84%E5%AE%B6%E5%BA%AD/%E5%AE%B6%E5%BA%AD%E7%9B%B8%E5%86%8C/%E5%85%A8%E5%AE%B6%E7%85%A7%E7%89%87%E5%B0%8F.jpg '我的照片')
    - 以下是超文本链接，但是超文本链接是靠一个图片展示的。
[![fefe](https://wyl350.github.io/myresume/%E6%88%91%E7%9A%84%E5%AE%B6%E5%BA%AD/%E5%AE%B6%E5%BA%AD%E7%9B%B8%E5%86%8C/%E5%85%A8%E5%AE%B6%E7%85%A7%E7%89%87%E5%B0%8F.jpg '我的照片')](https://wyl350.github.io/myresume/%E6%88%91%E7%9A%84%E5%AE%B6%E5%BA%AD/%E5%AE%B6%E5%BA%AD%E7%9B%B8%E5%86%8C/%E7%8E%8B%E8%89%B3%E9%9B%B7.jpg '我的照片')
**特别注意：只有 https 协议才能显示图片。**
## （十）表格显示
- 语法
    - 使用 `-` 和 `|` 来制作表格。

| TH1 | TH2 | TH3 |
|----|----|----|
| TD1 | TD3 | TD5 |
| TD2 | TD4 | TD6 |
### 使用表格对齐

| 居左 | 居中 | 居右 | 234234 |erwerw|
|:---|:---:|---:|-|-
|1    纷纷   我DVD |
|2 |3 |7|7|7|
|4 |5 |6 |