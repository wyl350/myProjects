https://segmentfault.com/a/1190000021578722
1. 折叠代码快捷键
    1. 折叠所有区域代码的快捷： 
        - ctrl + k      ctrl + 0 ;
            > 先按下  ctrl 和 K，再按下 ctrl 和 0 ; ( 注意这个是零，不是欧 )
    1. 展开所有折叠区域代码的快捷
        - 先按下  ctrl 和 K，再按下 ctrl 和 J   
    1. vs code 特有的折叠代码的方式  
        > 但是对 md 文档不适用
          ```js
          // region 这是导出的代码
              这里写入代码
          // endregion
          ```
1. 查看 md 文档快捷键
    1. ctrl + shift +v
 
目前使用的四个插件
Open in Browser  右击选择浏览器打开html文件
JS_CSS_HTML Formatter   每次保存都会自动格式化 js css 和 html
Auto Rename Tag     自动修改配对的标签 html和xml
CSS Peek 追终至样式

KoroFileHeader    生成文件头部注释和函数注释的插件 使用方法可以直接在vscode中的插件安装页查看介绍  还有一个介绍使用网址



    Visual Studio Code 使用指南(vscode技巧)
VSCode是微软推出的一款轻量编辑器，采取了和VS相同的UI界面，搭配合适的插件可以优化前端开发的体验，这里为大家介绍一下vscode的技巧,需要的朋友可以参考下

布局：左侧是用于展示所要编辑的所有文件和文件夹的文件管理器，依次是`资源管理器`，`搜索`，`GIT`，`调试`，`插件`，右侧是打开文件的编辑区域，最多可同时打开三个编辑区域到侧边。

底栏：依次是`Git Branch`，`error&warning`，`编码格式`等

html文档中

　　1、按tab键快速生成文档头以及闭合标签，类似sublime text 所安装的插件，快速编辑，提高效率

　　2、js代码也有自动补全功能

　　快捷键命令

　　　　　　　　 ctrl+shift+p 控制面板

　　　　　　　　 ctrl+k、ctrl+o 打开资源管理器选择文件夹或文件

光标选择指定的文件夹，然后ctrl+shift+b 打开浏览器

安装

　　VSCode是微软推出的一款轻量编辑器，采取了和VS相同的UI界面，搭配合适的插件可以优化前端开发的体验。

　　HTML Snippets：增强了zen-coding，增加了H5的自动补全，安装后每次打开自动启用（可能与其他插件冲突）。

　　下载地址：https://code.visualstudio.com/Download 或者 https://www.jb51.net/softs/606746.html

配置

　　Ctrl + Shift + P 或 F1 打开命令面板（也可以使用 查看-》命令面板打开）；

　　输入 user set 后按回车打开用户配置；

　　使用 “editor.fontFamily”：“Consolas， ‘Courier New’， monospace” 选择字体样式，默认为“Consolas， ‘Courier New’， monospace”；使用 editor.fontSize“：14 控制字体大小，默认为14；使用 ”editor.wrappingColumn“：0使文本自动换行，默认为300；在左侧的默认配置中会有详细的中文描述，配置文件是json格式的文本文档。

插件

　　Ctrl + Shift + P 或 F1 打开扩展面板，输入 install 后按回车打开扩展安装面板；或点击侧边栏的最后一个按钮；或使用ctrl + shift + x命令打开；或使用 查看-》扩展打开扩展面板。

　　在对话框中输入［string ］@sort:installs可以根据下载量排序查看，选择所需插件，单击安装即可。

　　@sort:installs：根据下载量排序查看所有插件，asc 升序排列，desc 降序排列。

　　@sort:raTIng ：分级查看，asc 升序排列，desc 降序排列。

　　string可以为空

推荐插件




　　C/C++：添加C/C++支持，包括但不限于自动补全

　　Python：自动缩进，补全，查错，debug，代码格式化等等

　　beauTIfy：格式化html，css，js

　　vscode-icons：一款很火的图标主题

　　HTML Snippets：可以在不输入 《 的情况下提示

　　View In Browser：在浏览器中打开 HTML 文件

　　Crane - PHP Intellisense：PHP代码的自动补全插件

　　jQuery Code Snippets：一款jQuery重度患者的插件

　　Debugger for Chrome ：调试JavaScript

　　Git History：显示git log和line history

 

Git 的使用

　　需要本机已经安装 Git

　　无需安装插件，单机侧边栏的第三个图标即可进行 add、commit、push、pull。（或者使用ctrl+shift+g打开，或使用 查看-》Git 打开Git）

　　

主题更换

　　图标主题：Ctrl+shift +p 打开命令面板，输入 icon theme 后回车，选择一个即可。

　　颜色主题：Ctrl+shift +p 打开命令面板，输入 color theme 后回车，选择一个即可。

　　

跳转

　　跳转到文件：Ctrl+P。

　　跳转到符号：Ctrl+shift+o，可以跳转到文件中的方括号、大括号等等。

　　跳转到行：Ctrl+G，可以跳转到指定行。

　　

Debug

　　使用ctrl+d 打开debug面板。

　　可以根据需要配置launch.json

　　

常用功能

　　Emmet：使用 Tab 自动补全HTML标签

　　Markdown Preview：使用 Ctrl + shift + v预览markdown文件

　　使用shift + alt + up/down可以向上/下复制选中内容或者当前行

　

常用插件

　　View In Browser

　　- 预览页面（ctrl+F1）

　　vscode-icons

　　- 侧栏的图标，对于一个有视觉强迫症的人是必须要的

　　HTML Snippets

　　- 支持HTML5的标签提示

　　HTML CSS support

　　- css自动补齐

　　JS-CSS-HTML Formatter

　　

格式化

　　jQuery Code Snippets

　　jquery 自动提示

　　Path Autocomplete

　　- 路径自动补齐

　　Npm Intellisense

　　- npm包代码提示

　　ESLint

　　- 检测JS必备

　　Debugger for Chrome

　　- 方便调试

　　Auto Rename Tag

　　- 自动同步修改标签

　　Bootstrap 3 Snippets

　　- bootstrap必备

　　Vue 2 Snippets

　　- vue必备

　　background

　　- 一个萌萌的插件，可以自己设置vsc的背景图

　　

常用快捷键

　　（在快捷键部分， ⌘ 指 Command 键，⇧ 指 Shift 键，⌃ 指 Control 键，⌥ 指 OpTIon/Alt 键。）

　　这里主要就是实验F1上的快捷键，一些我认为没用的我就不列出来了。

　　向上（下）复制行 shift + alt + top（down）

　　向上（下）移动行* alt + top（down）*

　　新建一个窗口 ctrl + shift + N

　　行增加缩进： ctrl + ［

　　行减少缩进 * ctrl + ］**

　　裁剪尾随空格（去掉一行的末尾那些没用的空格）： ctrl + shift + x

　　强烈建议把这个启用，这样保存的时候就会自动删掉那些没用的空格，在很多公司的代码规范里都是不允许存在这些空格的。

　　显示隐藏侧边栏：ctrl + B

　　拆分编辑器（最多拆分成三块）：ctrl + /按ctrl + 1（2，3）就可以在拆分后的编辑器里切换

　　方法缩小ctrl +（-）

　　关闭编辑器 ctrl + W（F4）

　　切换编辑器 ctrl + shift + left（right）

　　也可以用 ctrl+1（2，3）

　　显示和隐藏侧边栏 ctrl + B

　　切换全屏 F11

　　切换自动换行 alt + Z

　　显示Git ctrl + shift + G

　　前提是你的项目必须是一个git项目

　　这个还是很有用的，有时候我们的屏幕不够大，可是代码没有自动换行，所以被遮住的代码就会看不到，但是你用这个快捷键就可以换行看到了。这个我是在用户设置里面设置成自动换行的。

　　

修改用户设置

　　把默认的用户设置成适合我们自己的还是很重要的。

　　也很简单，文件 – 首选项 – 用户设置，然后出来左边的默认设置是不能改的，需要在右边setTIngs.json中覆盖。

　　

修改快捷键

　　文件 – 首选项 – 键盘快捷方式，和修改用户设置的时候一样，找到你要修改的快捷键名字，右边覆盖就可以了，一些还没有绑定快捷键的功能可以在左边的最下面看到，然后快捷键的名字就是这个。

 

新建文件

　　右键 – 新建文件，文件后缀名自己加上，自动识别。

       新建.html文件后，空白页，没有页面默认代码结构，此时在编辑区输入html，回车第二个或者第三个即可。