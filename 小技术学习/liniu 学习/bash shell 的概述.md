# bash shell 的学习
shell 是一个应用程序，沟通操作系统内核。bash指令被bash程序解释成系统内核可以识别的指令进行操作。ls pwd vim都是一个一个的应用程序， 

bash 是Bourne Again Shell的简称，是从uniux系统的sh发展而来的，是用户和linux内核交互的工具，用户通过bash操作内核完成系统的使用和管理。

/bin/sh  (已经被/bin/bash替代) 由原来的
/bin/bash  (默认的shell)
/bin/ksh  (源自于贝尔实验室，兼容bash)
/bin/tcsh  (整合C shell，功能比较强大)
/bin/csh  (已经被tcsh取代)
/bin/zsh  (源自于ksh，但是功能更为强大)
每种shell 的功能比较类似，但是语法会稍有不同。
***
## bash 变量
可以给shell或者程序设置变量，变量是存在于内存当中的。
### 变量种类
1. 环境变量：environment
1. 自定义变量：local

这两种变量的作用范围是不同的。

set 指令可以查看当前shell环境下所有的变量。
env 指令查看所有的环境变量。


### bash shell 有以下几种设置变量的方式：
1. 通过自定义的方式
    - 格式 :variable = value
    - key1 = wode
    格式：echo $variable  获取变量的值
    这里引用使用${},放入双引号中，而不是单引号中。
    unset variable  删除
    HISTFILESIZE：记录历史指令保存的最大值
    COLUMNS：终端窗口显示的宽度
    LINES：终端窗口显示的高度
    PS1：设置提示符号前面的内容样式（\d,\h,\t,\u,\w,\!,\$,\l等）
    
1. 通过别名的方式
1. 通过set指令的方式
1. 通过环境变量的方式

## bash 
