isDate() ����
isNumeric() ����


typeName() ������ǿ��
���Է��أ�
Date
Boolean
String
Double

Empty
Nothing

ת���������͵ĺ�����
CBool():����һ���߼����͵����ݲ�����
CDate():����һ���������͵����ݲ�����
CString():����һ���ַ������͵����ݲ�����
CInt():����һ���������͵����ݲ�����
CLng():����һ��Long���͵����ݲ�����
CDbl():����һ��Double���͵����ݲ�����
CCur():����һ��Currency���͵����ݲ�����
CSng():����һ��Single���͵����ݲ�����
CByte():����һ��Byte���͵����ݲ�����
CDec():����һ��Decimal���͵����ݲ�����

CInt()���������м���������ת����������һ�����������ת����

vba�е�round(x,2)���������������룬������CInt()����һ����Ҳ�����м��������롣
ʹ��excel������ʽ��round��x,2���������õľ���һ�������ϵ��������롣

Int() �������ǿ���ʵ��ȥ��С��������Ŀ�ġ�

Asc�������������ַ�ת��Ϊ��������
Chr��������������������ת��Ϊ�ַ�

��һά�����ת�ú�����
Application.Transpose(arr)

Range.hasFormula �������жϸõ�Ԫ���Ƿ��й�ʽ��
Range.Formula ���� ֱ�ӷ��ع�ʽ���ַ�������û�й�ʽ�ĵĵ�Ԫ�����valueֵ��
Range.Formula ���� �� Range.Value ���� �����Ը���Ԫ��д�빫ʽ��

Application.Union �������Ѷ��Range������һ����Ϊһ���µ�Range���󷵻ء�

Application.Intersect ����

Range.CurrentRegion ����

Range.MergeCells ���� �жϵ�Ԫ���Ƿ�ϲ���
����ֵ�����������
True��ȫ�Ǻϲ���Ԫ��
False��ȫ�ǷǺϲ���Ԫ��
Null :��ʾ��Ч���ݣ���˼��range�����м��кϲ���Ԫ��Ҳ�зǺϲ���Ԫ��
�жϵ�ʱ����ʹ�ã�Range.MergeCells=Null ���жϡ�����ʹ��IsNull���жϡ�
�жϵ�ʱ����ʹ�ã�
Range.MergeCells=true �ǿ��Ժϲ���Ԫ��ġ�
Range.MergeCells=false �ǿ��Խ���ϲ���Ԫ��ġ�
Range.Merge ����  Range.UnMerge ����  ���Ժϲ��ͽ����Ԫ��ϲ���
Range.Merge True    ����������������ǿ��Ժϲ��������ǰ��н��кϲ���

Selection ���󣬱�ʾ���ڱ�ѡ�е�����

Ismissing���� �������ǿ����ж�һ�������Ƿ��ṩ����ֵ��ע�⣬�������ֻ�������жϱ������͵����ݣ����ǲ�������Ĭ��ֵ�ġ�

Mod ������� i Mod 4 

Rnd() ���������Rnd()*4 ��ʾһ����0���ӽ�4��С������ôInt(Rnd()*4)��ʾһ����0��4����������������������Int(Rnd()*(b-a+1)+a)  ��ʾa��b֮�䣬���Ұ���a��b�����������
����������й��ɵģ�Ϊ��ʹ��û�й��ɣ����������ǰ������д��һ�䣺Randomize   ��䡣


Application.EnableEvents =false
�������д�����������¼��Ĵ���
Application.EnableEvents =true
����ȥ�������¼���



