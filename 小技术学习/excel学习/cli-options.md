vba 类与对象的简单理解
1.首先我们打开VBA编程的界面，在工程资源管理器中右键添加类模块，并且命名为person，这样我们就创建了一个类

2.接下来，我们要在类里面填加字段来保存内容，最好使用的是private，如果使用public所保存的内容就没有约束性

Private sname As String '姓名
Private sgender As String '性别
Private sage As String '年龄

3.如果是这样写的话，这些字段不能被直接使用（读取，或者赋值）

所以我们还需要对他们的值进行传递，并且对这些值进行约束

Property Let name(str As String) '属性过程，简称属性
sname = str '把赋过来的值存进字段
End Property
Property Get name() As String
name = sname '把字段的值交给属性
End Property
Property Let gender(g As String) '属性过程，简称属性
     If g = "男" Or g = "女" Then
     sgender = g '把赋过来的值存进字段
     Else
     sgender = "女"
     End If
End Property
Property Get gender() As String
gender = sgender '把字段的值交给属性
End Property
Property Let age(a As String) '属性过程，简称属性
 If a < 0 Or a > 120 Then
 a = 0
 End If
 sage = a '把赋过来的值存进字段
End Property
Property Get age() As String
age = sage '把字段的值交给属性
End Property

4.我们可以在模块里面使用一下person这个类（创建一个对象）

Option Explicit
Sub 创建对象()
 Dim p As person '声明一个person类型的变量p
 Set p = New person '创建一个 person对象，赋值给变量
 p.name = "坦克"
 p.gender = "男"
 p.age = 18
 p.sayhello
 
 
 
End Sub