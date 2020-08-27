isDate() 函数
isNumeric() 函数


typeName() 函数更强大
可以返回：
Date
Boolean
String
Double

Empty
Nothing

转换数据类型的函数：
CBool():生成一个逻辑类型的数据并返回
CDate():生成一个日期类型的数据并返回
CString():生成一个字符串类型的数据并返回
CInt():生成一个整数类型的数据并返回
CLng():生成一个Long类型的数据并返回
CDbl():生成一个Double类型的数据并返回
CCur():生成一个Currency类型的数据并返回
CSng():生成一个Single类型的数据并返回
CByte():生成一个Byte类型的数据并返回
CDec():生成一个Decimal类型的数据并返回

CInt()函数是银行家四舍五入转换，而不是一般的四舍五入转换。

vba中的round(x,2)函数，是四舍五入，不过和CInt()函数一样，也是银行家四舍五入。
使用excel工作表公式，round（x,2）函数，用的就是一般意义上的四舍五入。

Int() 函数，是可以实现去除小数点后面的目的。

Asc（）函数：将字符转换为编码数字
Chr（）函数：将编码数字转换为字符

将一维数组的转置函数：
Application.Transpose(arr)

Range.hasFormula 属性来判断该单元格是否含有公式。
Range.Formula 属性 直接返回公式的字符串或者没有公式的的单元格本身的value值。
Range.Formula 属性 和 Range.Value 属性 都可以给单元格写入公式。

Application.Union 方法：把多个Range联合在一起，作为一个新的Range对象返回。

Application.Intersect 方法

Range.CurrentRegion 属性

Range.MergeCells 属性 判断单元格是否合并，
返回值有三种情况：
True：全是合并单元格
False：全是非合并单元格。
Null :表示无效数据，意思是range对象中既有合并单元格，也有非合并单元格。
判断的时候不能使用：Range.MergeCells=Null 来判断。必须使用IsNull来判断。
判断的时候不能使用：
Range.MergeCells=true 是可以合并单元格的。
Range.MergeCells=false 是可以解除合并单元格的。
Range.Merge 方法  Range.UnMerge 方法  可以合并和解除单元格合并。
Range.Merge True    加上这个参数不仅是可以合并，而且是按行进行合并。

Selection 对象，表示正在被选中的区域。

Ismissing（） 函数，是可以判断一个变量是否提供了数值。注意，这个函数只能用来判断变体类型的数据，且是不能设置默认值的。

Mod 运算符， i Mod 4 

Rnd() 随机函数。Rnd()*4 表示一个从0到接近4的小数，那么Int(Rnd()*4)表示一个从0到4的随机整数。万能随机数：Int(Rnd()*(b-a+1)+a)  表示a到b之间，并且包括a、b的随机整数。
随机数还是有规律的，为了使得没有规律，随机数运行前可以先写上一句：Randomize   这句。


Application.EnableEvents =false
这里可以写入引发级联事件的代码
Application.EnableEvents =true
可以去除级联事件。



