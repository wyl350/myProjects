可以用以下的代码来表示一个范围：

range(cells(1,1),cells(4,4))

 或者

cells(1,1).resize(4,4)
就可以了，单独cells没办法引用一个区域，必须借助range 或者resize。


扩展资料：

cells，是一种计算机语言，用于访问excel表格对应行列的单元格。

计算机语言

语言简介

cells

访问excel表格对应行列的单元格。

语法 cells( row,col)

参数row：数值类型，指定返回行。

参数coI：数值类型，指定返回列。如果任何参数的值为NULL，cells()函数返回NULL。





Set myRange = Worksheets("Sheet1").Range("A1:D5")

Set rng = Worksheets("Sheet1").Range("e1:i5")

