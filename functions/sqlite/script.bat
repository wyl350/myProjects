REM 说明
REM 建库仅需要两个文件： 1. 建库脚本 1. widows 系统运行脚本


@ECHO OFF
%~d0:  REM %~d0 表示当前脚本所在目录
SQLITE3 tolist.DB < tolist.sql  
REM 依据建库脚本新建数据库

REM SQLITE3 tolist.DB .dump > tolist2.sql  
REM 备份到文件result.sql


