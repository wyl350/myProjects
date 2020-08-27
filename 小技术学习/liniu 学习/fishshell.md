http://www.ruanyifeng.com/blog/2017/05/fish_shell.html
# fishshell
## 安装
$ sudo apt-get install fish
## 启动
$ fish
## 彩色显示
默认彩色高亮显示
```bash
# 无效命令为红色
$ mkd

# 有效命令为蓝色
$ mkdir
# 有效路径会有下划线。
$ cat ~/somefi 
```
## 自动建议 
ish 会自动在光标后面给出建议，表示可能的选项，颜色为灰色。

```bash
# 命令建议
$ /bin/hostname

# 参数建议
$ grep --ignore-case

# 路径建议
$ ls node_modules
```

如果采纳建议，可以按下→或Control + F。如果只采纳一部分，可以按下Alt + →。

