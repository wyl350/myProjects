## 三种推送方式： 还不是很清楚
1. git push
默认采用simple方式:  
手动设置方式：`$ git config --global push.default simple`
1. git push
采用match方式
手动设置方式：`$ git config --global push.default matching`
1. git push --all origin
将所有本地分支都推送到origin主机。
***


1. `git push`
    > git push命令用于将本地分支的更新，推送到远程主机。它的格式与git pull命令相仿。  
    > git push不会推送标签（tag），除非使用--tags选项。
    1. git push <远程主机名> <本地分支名>:<远程分支名>
    > 注意，分支推送顺序的写法是<来源地>:<目的地>，所以git pull是<远程分支>:<本地分支>，而git push是<本地分支>:<远程分支>。  
    1. `git push origin master`
        > 如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），**如果该远程分支不存在，则会被新建**。上面命令表示，将本地的master分支推送到origin主机的master分支。如果后者不存在，则会被新建(意思是，向不存在的远程分支推送，可以不建立远程跟踪，推送之后，远程跟踪当然也就建立了。)。
    1. `git push origin :master`    删除远程分支
        ```bash
        $ git push origin :master
        # 等同于
        $ git push origin --delete master
        ```
        > 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。上面命令表示删除origin主机的master分支。
        - `git push origin`
            > 如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。
        - `git push`
            > 如果当前分支只有一个追踪主机，那么主机名都可以省略。
        - `git push -u origin master`
            > 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。
        - `git config --global push.default matching` 或者 `git config --global push.default simple`
            > 不带任何参数的`git push`，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送**所有**有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用**simple**方式。如果要修改这个设置，可以采用git config命令。
        - `git push --all origin`
            > 还有一种情况，就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要使用--all选项。上面命令表示，将所有本地分支都推送到origin主机。
        - git push --force origin 
            > 如果远程主机的版本比本地版本更新，推送时Git会报错，要求先在本地做git pull合并差异，然后再推送到远程主机。这时，如果你一定要推送，可以使用--force选项。上面命令使用--force选项，结果导致远程主机上更新的版本被覆盖。除非你很确定要这样做，否则应该尽量避免使用--force选项。
***

